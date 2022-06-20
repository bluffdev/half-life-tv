<script setup lang="ts">
import { IMatch } from '../interfaces/types';

defineProps<{
    match: IMatch
}>()

</script>

<template>
<div class="match-container">
    <div class="date-container">
        <h3 class="date">{{match.date}}</h3>
    </div>
    <div class="match">
        <div class="match-info">
            <h5>{{match.time}}</h5>
            <h5>{{match.maps}}</h5>
        </div>
        <div v-if="match.teams !== null" class="teams-container">
            <div v-if="match.teams[0] !== undefined" class="team-info">
                <img :src="match.teams[0].logo" class="team-logo" /> 
                <h6 class="team-name">{{match.teams[0].name}}</h6>
            </div>
            <div v-else class="team-info">
                <h6>Undecided</h6>
            </div>
            <div v-if="match.teams[1] !== undefined" class="team-info">
                <img :src="match.teams[1].logo" class="team-logo" /> 
                <h6 class="team-name">{{match.teams[1].name}}</h6>
            </div>
            <div v-else class="team-info">
                <h6 class="team-name">Undecided</h6>
            </div>
        </div>
        <div v-else class="teams-info">
            <h6>Teams are Undecided</h6>
        </div>
        <div class="event-info">
            <img :src="match.event.logo" class="event-logo" />
            <h6 class="event-name">{{match.event.name}}</h6>
        </div>
    </div>
</div>
</template>

<style scoped>
.match-container {
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: start; */
    /* align-items: center; */
    background-color: #2d3844;
    color: #929a9e;
    margin-bottom: 15px;
}

.date-container {
    display: flex;
    justify-content: start;
    border-bottom: white 1px solid;
}

.date {
    margin: 0.5em 0 0.5em 1.25em;
}

.match {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;
}

.match-info {
    min-width: 60px;
    margin: 0 0.75em;
}

.teams-container {
    min-width: 140px;
    margin: 0 0 0 2em;
}

.team-info {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0.25em 0;
}
.team-logo {
    width: 1.25em;
    height: auto;
    margin: 0;
}

.team-name {
    margin: 0 0 0 0.75em; 
}

.event-info {
    display: flex;
    align-items: center;
    margin: 0 1em 0 1em;
}

.event-logo {
    width: 1.75em;
    height: auto;
}

.event-name {
    margin: 0 0.375em 0 0.375em;
}
</style>