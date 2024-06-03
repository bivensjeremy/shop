import getProducts from "@/app/lib/getProducts";
import ShopItem from "@/app/components/ShopItem";
import SearchBar from "@/app/components/(store)/SearchBar";
import FilterBy from "@/app/components/(store)/FilterBy";
import PaginationComp from "@/app/components/(store)/PaginationComp";

const  page = async({ params, searchParams }) => {    
    let category;
    const query = searchParams?.search || undefined;
    const page = Number(searchParams?.page) || 1;
    const limit = 16;

    if (Object.keys(params).length === 0) {
        category = undefined
    } else {
        category = params.category_slug[0]
    }

    const { shopItems } = await getProducts(category, query, page, limit);

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

export default page;