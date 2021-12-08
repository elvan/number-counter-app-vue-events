const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods: {
    add(amount) {
      this.counter += amount;
    },

    subtract(amount) {
      this.counter -= amount;
    },

    setName(event, lastName) {
      const firstName = event.target.value;
      if (firstName) {
        this.name = event.target.value + ' ' + lastName;
      } else {
        this.name = '';
      }
    }
  }
});

app.mount('#events');
