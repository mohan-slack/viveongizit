import React, { useEffect, useRef, useState } from 'react';

interface Pointer {
  x?: number;
  y?: number;
}

interface Particle {
  ox: number;
  oy: number;
  cx: number;
  cy: number;
  or: number;
  cr: number;
  pv: number;
  ov: number;
  f: number;
  rgb: number[];
  draw(): void;
  move(interactionRadius: number, hasPointer: boolean): boolean;
}

interface TextBox {
  str: string;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
}

export interface ParticleTextEffectProps {
  text?: string;
  colors?: string[];
  className?: string;
  animationForce?: number;
  particleDensity?: number;
}

const ParticleTextEffect: React.FC<ParticleTextEffectProps> = ({
  text = 'HOVER!',
  colors = [
    'ffad70', 'f7d297', 'edb9a1', 'e697ac', 'b38dca',
    '9c76db', '705cb5', '43428e', '2c2142'
  ],
  className = '',
  animationForce = 80,
  particleDensity = 4,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<Pointer>({});
  const hasPointerRef = useRef<boolean>(false);
  const interactionRadiusRef = useRef<number>(100);

  const [canvasSize, setCanvasSize] = useState<{ width: number; height: number }>({
    width: 800,
    height: 200,
  });

  const [textBox] = useState<TextBox>({ str: text });

  const rand = (max = 1, min = 0, dec = 0): number => {
    return +(min + Math.random() * (max - min)).toFixed(dec);
  };

  class ParticleClass implements Particle {
    ox: number;
    oy: number;
    cx: number;
    cy: number;
    or: number;
    cr: number;
    pv: number;
    ov: number;
    f: number;
    rgb: number[];

    constructor(x: number, y: number, rgb: number[] = [rand(128), rand(128), rand(128)]) {
      this.ox = x;
      this.oy = y;
      this.cx = x;
      this.cy = y;
      this.or = rand(3, 1);
      this.cr = this.or;
      this.pv = 0;
      this.ov = 0;
      this.f = rand(animationForce + 25, animationForce - 10);
      this.rgb = rgb.map(c => Math.max(0, c + rand(20, -20)));
    }

    draw() {
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.fillStyle = `rgb(${this.rgb.join(',')})`;
      ctx.beginPath();
      ctx.arc(this.cx, this.cy, this.cr, 0, 2 * Math.PI);
      ctx.fill();
    }

    move(interactionRadius: number, hasPointer: boolean) {
      let moved = false;

      // Add stable vibration - subtle continuous oscillation
      const time = Date.now() * 0.001;
      const vibrationX = Math.sin(time * 2 + this.ox * 0.01) * 0.3;
      const vibrationY = Math.cos(time * 2 + this.oy * 0.01) * 0.3;

      if (hasPointer && pointerRef.current.x !== undefined && pointerRef.current.y !== undefined) {
        const dx = this.cx - pointerRef.current.x;
        const dy = this.cy - pointerRef.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist < interactionRadius && dist > 0) {
          const force = Math.min(this.f * 0.8, (interactionRadius - dist) / dist * 4);
          this.cx += (dx / dist) * force;
          this.cy += (dy / dist) * force;
          // Add subtle rotation and scale effects
          this.cr = this.or * (1 + Math.sin(time * 10) * 0.3);
          moved = true;
        }
      }

      const odx = (this.ox + vibrationX) - this.cx;
      const ody = (this.oy + vibrationY) - this.cy;
      const od = Math.hypot(odx, ody);

      if (od > 0.5) {
        const restore = Math.min(od * 0.15, 4);
        this.cx += (odx / od) * restore;
        this.cy += (ody / od) * restore;
        // Reset radius gradually with subtle pulse
        this.cr = this.cr * 0.98 + this.or * 0.02 * (1 + Math.sin(time * 3) * 0.1);
        moved = true;
      } else {
        // Even if particles are at rest, apply tiny vibration
        moved = true;
      }

      this.draw();
      return moved;
    }
  }

  const dottify = () => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas || !textBox.x || !textBox.y || !textBox.w || !textBox.h) return;

    const data = ctx.getImageData(textBox.x, textBox.y, textBox.w, textBox.h).data;
    const pixels = data.reduce((arr: any[], _, i, d) => {
      if (i % 4 === 0) {
        arr.push({
          x: (i / 4) % textBox.w!,
          y: Math.floor((i / 4) / textBox.w!),
          rgb: d.slice(i, i + 4),
        });
      }
      return arr;
    }, []).filter(p => p.rgb[3] && !(p.x % particleDensity) && !(p.y % particleDensity));

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pixels.forEach((p, i) => {
      particlesRef.current[i] = new ParticleClass(
        textBox.x! + p.x,
        textBox.y! + p.y,
        p.rgb.slice(0, 3)
      );
      particlesRef.current[i].draw();
    });

    particlesRef.current.splice(pixels.length, particlesRef.current.length);
  };

  const write = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    textBox.str = text;
    // Make text larger and more prominent
    textBox.h = Math.floor(Math.min(canvas.width / textBox.str.length * 1.0, canvas.height * 0.8));

    interactionRadiusRef.current = Math.max(80, textBox.h * 1.2);

    ctx.font = `900 ${textBox.h}px "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    textBox.w = Math.round(ctx.measureText(textBox.str).width);
    textBox.x = 0.5 * (canvas.width - textBox.w);
    textBox.y = 0.5 * (canvas.height - textBox.h);

    const gradient = ctx.createLinearGradient(textBox.x, textBox.y, textBox.x + textBox.w, textBox.y + textBox.h);
    const N = colors.length - 1;
    colors.forEach((c, i) => gradient.addColorStop(i / N, `#${c}`));
    ctx.fillStyle = gradient;

    ctx.fillText(textBox.str, 0.5 * canvas.width, 0.5 * canvas.height);
    dottify();
  };

  const animate = () => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current.forEach(p => {
      p.move(interactionRadiusRef.current, hasPointerRef.current);
    });
    
    // Always continue animation for stable vibration
    animationIdRef.current = requestAnimationFrame(animate);
  };

  const initialize = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    // Get the actual container dimensions
    const container = canvas.parentElement;
    if (container) {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width || 800;
      canvas.height = rect.height || 200;
      setCanvasSize({ width: canvas.width, height: canvas.height });
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    write();
    
    // Start continuous animation for stable vibration
    if (!animationIdRef.current) {
      animate();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas && canvas.parentElement) {
        const rect = canvas.parentElement.getBoundingClientRect();
        setCanvasSize({
          width: rect.width || 800,
          height: rect.height || 200,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial size check
    setTimeout(handleResize, 100);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    initialize();
  }, [text, colors, animationForce, particleDensity, canvasSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctxRef.current = ctx;
    initialize();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    pointerRef.current.x = (e.clientX - rect.left) * scaleX;
    pointerRef.current.y = (e.clientY - rect.top) * scaleY;
    hasPointerRef.current = true;

    if (!animationIdRef.current) animate();
  };

  const handlePointerLeave = () => {
    hasPointerRef.current = false;
    pointerRef.current.x = undefined;
    pointerRef.current.y = undefined;

    if (!animationIdRef.current) animate();
  };

  const handlePointerEnter = () => {
    hasPointerRef.current = true;
  };

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className} cursor-crosshair transition-all duration-300 hover:cursor-pointer`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerEnter={handlePointerEnter}
      style={{ 
        filter: hasPointerRef.current ? 'brightness(1.1) contrast(1.05)' : 'none',
        transition: 'filter 0.2s ease'
      }}
    />
  );
};

export { ParticleTextEffect };