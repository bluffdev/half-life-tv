<script setup lang="ts">
import { useFetch } from '../utils/useFetch';
import { IMatch } from '../interfaces/types';
import Match from '../components/Match.vue';

const { state } = await useFetch<IMatch[]>('https://hltv-rest-api.herokuapp.com/matches')
</script>

<template>
<div class="matches-container">
    <div v-for="match in state.response">
        <Match :match="match" />
    </div>
</div>
</template>

<style scoped>
.matches-container {
    width: 70%;
}
</style>