const app = Vue.createApp({
  data() {
    return {
      counter: 0
    };
  },

  methods: {
    add(amount) {
      this.counter += amount;
    },
    subtract(amount) {
      this.counter -= amount;
    }
  }
});

app.mount('#events');
