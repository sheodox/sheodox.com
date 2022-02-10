import ProjectLayout from './project-layout';
import Image from 'next/image';

const tags = ['Productivity'];

export default function WellRead() {
	return (
		<ProjectLayout
			name="Well Read"
			tags={tags}
			logoUrl="/well-read/logo.svg"
			href="https://wellread.app/"
			tagLine="Read Without Losing the Plot"
		>
			<p>
				Well Read helps you organize your notes about books you're reading, so you're never lost when starting a new
				volume.
			</p>
			<Image src="/well-read/screenshot.png" height={895} width={1524} className="rounded-xl" />
		</ProjectLayout>
	);
}
