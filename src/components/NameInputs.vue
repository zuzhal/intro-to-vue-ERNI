<template>
    
    <input type="text" v-model="name">
    <input type="text" v-model="lastName">
    <button v-on:click="resetInput">Reset Input</button>
      
    <p>Your Name: {{ fullName }}</p>
    
    <!-- UNCOMMENT FOR COMPUTED DEMO -->
    <!--  <button v-on:click="counter++">Add 1</button>
    <p>Demo Counter: {{ counter }}</p> -->

</template>

<script lang="ts">
    export default {
        data() {
            return {
                name: '',
                lastName: '',
                counter: 0
            }
        },
        methods: {
            resetInput() {
                this.name = '';
                this.lastName = '';
            },
            /* fullName() {
                console.log('fullname called');
                return this.name + ' ' + this.lastName;
            }, */
        },
        computed: {
            fullName() {
                console.log('fullname called');
                return this.name + ' ' + this.lastName;
            },
        },
    }
</script>

<style scoped>
div {
    margin-top: 10px;
};

</style>