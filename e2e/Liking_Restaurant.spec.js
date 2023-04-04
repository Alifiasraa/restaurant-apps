/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant favorite', '#empty-card');

  I.amOnPage('/');

  I.waitForElement('.card-item__name a', 5);
  I.seeElement('.card-item__name a');

  const firstRestaurant = locate('.card-item__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card-item', 5);
  I.seeElement('.card-item');
  const likedRestaurantTitle = await I.grabTextFrom('.card-item__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant favorite', '#empty-card');

  I.amOnPage('/');

  I.waitForElement('.card-item__name a', 5);
  I.seeElement('.card-item__name a');

  const firstRestaurant = locate('.card-item__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card-item', 5);
  I.seeElement('.card-item');
  const likedRestaurantTitle = await I.grabTextFrom('.card-item__name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#empty-card');

  const empty = await I.grabTextFrom('#empty-card');

  assert.strictEqual(empty, 'Belum ada restaurant favorite');
});
