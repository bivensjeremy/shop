import getProducts from "@/app/lib/getProducts";
import ShopItem from "@/app/components/ShopItem";
import SearchBar from "../components/SearchBar";
import PaginationComp from "../components/PaginationComp";
import { unstable_noStore as noStore } from 'next/cache';
import FilterBy from "../components/FilterBy";

const Page = async ({ params, searchParams }) => {
    noStore();
    let category;
    const query = searchParams?.search || undefined;
    const page = Number(searchParams?.page) || 1;
    const limit = 16;

   if (Object.keys(params).length === 0) {
        category = undefined
    } else {
        category = params.category_slug[0]
    }

    const { shopItems, error } = await getProducts(category, query, page, limit);
    
    if (error) return <div className="text-center">{error}!</div>

    return (
        <div>
            <SearchBar storeNotAvailable={!shopItems} />

            <div className="grid grid-cols-1 items-center sm:grid-cols-3 justify-items-center ">
                <FilterBy category = {category} />
                <PaginationComp paginationData={shopItems?.meta.pagination} />
            </div>
            
            <div className="p-0 mx-auto">
                <div className="flex flex-wrap justify-center gap-0 sm:gap-2">
                    {shopItems.data?.map((post) => (
                        <ShopItem 
                            key={post.id}
                            props={post}
                        />
                    ))}
                </div>
            </div>
            
            <PaginationComp paginationData={shopItems?.meta.pagination}/>
        </div>
    );
}

export default Page;