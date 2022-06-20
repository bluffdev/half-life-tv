<script setup lang="ts">
import { IPlayer } from '../interfaces/types';
import { useFetch } from '../utils/useFetch';
import Player from '../components/Player.vue';

const { state } = await useFetch<IPlayer[]>("https://hltv-rest-api.herokuapp.com/players")
</script>

<template>
<div class="players-container">
    <table>
        <tr class="table-header">
            <th class="player-header">Player</th>
            <th class="team-header">Team</th>
            <th class="maps-header">Maps</th>
            <th class="kd-header">KD</th>
            <th class="rating-header">Rating</th>
        </tr>
        <tr v-for="player in state.response" class="player-row">
            <Player :player="player" />
        </tr>
    </table>
</div>
</template>

<style scoped>
table {
    /* border-spacing: 0;
    background-color: #929a9e; */
    min-width: 50em;
}
.table-header {
    border-collapse: collapse;
    border-spacing: 0;
    background-color: #2d3844;
    color: #929a9e;
    text-align: left;
}
.player-row {
    background-color: #2d3844;
    color: #929a9e;
}

.player-header, .team-header {
    text-align: left;
    padding: 0.5em 0.375em;
}

.maps-header, .kd-header, .rating-header {
    text-align: center;
    padding: 0.5em 0.125em;
}
</style>