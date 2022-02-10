import ContextReviews from './projects/context-reviews';
import Konshuu from './projects/konshuu';
import JimakuPlayer from './projects/jimaku-player';
import WellRead from './projects/well-read.tsx';

export default function Projects() {
	return (
		<section className="flex flex-col gap-14 mb-14">
			<ContextReviews />
			<JimakuPlayer />
			<Konshuu />
			<WellRead />
		</section>
	);
}
