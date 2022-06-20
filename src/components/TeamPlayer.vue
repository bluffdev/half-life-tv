<script setup lang="ts">
import { ITeamPlayer } from '../interfaces/types';

defineProps<{ player: ITeamPlayer }>()

</script>

<template>
    <div class="player">
        <!-- <img src="../assets/karrigan.png" class="player-image"/> -->
        <img :src="player.image" class="player-image" />
        <div class="player-info">
            <img :src="player.country.flag" class="player-flag" />
            <div class="player-nickname">{{player.nickname}}</div>
        </div>
    </div>
</template>

<style scoped>
.player {
    margin: 0;
    margin-top: 10px;
}

.player-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4.5px;
}

.player-image {
    width: 7.5em;
    height: auto;
}

.player-flag {
    width: 1.25em;
    height: auto;
    margin: 0;
    margin-right: 0.25em;
}

.player-nickname {
    margin: 0;
}
</style>