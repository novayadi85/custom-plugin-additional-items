import SimpleSchema from "simpl-schema";

/**
 * The Invoices Schema validates using multiple schemas.
 * Be sure to use `{ selector: { discountMethod: "code" } }` to indicate which schema to apply in all updates
 * @name Transactions
 * @memberof Schemas
 * @type {SimpleSchema}
 * @summary Invoices Transaction History Schema
 */

/**
 * @memberof Schemas
 * @type {SimpleSchema}
 * @summary Invoices schema
 */
/*
export const Invoices = new SimpleSchema({
  "_id": {
    type: String,
    optional: true
  },
  "shopId": {
    type: String,
    label: "Invoices shopId"
  },
  "orderId": {
    type: String,
    optional: false
  },
  "label": {
    type: String,
    optional: true
  },
  "description": {
    type: String,
    optional: true
  },
});



/**
 * @summary Extend SimpleSchemas with inventory fields
 * @param {Object} schemas Simple schemas
 * @returns {undefined}
 */
const Metafield = new SimpleSchema({
  key: {
    type: String,
    max: 30,
    optional: true
  },
  namespace: {
    type: String,
    max: 20,
    optional: true
  },
  scope: {
    type: String,
    optional: true
  },
  value: {
    type: String,
    optional: true
  },
  valueType: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  }
});

const ImageSizes = new SimpleSchema({
  large: {
    type: String,
    label: "Large",
    optional: true
  },
  medium: {
    type: String,
    label: "Medium",
    optional: true
  },
  original: {
    type: String,
    label: "Original",
    optional: true
  },
  small: {
    type: String,
    label: "Small",
    optional: true
  },
  thumbnail: {
    type: String,
    label: "Thumbnail",
    optional: true
  }
});

const ImageInfo = new SimpleSchema({
  priority: {
    type: Number,
    defaultValue: 0
  },
  productId: {
    type: String,
    label: "Product Id"
  },
  variantId: {
    type: String,
    label: "Variant Id",
    optional: true
  },
  URLs: {
    type: ImageSizes
  }
});

const CatalogProductOption = new SimpleSchema({
  "_id": {
    type: String,
    label: "Catalog product variant Id"
  },
  "attributeLabel": String,
  "barcode": {
    type: String,
    label: "Barcode",
    optional: true
  },
  "createdAt": {
    type: Date,
    label: "Date/time this variant was created at"
  },
  "height": {
    type: Number,
    label: "Height",
    min: 0,
    optional: true,
    defaultValue: 0
  },
  "index": {
    type: SimpleSchema.Integer,
    label: "The position of this variant among other variants at the same level of the product-variant-option hierarchy"
  },
  "length": {
    type: Number,
    label: "Length",
    min: 0,
    optional: true,
    defaultValue: 0
  },
  "media": {
    type: Array,
    label: "Media",
    optional: true
  },
  "media.$": {
    type: ImageInfo
  },
  "metafields": {
    type: Array,
    label: "Metafields",
    optional: true
  },
  "metafields.$": {
    type: Metafield
  },
  "minOrderQuantity": {
    type: SimpleSchema.Integer,
    label: "Minimum quantity per item in an order",
    defaultValue: 1,
    optional: true
  },
  "optionTitle": {
    type: String,
    label: "Option title",
    optional: true
  },
  "originCountry": {
    type: String,
    label: "Origin country",
    optional: true
  },
  "primaryImage": {
    type: ImageInfo,
    label: "Primary Image",
    optional: true
  },
  "shopId": {
    type: String,
    label: "Product ShopId"
  },
  "sku": {
    type: String,
    label: "SKU",
    optional: true
  },
  "title": {
    type: String,
    label: "Product Title",
    defaultValue: "",
    optional: true
  },
  "updatedAt": {
    type: Date,
    label: "Updated at"
  },
  "variantId": {
    type: String,
    label: "Variant ID"
  },
  "weight": {
    type: Number,
    label: "Weight",
    min: 0,
    optional: true,
    defaultValue: 0
  },
  "width": {
    type: Number,
    label: "Width",
    min: 0,
    optional: true,
    defaultValue: 0
  }
});

const CatalogProductVariant = CatalogProductOption.clone().extend({
  "options": {
    type: Array,
    label: "Variant Options",
    optional: true
  },
  "options.$": {
    type: CatalogProductOption
  },
  pricing: {
    type: Object,
    blackbox: true
  },
  isSoldOut: Boolean,
  isTaxable: Boolean,
  taxCode: {
    type: String,
    optional: true
  },
  taxDescription: {
    type: String,
    optional: true
  },
  productId: {
    type: String,
    optional: true
  }
});

export const AdditionalOptionSchema = new SimpleSchema({
  variant: {
    label: "Additional Variant",
    optional: true,
    type: CatalogProductVariant
  },
  productId: {
    type: String,
    label: "Product Id"
  },
  variantId: {
    type: String,
    label: "Variant Id"
  },
});


export const AdditionlSchema = new SimpleSchema({
  "additional": {
    type: Array,
    label: "Additional",
    optional: true
  },
  "additional.$": {
    type: AdditionalOptionSchema
  },
  
});

export const BundleSchema = new SimpleSchema({
  "additional": {
    type: Array,
    label: "Additionals",
    optional: true
  },
  "additional.$": {
    type: AdditionalOptionSchema
  },
  productType:  {
    type: String,
    optional: true
  },

});



export function extendProductSchemas(schemas) {
  /**
   * @property {Boolean} Period optional, 
   * 
   * 
   */
  
  const {
    CatalogProduct,
    CatalogProductOption,
    CatalogProductVariant,
    Product,
    ProductVariant,
    //ProductVariantInputSchema
  } = schemas;
  
  // Extend the Product database schema, if your custom property will be on products
  /*
  schemas.Product.extend({
    additional: {
      type: Object,
      blackbox: true
    },
    
  });
  */

  CatalogProduct.extend({
    "additional": {
      type: Array,
      label: "Additional",
      optional: true
    },
    "additional.$": {
      type: new SimpleSchema({
        variant: {
          label: "Additional Variant",
          optional: true,
          type: CatalogProductVariant
        },
        productId: {
          type: String,
          label: "Product Id",
          optional: true
        },
        variantId: {
          type: String,
          label: "Variant Id",
          optional: true
        },
      })
    },
    
  });

  Product.extend({
    "additional": {
      type: Array,
      label: "Additionals",
      optional: true
    },
    "additional.$": {
      type: new SimpleSchema({
        variant: {
          label: "Additional Variant",
          optional: true,
          type: CatalogProductVariant
        },
        productId: {
          type: String,
          label: "Product Id",
          optional: true
        },
        variantId: {
          type: String,
          label: "Variant Id",
          optional: true
        },
      })
    },
    productType:  {
      type: String,
      optional: true
    },
    
  
  })
}
