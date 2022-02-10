import ProjectLayout from './project-layout';
import Image from 'next/image';

const tags = ['Productivity'];

export default function Konshuu() {
	return (
		<ProjectLayout
			name="Konshuu"
			tags={tags}
			logoUrl="/konshuu/logo.svg"
			href="https://konshuu.com"
			tagLine="Your Entire Week At A Glance"
		>
			<p>Konshuu is a todo planner that helps you schedule your week all at once.</p>
			<Image src="/konshuu/demo.png" width={802} height={771} className="rounded-xl" alt="Konshuu screenshot" />
		</ProjectLayout>
	);
}
