export default function AboutMe() {
	return (
		<>
			<article className="mx-auto max-w-lg flex flex-col items-center gap-4 text-center">
				<p>Hi, I&apos;m sheodox! I&apos;m a Software Engineer from Minnesota, USA.</p>
				<p>
					I like making sites that help me organize my life and making tools to help learning Japanese. I hope my
					projects help you too!
				</p>
			</article>
			<article className="mx-auto max-w-lg flex flex-col items-center gap-4 text-center">
				<div className="rounded-xl border-2 border-purple-400 p-4 flex flex-col gap-4">
					<p>
						If you enjoy what I do, any kind of support is appreciated!
						<br /> (That includes telling your friends!)
					</p>
					<a
						href="https://www.buymeacoffee.com/sheodox"
						className="text-xl inline-block p-5 rounded font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500  hover:from-purple-500 hover:to-pink-500"
					>
						Buy Me a Coffee
					</a>
				</div>
			</article>
		</>
	);
}
