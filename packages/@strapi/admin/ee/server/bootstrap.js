'use strict';

// eslint-disable-next-line node/no-extraneous-require
const { features } = require('@strapi/strapi/lib/utils/ee');
const executeCEBootstrap = require('../../server/bootstrap');
const { getService } = require('../../server/utils');
const actions = require('./config/admin-actions');
const { persistTablesWithPrefix } = require('./utils/persisted-tables');

module.exports = async () => {
  const { actionProvider } = getService('permission');

  if (features.isEnabled('sso')) {
    await actionProvider.registerMany(actions.sso);
  }

  if (features.isEnabled('audit-logs')) {
    await persistTablesWithPrefix('strapi_audit_logs');

    await actionProvider.registerMany(actions.auditLogs);
  }

  await getService('seat-enforcement').seatEnforcementWorkflow();

  await executeCEBootstrap();
};
