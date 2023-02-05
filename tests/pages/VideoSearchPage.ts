import { expect, Locator, Page } from '@playwright/test';

export class VideoSearchPage {
    readonly page: Page;
    readonly getSearchInput: Locator;
    readonly getListSearchItems: Locator;
    readonly getTrailerHover: string;

    constructor(page: Page) {
        this.page = page;
        this.getSearchInput = page.locator('input[name="text"]');
        this.getListSearchItems = page.locator('div[class="serp-list__items"]>div');
        this.getTrailerHover = 'div[class*="thumb-image_hovered"]';
    }

    async goto() {
        await this.page.goto('/video');
    }

    async enterSearchWord(value) {
        await this.getSearchInput.fill(value);
        const responsePromise = this.page.waitForResponse('/video/search?**');
        await this.page.keyboard.press('Enter');
        const response = await responsePromise;
        await expect(response.status()).toEqual(200)
        await this.page.waitForURL(`/video/search?text=${value}`);
    }

    async hooverPosterInResultsSearch(sequenceNumber) {
        await this.getListSearchItems.nth(sequenceNumber).hover()
    }

    async trailerIsVisible(sequenceNumber) {
        return await this.getListSearchItems.nth(sequenceNumber).locator(this.getTrailerHover).isVisible()
    }
}
