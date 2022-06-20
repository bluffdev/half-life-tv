<template>
<nav class="navbar">
    <ul class="nav-items">
        <li class="nav-item">
            <router-link to="/" class="link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/matches" class="link">Matches</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/rankings" class="link">Rankings</router-link>
        </li>
    </ul>
</nav>
</template>

<style scoped>

.navbar {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5em;
    background-color: #2d3844;
    color: #929a9e;
}
.nav-items {
    display: flex;
    width: 60%;
    height: auto;
    margin: 0.75em 0.75em;
    list-style: outside none none;
}

.nav-item {
    display: flex;
}

.link {
    padding: 0.25em;
    text-decoration: none;
    color: inherit;
}
</style>