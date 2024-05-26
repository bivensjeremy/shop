import Video from "./components/home/Video";
import Splash from "./components/home/Splash";
import Quote from "./components/home/Quote";
import Categories from "./components/home/Categories";
import Brands from "./components/home/Brands";
import Curator from "./components/home/Curator";
import Featured from "./components/home/Featured";
import { Button } from "@nextui-org/react";
import { Suspense } from "react";
import ItemSuspense from "./shop/components/ItemSuspense";

export default function Home() {
return (
	<main>
		<Video />
		<Splash />
		<Quote />
		<Categories />
		<Brands />
		<Curator />

		<Suspense fallback={
			<div className="flex bg-default rounded-md justify-center m-auto py-12 mt-6">
				<ItemSuspense />
			</div>
		}>
			<Featured />
		</Suspense>
		
	</main>
	);
}
