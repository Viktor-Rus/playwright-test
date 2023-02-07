import {expect, test} from './fixture/yandexVideo';



test('found video has trailer', async ({ videoSearchPage}) => {
  const searchWord = "ураган"

  await videoSearchPage.searchVideo(searchWord)
  await videoSearchPage.takeScreenshotVideo(0, "yandex", "firstVideo")
  await videoSearchPage.hoverPosterInResultsSearch(0);

  await expect(videoSearchPage.getListSearchItems.nth(0)).not.toHaveScreenshot(`firstVideo.png`);
  expect(await videoSearchPage.trailerIsVisible(0)).toBeTruthy();
});

