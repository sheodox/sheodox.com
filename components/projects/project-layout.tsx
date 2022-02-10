import { PropsWithChildren } from 'react';
import Image from 'next/image';

interface ProjectLayoutProps {
	name: string;
	tagLine: string;
	href: string;
	tags: string[];
	logoUrl: string;
}

const logoSize = 150;

export default function ProjectLayout(props: PropsWithChildren<ProjectLayoutProps>) {
	return (
		<article className="bg-slate-700 rounded-2xl p-5 flex flex-col md:flex-row gap-14">
			<div className="rounded-full bg-slate-900 self-center md:self-start p-7 flex-shrink-0">
				<a href={props.href} target="_blank" rel="noreferrer">
					<Image src={props.logoUrl} height={logoSize} width={logoSize} alt="logo" />
				</a>
			</div>
			<div>
				<div className="text-center md:text-left">
					<h1 className="text-4xl">
						<a
							href={props.href}
							className="hover:text-purple-300 hover:underline transition-colors"
							target="_blank"
							rel="noreferrer"
						>
							{props.name}
						</a>
					</h1>
					<p className="text-xl italic">{props.tagLine}</p>
					<div className="flex gap-2 mb-4 justify-center md:justify-start">
						{props.tags.map((tag) => (
							<span key={tag} className="px-2 py-1 bg-slate-600 rounded">
								{tag}
							</span>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-4 items-start">{props.children}</div>
			</div>
		</article>
	);
}
