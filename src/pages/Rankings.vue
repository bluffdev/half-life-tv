<script setup lang="ts">
import { useFetch } from '../utils/useFetch';
import TeamLineup from '../components/TeamLineup.vue';
import { ref } from 'vue';
import { IState, ITeam } from '../interfaces/types';

const { state } = await useFetch('https://hltv-rest-api.herokuapp.com/teams')
// const state = ref<IState>( {
//     response: [
//         {
//             "id": 6667,
//             "ranking": 1,
//             "name": "FaZe",
//             "logo": "https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa",
//             "players": [
//                 {
//                     "fullname": "Finn 'karrigan' Andersen",
//                     "image": "https://img-cdn.hltv.org/playerbodyshot/_yByL-S5oSUgLpkQedassf.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=136,8,432,432&w=200&s=07b48937ef81e9121ff5d8480ac7224d",
//                     "nickname": "karrigan",
//                     "country": {
//                     "name": "Denmark",
//                     "flag": "/img/static/flags/30x20/DK.gif"
//                     }
//                 },
//                 {
//                     "fullname": "Håvard 'rain' Nygaard",
//                     "image": "https://img-cdn.hltv.org/playerbodyshot/Q0dlnWUrZON6RTRfHhZNB4.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=132,12,443,443&w=200&s=3713fcb7282ac0dc2ef4f815018603bf",
//                     "nickname": "rain",
//                     "country": {
//                     "name": "Norway",
//                     "flag": "/img/static/flags/30x20/NO.gif"
//                     }
//                 },
//                 {
//                     "fullname": "Russel 'Twistzz' Van Dulken",
//                     "image": "https://img-cdn.hltv.org/playerbodyshot/3W2WeF7zohMOjpjxGpurGG.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=132,8,455,455&w=200&s=80d469f6b6bad25879d3f2ef3aa79e29",
//                     "nickname": "Twistzz",
//                     "country": {
//                     "name": "Canada",
//                     "flag": "/img/static/flags/30x20/CA.gif"
//                     }
//                 },
//                 {
//                     "fullname": "Robin 'ropz' Kool",
//                     "image": "https://img-cdn.hltv.org/playerbodyshot/l_IS_AAkos3MIvUkU6p4qP.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124,8,467,467&w=200&s=923e5152fbf987518f7558d71034260f",
//                     "nickname": "ropz",
//                     "country": {
//                     "name": "Estonia",
//                     "flag": "/img/static/flags/30x20/EE.gif"
//                     }
//                 },
//                 {
//                     "fullname": "Helvijs 'broky' Saukants",
//                     "image": "https://img-cdn.hltv.org/playerbodyshot/sX2dZGcdbeOwlnZPTpKs5K.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124,8,451,451&w=200&s=8a5a53a8633ef9250552a710e624c898",
//                     "nickname": "broky",
//                     "country": {
//                     "name": "Latvia",
//                     "flag": "/img/static/flags/30x20/LV.gif"
//                     }
//                 }
//             ]
//         }
//     ]
// })
</script>

<template>
<div v-for="team in state.response">
    <TeamLineup :team="team"/>
</div>
</template>

<style scoped>
</style>