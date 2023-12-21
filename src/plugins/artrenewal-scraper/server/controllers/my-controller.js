'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('artrenewal-scraper')
      .service('myService')
      .getWelcomeMessage();
  },
});
