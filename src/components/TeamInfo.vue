<script setup lang="ts">
import { ref } from 'vue';
import { ITeam } from '../interfaces/types';
import Player from './Player.vue';

defineProps<{ 
    team: ITeam
}>()

</script>

<template>
<div class="team-container">
    <div class="team-body">
        <div class="lineup-container">
            <div v-for="player in team.players" class="player-container">
                <Player :player="player"/>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.team-container {
    width: 700px;
    overflow: hidden;
    margin-top: 15px;
    background-color: #2d3844;
    color: #929a9e;
    user-select: none;
}

.team-info {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0px;
    height: 2.5em;
    cursor: pointer;
}

.team-logo {
    width: 28px;
    height: 28px;
}

.lineup-container {
    display: flex;
    align-content: center;
    border-top: 1px solid;
    border-bottom: 1px solid;
    background-color: black;
}

.player-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    margin: 0 auto;
}

.more-info {
    display: flex;
    align-items: center;
    height: 2em;
}
</style>