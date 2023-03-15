<template>
    <div>
        <input type="text" v-model="name">
        <input type="text" v-model="lastName">
        <button v-on:click="resetInput">Reset Input</button>
        
        <p>Your Name: {{ fullName }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

let name: Ref<string> = ref('');
let lastName: Ref<string> = ref('');

function resetInput() {
    name.value = '';
    lastName.value = '';
}

const fullName = computed(() => {
    return name.value + ' ' + lastName.value;
});

</script>

<style scoped>
div {
    margin-top: 10px;
};
</style>