import appConfig from '../../../appConfig';
import utils from '../../app/utils/utils';

import nyplApiClient from '../helper/nyplApiClient';

const { baseUrl } = appConfig;

const nyplApiClientGet = endpoint =>
  nyplApiClient().then(client => client.get(endpoint, { cache: false }));

/* annualCurrentData
 * Get the latest annual staff pick list for either childrens or ya.
 */
function annualCurrentData(type, req, res, next) {
  const pageTitle = appConfig.pageTitle[type];
  const metaTags = appConfig.metaTags[type];
  let dataType = '';

  if (type === 'childrens') {
    dataType = 'kids';
  } else if (type === 'ya') {
    dataType = 'teens';
  }

  nyplApiClientGet(`/book-lists/${dataType}/2017`)
    .then((data) => {
      const filters = utils.getAllTags(data.picks);
      // Get the subset of tags that the picks can be filtered by.
      const selectableFilters = utils.getSelectableTags(data.picks);

      res.locals.data = {
        BookStore: {
          filters,
          currentPicks: data,
          selectableFilters,
          isJsEnabled: false,
        },
        pageTitle,
        metaTags,
      };

      next();
    })
    .catch((error) => {
      console.log(`Error fetching endpoint: ${error}`);

      res.locals.data = {
        BookStore: {
          filters: [],
          currentPicks: {},
          selectableFilters: [],
          isJsEnabled: false,
        },
        pageTitle: '',
        metaTags: [],
      };

      next();
    });
}

/* selectAnnualData
 * Map the url param to specific endpoint requests. Redirect otherwise to the homepage.
 */
function selectAnnualData(req, res, next) {
  // NOTE: req.params also contains `year` and `id` as attributes.
  const type = req.params.type;

  if (type === 'childrens' || type === 'ya' || type === 'staff-picks') {
    return annualCurrentData(type, req, res, next);
  }
  return res.redirect(baseUrl);
}

export default {
  selectAnnualData,
};
