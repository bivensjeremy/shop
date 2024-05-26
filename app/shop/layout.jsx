import { Suspense } from "react";
import Banner from "../components/Banner";
import StoreSuspense from "./components/StoreSuspense";

const layout = ({children}) => {
    return (
        <div>
            <Banner />
            
            <section className="bg-default text-foreground">
                <div className="p-3 sm:p-10 m-auto text-justify">
                    <Suspense fallback={
                        <StoreSuspense />
                    }>
                        {children}
                    </Suspense>
                </div>
            </section>
            
        </div>
    );
}

export default layout;