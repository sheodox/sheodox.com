import { PropsWithChildren } from 'react';

export default function ExternalLink(props: PropsWithChildren<{ href: string; className?: string }>) {
	return (
		<a href={props.href} className={props.className} rel="noreferrer" target="_blank">
			{props.children}
		</a>
	);
}
