import toaster from 'toasted-notes';
import debounce from 'lodash/debounce';

export default {
  apiMaxedOut: debounce(() => {
    toaster.notify('API Maxed Out', {
      position: 'bottom',
      duration: 2000
    });
  }, 500, {
    leading: false,
    transform: true
  }),
  cantFindCity: () => {
    toaster.notify('We can\'t find this city', {
      duration: 2000
    });
  }
};
