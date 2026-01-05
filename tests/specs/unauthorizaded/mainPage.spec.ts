import { test } from '../../fixtures/fixtures';

test('Проверка доступности эллементов хедера', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности эллементов табов категорий ', async ({ mainPage }) => {
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});
test('Проверка доступности бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
test('Проверка доступности списка добавления контента', async ({ mainPage }) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов попапа уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationPopup();
  await mainPage.NotificationPopupHasCorrectAriaShapshot();
});
test('Проверка доступности элементов модального окна авторизации', async ({ mainPage }) => {
  await mainPage.openAutorizationModal();
  await mainPage.AutorizationModalHasCorrectAriaShapshot();
});
test('Проверка доступности элементов раскрытого меню', async ({ mainPage }) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasCorrectAriaShapshot();
});
test('Переключение темы', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('white2022');
});
