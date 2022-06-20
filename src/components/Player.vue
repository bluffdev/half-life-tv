<script setup lang="ts">
import { IPlayer } from '../interfaces/types'

defineProps<{
    player: IPlayer
}>()
</script>

<template>
<td class="player-cell">
    <div class="container">
        <img :src="player.playerFlag" class="player-flag">
        <h5 class="player-nickname">{{player.nickname}}</h5>
    </div>
</td>
<td class="team-cell">
    <router-link :to="`/team/${player.team.id}`" class="link">
        <div class="container">
            <img :src="player.team.logo" class="team-logo" />
            <h5 class="player-team">{{player.team.name}}</h5>
        </div>
    </router-link>
</td>
<td class="maps-cell">
    <h5>{{player.mapsPlayed}}</h5>
</td>
<td class="kd-cell">
    <h5>{{player.kd}}</h5>
</td>
<td class="rating-cell">
    <h5>{{player.rating}}</h5>
</td>
</template>

<style scoped>
.player-container {
    width: 50%;
    background-color: #2d3844;
    color: #929a9e;
}

.player-cell, .team-cell {
    text-align: left;
    padding: 0.5em 0.125em;
}

.link {
    text-decoration: none;
    color: inherit;
}

.container {
    display: flex;
    justify-content: start;
    align-items: center;
}

.player-flag, .team-logo {
    width: 1.25em;
    height: auto;
    margin: 0 0.25em;
}

.player-nickname, .player-team {
    margin: 0 0.25em;
}
.maps-cell, .kd-cell, .rating-cell {
    text-align: center;
    padding: 0.5em 0;
}
</style>