import commerce from "./commerce";

export default async function getProducts(category, query, page) {
    // throw new Error('Failed to Delete Invoice');
    let categorySlug = null
    let shopItems = null
    let error = null;
    let searchQuery = null 

    if (!query) {
        searchQuery = undefined
    } else { 
        searchQuery = query
    }

    try {
        shopItems = await commerce.products.list({
            category_slug: category,
            limit: 16,
            query: query,
            page: page
        })
    } catch (e) {
       error =  e.message
        console.log(e)
    }
    
    return { error, shopItems }
}