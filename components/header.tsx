import Image from 'next/image';
import ExternalLink from './external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
	const logoSize = 130;

	return (
		<header className="my-14 flex justify-center items-center gap-10">
			<Image src="/sheodox-logo.png" width={logoSize} height={logoSize} className="rounded-full" alt="sheodox logo" />
			<div>
				<h1 className="text-5xl font-bold">sheodox</h1>
				<div className="flex mt-2">
					<ExternalLink href="https://github.com/sheodox">
						<FontAwesomeIcon icon={faGithub} className="h-8" />
						<span className="sr-only">Github</span>
					</ExternalLink>
				</div>
			</div>
		</header>
	);
}
