import ProjectLayout from './project-layout';
import Image from 'next/image';

const tags = ['Japanese'];

export default function JimakuPlayer() {
	return (
		<ProjectLayout
			name="Jimaku Player"
			tags={tags}
			logoUrl="/jimaku-player/logo.svg"
			href="https://github.com/sheodox/jimaku-player#readme"
			tagLine="Anime With Your Subtitles"
		>
			<p>Jimaku Player is a project that lets you use your own Japanese subtitles on anime on Crunchyroll and VRV.</p>

			<p>
				You can use subtitles in any of the text-based SubRip, Advanced Substation Alpha, or WebVTT subtitle formats. It
				even works with mistimed subtitles!
			</p>
		</ProjectLayout>
	);
}
