
class screenShoots {

    static async takeScreenshot(element,nameSpec, nameScreen) {
        await element.screenshot({ path: `tests/${nameSpec}.spec.ts-snapshots/${nameScreen}-chromium-darwin.png` })
    }
}

export default screenShoots
