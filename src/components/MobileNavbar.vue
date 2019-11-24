<template>
    <nav>
        <div class="row">
            <div class="col-3">
                <a href="#" aria-label="Home"><font-awesome-icon icon="home"/></a>
            </div>
            <div class="col-3">
                <a href="#about" aria-label="About"><font-awesome-icon icon="user"/></a>
            </div>
            <div class="col-3">
                <a href="#portfolio" aria-label="Portfolio"><font-awesome-icon icon="cube"/></a>
            </div>
            <div class="col-3">
                <a href="#contact" aria-label="Contact"><font-awesome-icon icon="envelope"/></a>
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