<script setup lang="ts">
import { ref } from 'vue';
import { ITeam } from '../interfaces/types';
import Player from './TeamPlayer.vue';

const props = defineProps<{ 
    team: ITeam
    hidden: boolean
}>()

const hidden = ref(props.hidden)
</script>

<template>
<div class="team-container">
    <div @click.prevent="hidden =! hidden" class="team-info">
        <div class="team-ranking">{{`#${team.ranking}`}}</div>
        <!-- <img src="../assets/faze.svg" class="team-logo"/> -->
        <img :src="team.logo" class="team-logo" />
        <div class="team-name">{{team.name}}</div>
    </div>
    <div v-if="hidden === false" class="team-body">
        <div class="lineup-container">
            <div v-for="player in team.players" class="player-container">
                <Player :player="player"/>
            </div>
        </div>
        <div class="more-info">
            <a :href="`http://localhost:3000/team/${team.id}`" class="team-profile-link">Team Profile</a>
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

.team-name, .team-ranking, .team-logo {
    display: flex;
    align-items: center;
    margin: 0px;
    margin-left: 10px;
}

.lineup-container {
    display: flex;
    align-content: center;
    border-top: 1px solid;
    border-bottom: 1px solid;
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

.team-profile-link {
    color: inherit;
    text-decoration: none;
}
</style>