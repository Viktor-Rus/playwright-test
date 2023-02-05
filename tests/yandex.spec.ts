import {expect, test} from '@playwright/test';
import {VideoSearchPage} from "./pages/VideoSearchPage";

test('found video has trailer ', async ({ page }) => {
  const searchWord = "ураган"
  const videoSearchPage = new VideoSearchPage(page);

  await videoSearchPage.goto()
  await videoSearchPage.enterSearchWord(searchWord)
  await videoSearchPage.hooverPosterInResultsSearch(0)

  expect(await videoSearchPage.trailerIsVisible(0)).toBeTruthy();
});

