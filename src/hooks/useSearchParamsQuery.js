import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const useSearchParamsQuery = () => {
  const { filters } = useSelector((state) => state.page);
  const queryParams = {
    page: 1,
    q: filters.selectedNamePainting,
    author: filters.selectedAuthor,
    location: filters.selectedLocation,
    from: filters.minYear,
    before: filters.maxYear,
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const setQueryParams = (name, value) => {
    const currentQuery = {};

    Object.entries(queryParams).forEach(([k, v]) => {
      if (v) {
        if (typeof v === 'object') {
          currentQuery[k] = JSON.stringify(v);
        } else {
          (currentQuery[k] = v);
        }
      }
    });

    if (typeof value === 'object') { (currentQuery[name] = JSON.stringify(value)); } else { (currentQuery[name] = value); }
    if (!value) {
      delete currentQuery[name];
    }

    setSearchParams(currentQuery);
  };

  return { searchParams, setQueryParams };
};

export default useSearchParamsQuery;
