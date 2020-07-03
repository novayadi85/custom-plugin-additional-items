import schemas from "./schemas/index.js";
import queries from "./queries/index.js";
import resolvers from "./resolvers/index.js";
import publishProductToCatalog from "./properties/publishProductToCatalog.js";
import preStartup from "./preStartup.js";
import { AdditionlSchema } from "./simpleSchemas.js";
/**
 * @summary Registers the plugin.
 * @param {ReactionAPI} api The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(api) {
  await api.registerPlugin({
    label: "Bundle Product",
    name: "bundle-product",
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