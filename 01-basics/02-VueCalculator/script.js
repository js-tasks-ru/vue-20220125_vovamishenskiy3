import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  name: 'Root',
  data() {
    return {
      result: 0,
      first_number: 0,
      seconde_number: 0,
      action: 'sum',
    };
  },

  computed: {
    math_result() {
      if (this.action == 'sum') {
        return this.first_number + this.seconde_number;
      } else if (this.action == 'subtract') {
        return this.first_number - this.seconde_number;
      } else if (this.action == 'multiply') {
        return this.first_number * this.seconde_number;
      } else if (this.action == 'divide') {
        return this.first_number / this.seconde_number;
      }
    },
  },
});
const app = createApp(Root);
const vm = app.mount('#app');
window.vm = vm;
