'use strict';

/**
 * increase service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::increase.increase');
