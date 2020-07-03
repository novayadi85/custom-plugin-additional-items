export default async function publishProductToCatalogX(catalogProduct, { context, product, shop, variants }) {
    catalogProduct.Period = "1 Month";
    const { additional } = product || []
    catalogProduct.additional = additional
    if(typeof additional != "undefined"){
      catalogProduct.productType = 'bundling'
    }
}