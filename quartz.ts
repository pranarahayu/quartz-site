import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import SiteLastUpdated from "./quartz/components/SiteLastUpdated"

const config = await loadQuartzConfig()
export default config
const siteLayout = await loadQuartzLayout()

siteLayout.defaults.beforeBody = [
  ...(siteLayout.defaults.beforeBody ?? []),
  SiteLastUpdated(),
]

export const layout = siteLayout
