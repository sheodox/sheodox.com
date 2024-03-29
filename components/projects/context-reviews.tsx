import ProjectLayout from './project-layout';

const tags = ['Japanese'];

export default function ContextReviews() {
	return (
		<ProjectLayout
			name="Context.Reviews"
			tags={tags}
			logoUrl="/context.reviews/logo.svg"
			href="https://context.reviews"
			tagLine="Study Japanese Using Anything"
			borderClass="border-cyan-500"
			bgClass="bg-cyan-500"
		>
			<p>
				Context.Reviews that helps you build Anki flash cards to learn Japanese words using the native materials you
				want to read.
			</p>
			<p>
				It uses a browser extension to watch for your Jisho.org searches and later helps you build beautiful looking
				Anki cards by just selecting text.{' '}
				<strong>That means you can forget about writing down every new word you encounter</strong> while you&apos;re
				reading and concentrate on definitions, Context.Reviews will be ready to help when you&apos;re done.
			</p>
			<p>
				You can also import phrases from subtitle files directly! Just upload a <code>.srt</code> or <code>.ass</code>{' '}
				file! Now you can be 100% prepared by learning all the words in a show ahead of time.
			</p>
			<video src="/context.reviews/anki-export-demo.mp4" autoPlay muted loop controls className="rounded-2xl" />
		</ProjectLayout>
	);
}
