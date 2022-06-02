<script setup lang="ts">
import { useFetch } from '../utils/useFetch';

const { state } = await useFetch('https://hltv-rest-api.herokuapp.com/teams')
</script>
<template>
<div v-for="player in state.response">{{player.id}}</div>
</template>
<style>
</style>