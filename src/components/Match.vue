<script setup lang="ts">
import { IMatch } from '../interfaces/types';

defineProps<{
    match: IMatch
}>()

</script>

<template>
<div class="match-container">
    <div class="match-info">
        {{match.time}}
    </div>
    <div v-if="match.teams !== null" class="teams-container">
        <div v-if="match.teams[0] !== undefined" class="team-info">
            <img :src="match.teams[0].logo" class="team-logo" /> 
            <h6>{{match.teams[0].name}}</h6>
        </div>
        <div v-else class="team-info">
            <h6>Undecided</h6>
        </div>
        <div v-if="match.teams[1] !== undefined" class="team-info">
            <img :src="match.teams[1].logo" class="team-logo" /> 
            <h6>{{match.teams[1].name}}</h6>
        </div>
        <div v-else class="team-info">
            <h6>Undecided</h6>
        </div>
    </div>
    <div v-else class="teams-info">
        <h6>Teams are Undecided</h6>
    </div>
    <div class="event-info">
        <img :src="match.event.logo" class="event-logo" />
        <h6>{{match.event.name}}</h6>
    </div>
</div>
</template>

<style scoped>
.match-container {
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #2d3844;
    color: #929a9e;
    margin-bottom: 15px;
}

.team-info {
    display: flex;
    align-items: center;
}

.event-info {
    display: flex;
    align-items: center;
}

.event-logo {
    width: 1.5em;
    height: auto;
}
.team-logo {
    width: 1.25em;
    height: auto;
}
</style>