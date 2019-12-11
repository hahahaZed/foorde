<template>
    <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <router-link :to="{name: 'home'}">
            <Icon type="md-home" />
            <span class="home">Home</span>
        </router-link>
    </Header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.home {
    padding-left: 10px;
}
</style>