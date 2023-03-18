import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import("../module/main/index"), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			<LandingPage />
		</>
	);
}
