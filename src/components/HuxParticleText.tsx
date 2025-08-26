import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";

const HuxParticleText = () => {
  return (
    <div className="relative w-full h-full min-h-[160px]">
      <ParticleTextEffect
        text="HUX"
        className="absolute inset-0"
        colors={['ff3a2f', 'ff6b47', 'ffa726', 'ffcc02', '00bcd4', '42a5f5', '5c6bc0', 'ab47bc']}
        animationForce={100}
        particleDensity={2}
      />
    </div>
  );
};

export { HuxParticleText };