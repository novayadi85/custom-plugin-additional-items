import pkg from "../package.json";
import schemas from "./schemas/index.js";
import queries from "./queries/index.js";
import resolvers from "./resolvers/index.js";
import publishProductToCatalog from "./properties/publishProductToCatalog.js";
import preStartup from "./preStartup.js";
import { AdditionlSchema } from "./simpleSchemas.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(api) {
  await api.registerPlugin({
    label: "Additonal Items Product",
    name: "additonal-items-product",
    version: pkg.version,
    catalog: {
      customPublishedProductFields: ["Additional"],
      customPublishedProductVariantFields: ["Additional"]
    },
    functionsByType: {
      preStartup: [preStartup],
      publishProductToCatalog: [publishProductToCatalog]
    },
    graphQL: {
      schemas,
      resolvers
    },
    queries,
    simpleSchemas: {
      AdditionlSchema
    }
  });
}
