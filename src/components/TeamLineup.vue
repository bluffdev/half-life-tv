<script setup lang="ts">
import { ITeam } from '../interfaces/types';
import Player from './Player.vue';

defineProps<{ team: ITeam }>()
</script>

<template>
<div class="team-container">
    <div class="team-info">
        {{`#${team.ranking}`}}
        {{team.name}}
    </div>
    <div class="lineup-container">
        <div v-for="player in team.players" class="player-container">
            <Player :player="player"/>
        </div>
    </div>
</div>
</template>

<style scoped>
.team-container {
    width: 50%
}

.team-info {
    text-align: left;
}

.lineup-container {
    display: flex;
    align-content: center;
    background-color: gray;
}

.player-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    margin: 0 auto;
}
</style>