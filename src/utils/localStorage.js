const keys = {
  LAST_SEARCHES: 'LAST_SEARCHES'
};

export const setLastSearches = (value) =>
  localStorage.setItem(keys.LAST_SEARCHES, JSON.stringify(value || []));

export const getLastSearches = () => JSON.parse(localStorage.getItem(keys.LAST_SEARCHES));
