const sliceIntoChunks = (arr, size = 12) => {
  let page = 1;
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chank = arr.slice(i, i + size);
    result.push({ page, paintings: chank });
    page += 1;
  }
  return result;
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
