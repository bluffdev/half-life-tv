<script setup lang="ts">
import { useFetch } from '../utils/useFetch';
import TeamLineup from '../components/TeamLineup.vue';
import { IState, ITeam } from '../interfaces/types';
import { testState } from '../utils/testState';

const { state } = await useFetch('https://hltv-rest-api.herokuapp.com/teams')
// const state = testState()
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