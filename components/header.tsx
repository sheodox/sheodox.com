import Image from 'next/image';

export default function Header() {
	const logoSize = 130;

	return (
		<header className="my-14 flex justify-center items-center gap-10">
			<Image src="/sheodox-logo.png" width={logoSize} height={logoSize} className="rounded-full" />
			<h1 className="text-5xl font-bold">sheodox</h1>
		</header>
	);
}
