import _ from 'lodash';

const getParams = (search) => {
  const defaultParams = { _page: 1, _limit: 12 };

  if (search) {
    const currentParams = search
      .slice(1)
      .split('&')
      .map((p) => p.split('='))
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    return { ...defaultParams, ...currentParams };
  }
  return defaultParams;
};

const updateParams = (currentParams, setSearchParams, params) => {
  let newParams = params;
  Object.entries(currentParams).forEach(([key, value]) => {
    if (!value) {
      newParams = _.omit(newParams, key);
    } else {
      newParams = { ...newParams, [key]: value };
    }
  });
  setSearchParams(newParams);
  return newParams;
};

export { getParams, updateParams };
