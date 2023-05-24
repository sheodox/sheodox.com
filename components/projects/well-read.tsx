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
			bgClass="bg-pink-500"
			borderClass="border-pink-500"
		>
			<p>
				Well Read helps you organize your notes about books you&apos;re reading, so you&apos;re never lost when starting
				a new volume. You can also use it as a bookmark and look back at how much you&apos;ve read over time.
			</p>
			<Image
				src="/well-read/screenshot.png"
				height={895}
				width={1524}
				className="rounded-xl"
				alt="Well Read screenshot"
			/>
		</ProjectLayout>
	);
}
