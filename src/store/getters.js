 /* eslint-disable */

export function getListServiceHomePage(state) {
  console.warn(state);
  console.log('b');
  // Return a list of service
  Vue.http.get('https://demo6600464.mockable.io/services.json')
    .then((value) => {
      console.warn('loaded data');
      console.warn(value);
    });
};
