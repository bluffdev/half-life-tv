<script setup lang="ts">
import { IPlayer } from '../interfaces/types';

defineProps<{ player: IPlayer }>()

</script>

<template>
    <div class="player">
        <!-- <img src="../assets/karrigan.png" class="player-image"/> -->
        <img :src="player.image" class="player-image" />
        <div class="player-nickname">{{player.nickname}}</div>
    </div>
</template>

<style scoped>
.player {
    margin: 0;
    margin-top: 10px;
}

.player-image {
    width: 7.5em;
    height: auto;
}

.player-nickname {
    margin-bottom: 4.5px;
}
</style>