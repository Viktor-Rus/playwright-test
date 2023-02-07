import { Locator, Page } from '@playwright/test';
import screenShoots from "../util/screenshoots";

export class VideoSearchPage {
    readonly page: Page;
    readonly getSearchInput: Locator;
    readonly getListSearchItems: Locator;
    // readonly getListSearchImage: Locator;
    readonly getTrailerHover: string;


    constructor(page: Page) {
        this.page = page;
        this.getSearchInput = page.locator('input[name="text"]');
        // this.getListSearchItems = page.locator('(//div[@class="serp-list__items"]/div)');
        this.getListSearchItems = page.locator('div[class="serp-list__items"]>div');
        // this.getListSearchImage= page.locator('div[class="serp-list__items"]>div');
        this.getTrailerHover = 'div[class*="thumb-image_hovered"]';
    }

    async goto() {
        await this.page.goto('/video');
    }

    async enterSearchWord(value) {
        await this.getSearchInput.fill(value);
    }

    async searchVideo(value){
        await this.enterSearchWord(value)
        await this.page.keyboard.press('Enter');
        await this.waitSearchResults(value)
    }

    async waitSearchResults(searchWord){
        await this.page.waitForURL(`/video/search?text=${searchWord}`);
    }

    async hoverPosterInResultsSearch(sequenceNumber) {
        this.getListSearchItems.nth(sequenceNumber).hover()
    }

    async trailerIsVisible(sequenceNumber) {
        return await this.getListSearchItems.nth(sequenceNumber).locator(this.getTrailerHover).isVisible()
    }

    async takeScreenshotVideo(sequenceNumber, nameSpec, nameScreen){
        await screenShoots.takeScreenshot( this.getListSearchItems.nth(sequenceNumber), nameSpec, nameScreen)

    }
}
