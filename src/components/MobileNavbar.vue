<template>
    <nav>
        <div class="row">
            <div class="col-3">
                <a href="#"><font-awesome-icon icon="home"/></a>
            </div>
            <div class="col-3">
                <a href="#about"><font-awesome-icon icon="user"/></a>
            </div>
            <div class="col-3">
                <a href="#portfolio"><font-awesome-icon icon="cube"/></a>
            </div>
            <div class="col-3">
                <a href="#contact"><font-awesome-icon icon="envelope"/></a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MobileNavbar',
    }
</script>

<style scoped>
    nav {
        width: 100%;
        text-align: center;
        position: fixed;
        bottom: 0;
        height: 50px;
        border-top: 1px solid var(--lighter);
        padding: 10px;
        background-color: white;
        z-index: 99;
    }
    
    a * {
        color: var(--darkGray);
        font-size: 1.3em;
        transition: .2s;
    }
    
    a *:hover {
        color: var(--accent);
    }
</style>