<script setup lang="ts">
import { IResult } from '../interfaces/types';
import { useFetch } from '../utils/useFetch';
import Result from '../components/Result.vue';


const { state } = await useFetch<IResult[]>('https://hltv-rest-api.herokuapp.com/results')
</script>

<template>
<div v-for="result in state.response" class="results-container">
    <Result :result="result" />
</div>
</template>

<style scoped>
.results-container {
    width: 60%;
}
</style>