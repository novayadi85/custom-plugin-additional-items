import { decodeProductOpaqueId } from "../xforms/id.js";

export default async function additional(context, shopId, filters) {
    const { collections } = context;
    const { Catalog } = collections;
    
    if (filters) {
        const { productId , variantId } = filters
        const item = await Catalog.findOne({ "product.productId": decodeProductOpaqueId(productId) });
        const { product: productItem } = item;
        console.log('called')
        const { variants } = productItem
        if(variants){
            return variants.find((vnt) => vnt._id === decodeProductOpaqueId(variantId));
        }
        
    }

    return null

}
  