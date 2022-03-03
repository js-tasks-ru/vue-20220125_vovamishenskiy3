<<<<<<< HEAD
=======
import { createApp } from './vendor/vue.esm-browser.js';
>>>>>>> ff9215587f7ac3ab27f84ab2c15219bd0fa85c53

import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
// From https://jsonplaceholder.typicode.com/comments


const Root = defineComponent({
  name: 'Root',
  data() {
    return {
      search: '',
      emails: [
        'Eliseo@gardner.biz',
        'Jayne_Kuhic@sydney.com',
        'Nikita@garfield.biz',
        'Lew@alysha.tv',
        'Hayden@althea.biz',
        'Presley.Mueller@myrl.com',
        'Dallas@ole.me',
        'Mallory_Kunze@marie.org',
        'Meghan_Littel@rene.us',
        'Carmen_Keeling@caroline.name',
        'Veronica_Goodwin@timmothy.net',
        'Oswald.Vandervort@leanne.org',
        'Kariane@jadyn.tv',
        'Nathan@solon.io',
        'Maynard.Hodkiewicz@roberta.com',
        'Christine@ayana.info',
        'Preston_Hudson@blaise.tv',
        'Vincenza_Klocko@albertha.name',
        'Madelynn.Gorczany@darion.biz',
        'Mariana_Orn@preston.org',
        'Noemie@marques.me',
        'Khalil@emile.co.uk',
        'Sophia@arianna.co.uk',
        'Jeffery@juwan.us',
        'Isaias_Kuhic@jarrett.net',
]
    };
  },

  computed: {
    filteredEmails() {
      if (this.search) {
        return this.emails.filter(item => {
            return item.includes(this.search);
        });
      }
        return this.emails
      
    }
  }


});
const app = createApp(Root);
const vm = app.mount('#app');
window.vm = vm;


createApp({
  data() {
    return {
      emails,
      filter: '',
    };
  },

  computed: {
    markedEmails() {
      return this.emails.map((email) => ({
        email,
        marked: this.filter && email.includes(this.filter),
      }));
    },
  },
}).mount('#app');
