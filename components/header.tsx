import Image from 'next/image';
import ExternalLink from './external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const headerLinks = [
	{
		text: 'Github',
		href: 'https://github.com/sheodox',
		icon: faGithub,
	},
	{
		text: 'Email',
		href: 'mailto:sheodox@gmail.com',
		icon: faEnvelope,
	},
	{
		text: 'Mastodon',
		href: 'https://mastodon.social/@sheodox',
		icon: faMastodon,
		rel: 'me',
	},
];

export default function Header() {
	const logoSize = 130;

	return (
		<header className="my-14 flex justify-center items-center gap-10">
			<Image src="/sheodox-logo.png" width={logoSize} height={logoSize} className="rounded-full" alt="sheodox logo" />
			<div>
				<h1 className="text-5xl font-bold">sheodox</h1>
				<div className="flex mt-2 gap-4">
					{headerLinks.map((link) => (
						<ExternalLink key={link.href} href={link.href} rel={link.rel ?? ''}>
							<FontAwesomeIcon icon={link.icon} className="h-8" />
							<span className="sr-only">{link.text}</span>
						</ExternalLink>
					))}
				</div>
			</div>
		</header>
	);
}
