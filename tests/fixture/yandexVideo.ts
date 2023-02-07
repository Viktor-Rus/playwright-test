import { test as base } from '@playwright/test';
import {VideoSearchPage} from '../pages/VideoSearchPage';

type MyFixtures = {
    videoSearchPage: VideoSearchPage;
};

export const test = base.extend<MyFixtures>({
    videoSearchPage: async ({ page }, use) => {
        const videoSearchPage = new VideoSearchPage(page);
        await videoSearchPage.goto();

        await use(videoSearchPage);
    },

});

export { expect } from '@playwright/test';
