<script setup lang="ts">
import { useFetch } from '../utils/useFetch';
import TeamInfo from '../components/TeamInfo.vue';
import { ITeam } from '../interfaces/types';
import { useRoute } from 'vue-router';

const route = useRoute()
const { state } = await useFetch<ITeam>(`https://hltv-rest-api.herokuapp.com/teams/${route.params.id}`)
</script>

<template>
<div v-if="state.response.players !== null" class="rankings-container">
    <TeamInfo :team ="state.response" />
</div>
<div v-else>
    404 Page Does Not Exist
</div>
</template>

<style scoped>
</style>