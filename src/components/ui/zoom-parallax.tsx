'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 0.7], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 0.7], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 0.7], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 0.7], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 0.7], [1, 9]);
	const scaleFinal = useTransform(scrollYProgress, [0.7, 1], [1, 1.2]);
	const opacityOthers = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8];

	return (
		<div ref={container} className="relative h-[250vh] bg-white">
			<div className="sticky top-0 h-screen overflow-hidden bg-white flex items-center justify-center">
				{images.slice(0, 6).map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale, opacity: opacityOthers }}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''}`}
						>
							<div className="relative h-[25vh] w-[25vw] min-w-[200px] min-h-[200px]">
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-contain rounded-lg shadow-xl"
								/>
							</div>
						</motion.div>
					);
				})}
				
				{/* Final centered image */}
				{images[6] && (
					<motion.div
						style={{ scale: scaleFinal }}
						className="absolute top-0 flex h-full w-full items-center justify-center"
					>
						<div className="relative w-[90vw] md:w-[70vw] lg:w-[60vw] h-[60vh] max-w-5xl">
							<img
								src={images[6].src || '/placeholder.svg'}
								alt={images[6].alt || 'Final parallax image'}
								className="h-full w-full object-contain rounded-lg"
							/>
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
}
