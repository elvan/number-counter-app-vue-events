const app = Vue.createApp({
  data() {
    return {
      counter: 100,
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
    },

    confirmInput() {
      this.confirmedName = this.name;
      console.log(this.confirmedName);
    },

    submitForm() {
      console.log('Submitted!');
    }
  }
});

app.mount('#events');
