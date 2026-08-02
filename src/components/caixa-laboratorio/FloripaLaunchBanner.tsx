import { floripaSoftLaunchCopy } from "../../config/floripaSoftLaunch"

export function FloripaLaunchBanner() {
  const { banner } = floripaSoftLaunchCopy

  return (
    <aside className="clx-floripa-banner" aria-label={banner.title}>
      <p className="clx-floripa-banner__title">{banner.title}</p>
      <p className="clx-floripa-banner__lead">{banner.lead}</p>
      <p className="clx-floripa-banner__note">{banner.note}</p>
    </aside>
  )
}
