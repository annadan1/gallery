const sliceIntoChunks = (arr, size = 12) => {
  let page = 1;
  let chank = [];
  return arr.reduce((res, item, index) => {
    if (index === (arr.length - 1)) {
      res.push({ page, paintings: chank });
    }
    if (chank.length < size) {
      chank.push(item);
    } else {
      res.push({ page, paintings: chank });
      page += 1;
      chank = [];
      chank.push(item);
    }
    return res;
  }, []);
};

const usePaintingsFilter = (paintings, filters) => {
  const paintingsFiltredNamePainting = filters.selectedNamePainting === ''
    ? paintings
    : paintings.filter(
      ({ name }) => name.toLowerCase().includes(filters.selectedNamePainting.toLowerCase()),
    );
  const paintingsFiltredMinYear = filters.minYear === ''
    ? paintingsFiltredNamePainting
    : paintingsFiltredNamePainting.filter(
      ({ created }) => Number(created) >= filters.minYear,
    );
  const paintingsFiltredMaxYear = filters.maxYear === ''
    ? paintingsFiltredMinYear
    : paintingsFiltredMinYear.filter(
      ({ created }) => Number(created) <= filters.maxYear,
    );
  const paintingsFiltredAuthor = filters.selectedAuthor === ''
    ? paintingsFiltredMaxYear
    : paintingsFiltredMaxYear.filter(
      ({ authorId }) => authorId === filters.selectedAuthor.id,
    );
  const paintingsFiltredLocation = filters.selectedLocation === ''
    ? paintingsFiltredAuthor
    : paintingsFiltredAuthor.filter(
      ({ locationId }) => locationId === filters.selectedLocation.id,
    );

  return sliceIntoChunks(paintingsFiltredLocation);
};

export default usePaintingsFilter;
