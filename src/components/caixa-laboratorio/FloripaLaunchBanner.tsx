import { floripaSoftLaunchCopy } from "../../config/floripaSoftLaunch"
import { BalancedLines } from "./BalancedLines"

export function FloripaLaunchBanner() {
  const { banner } = floripaSoftLaunchCopy

  return (
    <aside className="clx-floripa-banner" aria-label={banner.title}>
      <p className="clx-floripa-banner__title">{banner.title}</p>
      <p className="clx-floripa-banner__lead">{banner.lead}</p>
      <BalancedLines
        as="p"
        className="clx-floripa-banner__note"
        lines={banner.noteLines}
      />
    </aside>
  )
}
