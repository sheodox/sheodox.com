import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import AboutMe from '../components/about-me';
import Projects from '../components/projects';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>sheodox</title>
				<meta name="description" content="Projects by sheodox" />
				<link rel="icon" href="/sheodox-logo.ico" />
			</Head>

			<Header />

			<main className="max-w-screen-xl mx-auto flex flex-col gap-14 px-4">
				<AboutMe />
				<Projects />
			</main>

			<footer className="bg-slate-900 p-4 text-center font-bold">&copy;2022 sheodox</footer>
		</>
	);
};

export default Home;
