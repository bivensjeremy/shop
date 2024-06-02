import { Suspense } from "react";
import ItemSuspense from "./shop/components/ItemSuspense";
import Video from "./home/Video";
import Quote from "./home/Quote";
import Categories from "./home/Categories";
import Brands from "./home/Brands";
import Curator from "./home/Curator";
import Featured from "./home/Featured";
import Splash from "./home/Splash";
import FeaturedContainer from "./home/FeaturedContainer";

export default function Home() {
return (
	<main className="">
		<Video />
		<Splash />
		<Quote />
		<Categories />
		<Brands />
		<Curator />
		<FeaturedContainer />
	</main>
	);
}
