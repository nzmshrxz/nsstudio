import React from 'react';
import { Project } from '../types';
import foodieMock from '../assets/foodiemock.png';
import bulletinMock from '../assets/bulletinmock.png';
import foreverMock from '../assets/forevermock.png';
import ppfMock from '../assets/ppfmock.png';
import aethelandco from '../assets/aethelandco.png'
import aurafitness from '../assets/aurafitness.png'


const projects: Project[] = [
	{
		id: '1',
		title: 'Foodie',
		category: 'Full-Stack Engineering',
		image: foodieMock,
		description: 'High-performance control systems for aerospace interfaces.',
		link: 'https://foodiepiee.netlify.app/', // Added link property
	},
	{
		id: '2',
		title: 'Bulletin',
		category: 'Brand Architecture',
		image:bulletinMock,
		description: 'Minimalist visual language for an international finance collective.',
		link: 'https://bulletin-news-4s4o.vercel.app/', // Added link property
	},
	{
		id: '3',
		title: 'Forever',
		category: 'Strategic Identity',
		image: foreverMock,
		description: 'Deep optimization of authority and authority in the technical space.',
		link: 'https://foreverbynazam.netlify.app/', // Added link property
	},
	{
		id: '4',
		title: 'Portfolio',
		category: 'AI Integration',
		image: ppfMock,
		description: 'Scaling a vision from concept to market-leading digital platform.',
		link: 'https://nazamshiraz.vercel.app/', // Added link property
	},
	{
		id: '5',
		title: 'Athel & Co',
		category: 'Interrior and architect',
		image: aethelandco,
		description: 'Scaling a vision from concept to market-leading digital platform.',
		link: 'https://athelandco.vercel.app/', // Added link property
	},
	{
		id: '6',
		title: 'Aura Fitness',
		category: 'Gym',
		image: aurafitness,
		description: 'Scaling a vision from concept to market-leading digital platform.',
		link: 'https://aurafitness-two.vercel.app/', // Added link property
	},
];

const Projects: React.FC = () => {
	return (
		<section id="projects" className="py-24 md:py-40 bg-black overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 mb-20">
				<div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
					<div className="max-w-2xl">
						<span className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase block mb-6">
							Our Gallery
						</span>
						<h2 className="text-4xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter">
							The Vault.
						</h2>
					</div>
					<a
						href="#contact"
						className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-all duration-300"
					>
						View All Intel
						<div className="w-10 h-[1px] bg-zinc-800 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
					</a>
				</div>
			</div>

			<div className="relative w-full overflow-hidden group cursor-grab active:cursor-grabbing">
				<div className="flex w-max animate-[projectMarquee_60s_linear_infinite] group-hover:[animation-play-state:paused] py-4">
					{[...projects, ...projects].map((project, idx) => (
						<div
							key={`${project.id}-${idx}`}
							className="flex-shrink-0 w-[300px] sm:w-[450px] md:w-[700px] px-2 group/card"
						>
							<div className="relative aspect-[16/9] overflow-hidden bg-black border border-white/5">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-all duration-1000 group-hover/card:scale-105 opacity-40 grayscale group-hover/card:grayscale-0 group-hover/card:opacity-100"
								/>

								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 md:opacity-0 group-hover/card:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 md:p-14">
									<div className="translate-y-4 md:translate-y-8 group-hover/card:translate-y-0 transition-transform duration-700">
										<span className="text-zinc-400 text-[10px] font-mono uppercase tracking-[0.4em] block mb-3">
											{project.category}
										</span>
										<h3 className="text-2xl md:text-5xl font-display font-black text-white mb-4 leading-none tracking-tighter">
											{project.title}
										</h3>
										<a
											href={project.link} // Updated to use project.link
											target="_blank"
											rel="noopener noreferrer"
											className="px-8 py-3 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all"
										>
											Visit Intel
										</a>
									</div>
								</div>

								<div className="absolute top-8 right-8 text-white/20 text-[10px] font-mono font-black">
									/{(idx % projects.length) + 1}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<style>{`
        @keyframes projectMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
		</section>
	);
};

export default Projects;
