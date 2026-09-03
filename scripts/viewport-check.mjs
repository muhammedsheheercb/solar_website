import { chromium } from "playwright";

const widths = [320, 375, 390, 430, 768, 1024, 1440];
const browser = await chromium.launch({ headless: true });

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  const ctaVisible = await page.getByText("Calculate Your Savings").first().isVisible();
  const logoVisible = await page.getByText("HELIOWORKS").first().isVisible();

  if (width < 1024) {
    await page.getByLabel("Open menu").click();
    await page.getByRole("dialog", { name: "Main navigation" }).waitFor({ state: "visible" });
    const quoteVisible = await page.getByRole("dialog").getByText("Get a Quote").isVisible();
    await page.keyboard.press("Escape");
    await page.getByRole("dialog", { name: "Main navigation" }).waitFor({ state: "hidden" });
    console.log(`${width}px overflow=${overflow} logo=${logoVisible} savingsCta=${ctaVisible} drawerQuote=${quoteVisible}`);
  } else {
    console.log(`${width}px overflow=${overflow} logo=${logoVisible} savingsCta=${ctaVisible}`);
  }

  await page.screenshot({ path: `/tmp/solar-home-${width}.png`, fullPage: true });
  await page.close();
}

await browser.close();
