import React from 'react';
import { Code, Megaphone, Palette, Search, Settings, ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
	{
		id: '1',
		title: 'Web Development',
		description:
			'We specialize in building high-performance, scalable, and secure web applications tailored to your business needs. From front-end to back-end, our solutions ensure seamless user experiences and robust functionality.',
		icon: 'Code',
	},
	{
		id: '2',
		title: 'Web Design',
		description:
			'Our team creates visually stunning and user-friendly designs that captivate and engage your audience. We focus on intuitive layouts, modern aesthetics, and responsive designs to make your brand stand out.',
		icon: 'Megaphone',
	},
	{
		id: '3',
		title: 'Maintenance',
		description:
			'Keep your systems running smoothly with our proactive monitoring and regular updates. We ensure zero downtime, enhanced security, and optimal performance for your digital assets.',
		icon: 'Settings',
	},
	{
		id: '4',
		title: 'Brand Identity',
		description:
			'Develop a unique and memorable brand presence that resonates with your target audience. From logos to complete design systems, we craft identities that leave a lasting impression.',
		icon: 'Palette',
	},
	{
		id: '5',
		title: 'SEO Optimization',
		description:
			'Boost your online visibility and drive organic traffic with our expert SEO services. We focus on keyword research, on-page optimization, and technical SEO to help you rank higher in search results.',
		icon: 'Search',
	},
];

const IconMap: Record<string, React.ReactNode> = {
	Code: <Code className="w-6 h-6" />,
	Megaphone: <Megaphone className="w-6 h-6" />,
	Palette: <Palette className="w-6 h-6" />,
	Search: <Search className="w-6 h-6" />,
	Settings: <Settings className="w-6 h-6" />,
};

const Services: React.FC = () => {
	return (
		<section id="services" className="py-24 md:py-40 bg-black">
			<div className="max-w-7xl mx-auto px-6">
				<div className="mb-24">
					<span className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase block mb-6">
						Execution Capabilities
					</span>
					<h2 className="text-4xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter">
						Pure Engineering. <br />
						<span className="text-zinc-700">Zero Compromise.</span>
					</h2>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
					{services.map((service) => (
						<div
							key={service.id}
							className="group relative p-12 bg-[#050505] border border-white/5 transition-all duration-500 hover:bg-[#0A0A0A] hover:z-10"
						>
							<div className="mb-8 text-white group-hover:text-[#E11D48] transition-colors duration-500">
								{IconMap[service.icon]}
							</div>
							<h3 className="text-2xl font-display font-black text-white mb-5 tracking-tighter">
								{service.title}
							</h3>
							<p className="text-zinc-500 leading-relaxed font-light mb-8 text-sm md:text-base">
								{service.description}
							</p>
							<div className="absolute bottom-0 left-0 w-full h-1 bg-[#E11D48] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
						</div>
					))}

					<div className="p-12 bg-white text-black flex flex-col justify-between items-start group hover:bg-zinc-100 transition-all duration-500">
						<h3 className="text-3xl font-display font-black leading-tight">
							Ready to start the operation?
						</h3>
						<a
							href="#contact"
							className="mt-12 inline-flex items-center gap-2 group/btn px-10 py-4 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all"
						>
							Initiate Project
							<ArrowUpRight size={16} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
