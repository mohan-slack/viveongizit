import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import ringSensorTech from '@/assets/ring-sensor-tech.png';
import ringSleepMonitoring from '@/assets/ring-sleep-monitoring.png';
import ringSleekDesign from '@/assets/ring-sleek-design.png';
import ringHeartMonitoring from '@/assets/ring-heart-monitoring.png';
import ringHealthTracking from '@/assets/ring-health-tracking.png';
import ringActivityTracking from '@/assets/ring-activity-tracking.png';
import ringFitnessMonitoring from '@/assets/ring-fitness-monitoring.png';

export default function SmartRingZoomShowcase() {
	React.useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	const images = [
		{
			src: ringSensorTech,
			alt: 'Smart ring sensor technology',
		},
		{
			src: ringSleepMonitoring,
			alt: 'Sleep monitoring capabilities',
		},
		{
			src: ringSleekDesign,
			alt: 'Sleek modern ring design',
		},
		{
			src: ringHeartMonitoring,
			alt: 'Heart rate monitoring',
		},
		{
			src: ringHealthTracking,
			alt: 'Comprehensive health tracking',
		},
		{
			src: ringActivityTracking,
			alt: 'Activity and fitness tracking',
		},
	];

	return (
		<main className="w-full">
			<div className="relative flex h-[30vh] items-center justify-center bg-white pt-12">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold gradient-text bg-gradient-to-r from-viveon-red via-viveon-neon-purple to-viveon-neon-blue bg-clip-text text-transparent px-4">
					Smart Ring Features
				</h1>
			</div>
			<ZoomParallax images={images} />
			
			{/* Background section with final image */}
			<div 
				className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
				style={{ backgroundImage: `url(${ringFitnessMonitoring})` }}
			>
				<div className="absolute inset-0 bg-black/20"></div>
			</div>
		</main>
	);
}
