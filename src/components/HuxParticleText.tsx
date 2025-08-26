import { ParticleTextEffect } from "@/components/ui/interactive-text-particle";

const HuxParticleText = () => {
  return (
    <div className="relative w-full h-full min-h-[160px]">
      <ParticleTextEffect
        text="HUX"
        className="absolute inset-0"
        colors={['00d4ff', '0099ff', '0066ff', '3366ff', '6633ff', '9933ff', 'cc33ff', 'ff3399']}
        animationForce={60}
        particleDensity={2}
      />
    </div>
  );
};

export { HuxParticleText };