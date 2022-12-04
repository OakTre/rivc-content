'use strict';

/**
 *  increase controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::increase.increase');
