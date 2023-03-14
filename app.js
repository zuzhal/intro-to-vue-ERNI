Vue.createApp({
    // list of goals
    // input data
    data() {
        enteredValue = '';
        goals = [];
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#app');