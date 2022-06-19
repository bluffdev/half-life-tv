<script setup lang="ts">
import { useFetch } from '../utils/useFetch';
import { ITeam } from '../interfaces/types';
import TeamLineup from '../components/TeamLineup.vue';

const { state } = await useFetch<ITeam[]>('https://hltv-rest-api.herokuapp.com/teams')
</script>

<template>
<div class="rankings-container">
    <div v-for="team in state.response">
        <TeamLineup v-if="team.ranking === 1" :team="team" :hidden="false"/>
        <TeamLineup v-else :team="team" :hidden="true" />
    </div>
</div>
</template>

<style scoped>
</style>