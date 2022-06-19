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
    <div v-if="match.teams !== null" class="teams-info">
        <div v-if="match.teams[0] !== undefined">
            {{match.teams[0].name}}
        </div>
        <div v-else>
            Undecided
        </div>
        <div v-if="match.teams[1] !== undefined">
            {{match.teams[1].name}}
        </div>
        <div v-else>
            Undecided
        </div>
    </div>
    <div v-else class="teams-info">
        Teams are Undecided
    </div>
    <div class="event-info">
        {{match.event.name}}
    </div>
</div>
</template>

<style scoped>
.match-container {
    display: flex;
    background-color: #2d3844;
    color: #929a9e;
    margin-bottom: 15px;
}
</style>