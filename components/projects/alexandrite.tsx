import ProjectLayout from './project-layout';
import Image from 'next/image';

const tags = ['Social'];

export default function Alexandrite() {
	return (
		<ProjectLayout
			name="Alexandrite"
			tags={tags}
			logoUrl="/alexandrite/logo.svg"
			href="https://alexandrite.app/"
			tagLine="Desktop client for the fediverse's reddit"
			bgClass="bg-purple-500"
			borderClass="border-purple-500"
		>
			<p>
				Alexandrite is a beautiful desktop-first alternative web UI for Lemmy, a social link aggregator and discussion
				forum for the Fediverse.
			</p>
			<Image
				src="/alexandrite/demo.png"
				width={1689}
				height={1224}
				className="rounded-xl"
				alt="Alexandrite screenshot"
			/>
		</ProjectLayout>
	);
}
