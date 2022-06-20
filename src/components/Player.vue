<script setup lang="ts">
import { IPlayer } from '../interfaces/types'

defineProps<{
    player: IPlayer
}>()
</script>

<template>
<td class="player-cell">{{player.nickname}}</td>
<td class="team-cell">{{player.team}}</td>
<td class="maps-cell">{{player.mapsPlayed}}</td>
<td class="kd-cell">{{player.kd}}</td>
<td class="rating-cell">{{player.rating}}</td>
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

.maps-cell, .kd-cell, .rating-cell {
    text-align: center;
    padding: 0.5em 0;
}
</style>