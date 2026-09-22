import {
  loadQuartzConfig,
  loadQuartzLayout,
} from "./quartz/plugins/loader/config-loader"

import { PageTypes } from "./quartz/plugins"
import SiteLastUpdated from "./quartz/components/SiteLastUpdated"

const config = await loadQuartzConfig()
const siteLayout = await loadQuartzLayout()

siteLayout.defaults.beforeBody = [
  ...(siteLayout.defaults.beforeBody ?? []),
  SiteLastUpdated(),
]

// Replace the dispatcher created with the original layout
config.plugins.emitters = config.plugins.emitters.filter(
  (plugin) => plugin.name !== "PageTypeDispatcher",
)

config.plugins.emitters.push(
  PageTypes.PageTypeDispatcher({
    defaults: siteLayout.defaults,
    byPageType: siteLayout.byPageType,
  }),
)

export default config
export const layout = siteLayout
