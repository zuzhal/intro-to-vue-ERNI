<template>
    <div>       
        <button v-on:click="add()">Add {{ addNum }}</button>
        <button v-on:click="reduce()">Subtract {{ addNum }}</button>
        
        <p>Result: {{ counter }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';

export interface Props {
  addNum: number
}

const props = withDefaults(defineProps<Props>(), {
  addNum: 1,
})

const emit = defineEmits<{
  (e: 'newCounter', value: number): number
}>()

let counter: Ref<number> = ref(0);

function add() {
    counter.value = counter.value + props.addNum;
    emit('newCounter', counter.value);
}

function reduce() {
    counter.value = counter.value - props.addNum;
    emit('newCounter', counter.value);
}

watch(counter, (value: number) => {
    if (value > 50) {
        setTimeout(function () {
        counter.value = 0;
        }, 2000);
    }
});
</script>

<style scoped>
div {
    margin-bottom: 10px;
};
</style>