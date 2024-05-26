import { Skeleton } from "@nextui-org/react";
import ItemSuspense from "./ItemSuspense";
import SearchBar from "./SearchBar";

const StoreSuspense = () => {
    let suspenseCard = [];

    for (let i=0; i<=16; i++) {
        suspenseCard.push( 
            <ItemSuspense key={i} /> 
        )
    }

    return (
        <div>
            <SearchBar storeNotAvailable={true} />

            <Skeleton className="rounded-lg w-2/3 h-12 p-3 m-auto my-4"  />

            <div className="p-0 m-auto">
                <div className="flex flex-wrap justify-center gap-0 sm:gap-2 bg-default">
                    {suspenseCard}
                </div>
            </div>
        </div>
    );
}

export default StoreSuspense;