// ACTIONS
import alt from '../alt';

class Actions {
  updatePicks(picks) {
    return picks;
  }

  updateFilters(filters) {
    return filters;
  }

  setIsJsEnabled(bool) {
    return bool;
  }

  setSelectableFilters(filters) {
    return filters;
  }
}

export default alt.createActions(Actions);
