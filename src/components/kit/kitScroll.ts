export function scrollToKitPricing() {
  document.getElementById("kit-pricing")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}
