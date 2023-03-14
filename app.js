Vue.createApp({
    // list of goals
    // input data
    data() {
        let enteredValue = '';
        let goals = [];
        return { enteredValue, goals }
    }
}).mount('#app');