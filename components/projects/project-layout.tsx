import { PropsWithChildren } from 'react';
import Image from 'next/image';
import ExternalLink from '../external-link';

interface ProjectLayoutProps {
	name: string;
	tagLine: string;
	href: string;
	tags: string[];
	logoUrl: string;
	borderClass: string;
	bgClass: string;
}

const logoSize = 150;

const BgUnderlay = (props: { bgClass: string }) => (
	<div className={`absolute opacity-10 inset-0 pointer-events-none ${props.bgClass}`} />
);

export default function ProjectLayout(props: PropsWithChildren<ProjectLayoutProps>) {
	return (
		<article
			className={`project-layout relative bg-slate-700 rounded-2xl p-5 flex flex-col md:flex-row gap-14 rounded-xl border-2 ${props.borderClass}`}
		>
			<BgUnderlay bgClass={props.bgClass} />
			<div className={`rounded-full self-center md:self-start p-7 flex-shrink-0 relative overflow-hidden`}>
				<BgUnderlay bgClass={props.bgClass} />
				<ExternalLink href={props.href}>
					<Image src={props.logoUrl} height={logoSize} width={logoSize} alt="logo" />
				</ExternalLink>
			</div>
			<div>
				<div className="text-center md:text-left">
					<h1 className="text-4xl">
						<ExternalLink
							href={props.href}
							className="hover:text-purple-300 hover:underline transition-colors relative"
						>
							{props.name}
						</ExternalLink>
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
