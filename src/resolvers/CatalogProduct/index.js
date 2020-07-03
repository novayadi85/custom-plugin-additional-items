import { decodeProductOpaqueId , encodeProductOpaqueId } from "../../xforms/id.js";

export default {
    additional: async (node, args, context, info) => {
        const { additional } = node || {};
        if(typeof additional != "undefined"){
            const additionals = await Promise.all(additional.map(async _catalog => {
                
                const productId = decodeProductOpaqueId(_catalog.productId)
                const variantId = decodeProductOpaqueId(_catalog.variantId)

                //console.log(productId)
                //console.log(encodeProductOpaqueId(_catalog.productId))

                const filter = {
                    productId,
                    variantId
                }
                _catalog.variant = await context.queries.additional(context, false, filter);
                //_catalog.productId = decodeProductOpaqueId(_catalog.productId)
                //_catalog.productId = encodeProductOpaqueId(_catalog.productId)
                _catalog.variantId = decodeProductOpaqueId(_catalog.variantId)
                
                return _catalog
    
            }));

            node.additional = additionals

            return additionals
        }
    }
}
