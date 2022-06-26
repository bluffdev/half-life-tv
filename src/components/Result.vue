<script setup lang="ts">
import { IResult } from '../interfaces/types';

const props = defineProps<{
    result: IResult
}>()

const teamOneScore = props.result.teams[0].score > props.result.teams[1].score ? 'winning-score' : 'losing-score'
const teamTwoScore = props.result.teams[1].score > props.result.teams[0].score ? 'winning-score' : 'losing-score'

</script>

<template>
<div class="result-container">
    <!-- <router-link :to="`/match/${match.id}`" class="link"> -->
        <div v-if="result.date.length < 20" class="date-container">
            <h4 class="date">{{result.date}}</h4>
        </div>
        <div v-else class="date-container">
            <h4 class="date">Live Event</h4>
        </div>
        <div class="result">
            <div class="result-teams">
                <div class="team-one-info">
                    <h5 class="team-name">{{result.teams[0].name}}</h5>
                    <img :src="result.teams[0].logo" class="team-logo" />
                </div>
                <div class="team-scores">
                    <h5 :class="teamOneScore" class="team-one-score">{{result.teams[0].score}}</h5>
                    <h5 class="score-divider">-</h5>
                    <h5 :class="teamTwoScore" class="team-two-score">{{result.teams[1].score}}</h5>
                </div>
                <div class="team-two-info">
                    <img :src="result.teams[1].logo" class="team-logo" /> 
                    <h5 class="team-name">{{result.teams[1].name}}</h5>
                </div>
            </div>
            <div class="event-info">
                <img :src="result.event.logo" class="event-logo" />
                <h5 class="event-name">{{result.event.name}}</h5>
            </div>
            <div class="result-info">
                <h5>{{result.maps}}</h5>
            </div>
        </div>
    <!-- </router-link> -->
</div>
</template>

<style scoped>
.result-container {
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
    margin: 0.5em 0 0.5em 2.5em;
}

.result {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0.75em 0;
}

.result-info {
    min-width: 50px;
    margin: 0 0.75em;
}

.result-teams {
    display: flex;
    align-items: center;
    min-width: 300px;
    margin: 0 0 0 2em;
}

.team-one-info {
    display: flex;
    align-items: center;
    justify-content: end;
    min-width: 150px;
}

.team-two-info {
    display: flex;
    align-items: center;
    justify-content: start;
    min-width: 150px;
}

.team-logo {
    width: 1.25em;
    height: auto;
    margin: 0;
}

.team-scores {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 1.5em;
}

.winning-score {
    color: green;
}

.losing-score {
    color: red;
}

.score-divider {
    margin: 0 0.25em;
}

.team-name {
    margin: 0 0.375em;
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