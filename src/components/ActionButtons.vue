<template>
    <div>       
        <button v-on:click="add()">Add {{ addNum }}</button>
        <button v-on:click="reduce(5)">Subtract 5</button>
        
        <p>Result: {{ counter }}</p>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        addNum: {
            type: Number,
            default: 1
        } 
    },
    emits: ['newCounter'],
    data() {
        return { counter: 0 }
    },
    methods: {
        add() {
            this.counter = this.counter + this.addNum;
            this.$emit('newCounter', this.counter);
        },
        reduce(num: number) {
            this.counter = this.counter - num;
            this.$emit('newCounter', this.counter);
        },
    },
    watch: {
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function () {
                that.counter = 0;
                }, 2000);
            }
        }
    }
}
</script>

<style scoped>
div {
    margin-bottom: 10px;
};
</style>