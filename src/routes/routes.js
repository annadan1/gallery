const baseURl = 'https://test-front.framework.team';

export default {
  paintingsPath: () => [baseURl, 'paintings'].join('/'),
  authorsPath: () => [baseURl, 'authors'].join('/'),
  locationsPath: () => [baseURl, 'locations'].join('/'),
  imagePath: (url) => [baseURl, url].join('/'),
};
