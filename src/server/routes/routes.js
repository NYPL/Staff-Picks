import express from 'express';

import monthData from './monthData.js';
import annualData from './annualData.js';
import appConfig from '../../../appConfig.js';

const router = express.Router();

router
  .route(appConfig.baseMonthUrl)
  .get(monthData.currentMonthData);

router
  .route(`${appConfig.baseMonthUrl}:month/:id?`)
  .get(monthData.selectMonthData);

router
  .route(`${appConfig.baseAnnualUrl}:type/:year?/:id?`)
  .get(annualData.selectAnnualData);

router
  .route(`${appConfig.baseApiUrl}ajax/picks/:month`)
  .get(monthData.ajaxMonthData);

export default router;