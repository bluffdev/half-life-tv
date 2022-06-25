<script setup lang="ts">
import { IResult } from '../interfaces/types';

defineProps<{
    result: IResult
}>()

</script>

<template>
<div class="result-container">
    <!-- <router-link :to="`/match/${match.id}`" class="link"> -->
        <div class="date-container">
            <!-- <h3 class="date">{{.date}}</h3> -->
        </div>
        <div class="result">
            <div class="result-info">
                <h5>{{result.maps}}</h5>
            </div>
            <div class="result-teams">
                <div class="team-info">
                    <img :src="result.teams[0].logo" class="team-logo" /> 
                    <h6 class="team-name">{{result.teams[0].name}}</h6>
                </div>
                <div class="team-info">
                    <img :src="result.teams[1].logo" class="team-logo" /> 
                    <h6 class="team-name">{{result.teams[1].name}}</h6>
                </div>
            </div>
            <div class="event-info">
                <img :src="result.event.logo" class="event-logo" />
                <h6 class="event-name">{{result.event.name}}</h6>
            </div>
        </div>
    <!-- </router-link> -->
</div>
</template>

<style scoped>
.result-container {
    display: flex;
    flex-direction: column;
    background-color: #2d3844;
    color: #929a9e;
    margin-bottom: 15px;
}

.result {
    display: flex;
    align-items: center;
    margin: 0;
    /* text-align: center; */
    /* justify-content: start; */
}

/* .result-info {

} */

.team-info {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.event-info {
    display: flex;
    align-items: center;
}

.team-logo {
    width: 1.25em;
    height: auto;
    margin: 0;
}

.event-logo {
    width: 1.75em;
    height: auto;
}
</style>