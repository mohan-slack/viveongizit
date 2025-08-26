import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";

const HuxParticleText = () => {
  return (
    <div className="relative w-full h-full">
      <ParticleTextEffect
        text="HUX"
        className="absolute inset-0"
        colors={['ff3a2f', 'ff6b47', 'ffa726', 'ffcc02', '66bb6a', '42a5f5', '5c6bc0', 'ab47bc']}
        animationForce={120}
        particleDensity={2}
      />
    </div>
  );
};

export { HuxParticleText };