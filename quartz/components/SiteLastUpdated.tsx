import type {
  QuartzComponent,
  QuartzComponentConstructor,
} from "@quartz-community/types"

const SiteLastUpdated: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = ({ fileData }) => {
    if (fileData.slug !== "index") return null

    const formatted = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Copenhagen",
      timeZoneName: "short",
    }).format(new Date())

    return (
      <p class="site-last-updated">
        <strong>Project status:</strong> Active development
        {" · "}
        <strong>Last updated:</strong> {formatted}
      </p>
    )
  }

  Component.css = `
    .site-last-updated {
      margin: 0.25rem 0 1rem;
      font-size: 0.9rem;
      opacity: 0.75;
    }
  `

  return Component
}

export default SiteLastUpdated
