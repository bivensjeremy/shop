import { Suspense } from "react";
import Tagline from "../components/Tagline";
import Featured from "./Featured";
import ItemSuspense from "../shop/components/ItemSuspense";

const FeaturedContainer = () => {
    return (
        <section id="Featured" className="bg-accent py-12">
            <Tagline text='Today&apos;s Must Have'/>

            <Suspense fallback={
                <div className="flex bg-neutral rounded-md justify-center m-auto py-12 mt-6"> 
                    <ItemSuspense    /> 
                </div> 
            }> 
                <Featured />
            </Suspense>
        </section>
    );
}

export default FeaturedContainer;