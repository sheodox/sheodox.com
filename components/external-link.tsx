import { PropsWithChildren } from 'react';

export default function ExternalLink(props: PropsWithChildren<{ href: string; className?: string; rel?: string }>) {
	return (
		<a href={props.href} className={props.className} rel="noreferrer {rel ?? ''}" target="_blank">
			{props.children}
		</a>
	);
}
