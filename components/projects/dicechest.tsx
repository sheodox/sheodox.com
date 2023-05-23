import ProjectLayout from './project-layout';
import Image from 'next/image';

const tags = ['Productivity'];

export default function DiceChest() {
	return (
		<ProjectLayout
			name="Dice Chest"
			tags={tags}
			logoUrl="/dicechest/logo.svg"
			href="https://dicechest.com"
			tagLine="Plan things with just the broad strokes. Let Dice Chest decide the specifics."
		>
			<p>
				Dice Chest is useful for planning events. Create a category for each event like <em>Dates</em> or{' '}
				<em>Hangouts With Friends</em>, then make lists of activities for each kind of activity you might plan.
			</p>
			<p>
				I made it to help plan dates with my wife. We have a <em>Dates</em> category, and activity lists for{' '}
				<em>Restaurants, Movies, Shows, Walks</em> etc.
			</p>
			<p>
				Planning an event is as easy as deciding what <em>type</em> of activities you want to do, and Dice Chest will
				give you a plan with a random activity from each list.
			</p>

			<Image
				src="/dicechest/dates-plan.png"
				width={1028}
				height={488}
				className="rounded-xl"
				alt="Dice Chest screenshot"
			/>
		</ProjectLayout>
	);
}
