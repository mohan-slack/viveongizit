import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";

const HuxParticleText = () => {
  return (
    <div className="relative w-full h-64 lg:h-80">
      <ParticleTextEffect
        text="HUX"
        className="absolute inset-0"
        colors={['ff3a2f', 'ff6b47', 'ffa726', 'ffcc02', '66bb6a', '42a5f5', '5c6bc0', 'ab47bc']}
        animationForce={120}
        particleDensity={3}
      />
    </div>
  );
};

export { HuxParticleText };