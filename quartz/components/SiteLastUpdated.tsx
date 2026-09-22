import type {
  QuartzComponent,
  QuartzComponentConstructor,
} from "@quartz-community/types"

const SiteLastUpdated: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = ({ allFiles, fileData }) => {
    // Display only on the homepage
    if (fileData.slug !== "index") return null

    const dates = allFiles
      .map(
        (file) =>
          file.dates?.modified ??
          file.dates?.published ??
          file.dates?.created,
      )
      .filter(
        (date): date is Date =>
          date instanceof Date && !Number.isNaN(date.getTime()),
      )

    if (dates.length === 0) return null

    const latest = new Date(
      Math.max(...dates.map((date) => date.getTime())),
    )

    const formatted = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Copenhagen",
      timeZoneName: "short",
    }).format(latest)

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
