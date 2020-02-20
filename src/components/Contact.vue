<template>
    <div id="contact">
        <h2 class="text-center">Contact</h2>
        <div id="btns">
            <a class="btn btn-primary" href="https://github.com/Buscedv" target="_blank" rel="noopener" aria-label="Personal GitHub profile"><font-awesome-icon :icon="['fab', 'github']"/></a>
            <a class="btn btn-primary" href="https://linkedin.com/in/edvard-busck-nielsen" target="_blank" rel="noopener" aria-label="Professional Linkedin page"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
            <a class="btn btn-primary" href="mailto:edvard1807@gmail.com" aria-label="Personal Email"><font-awesome-icon icon="envelope"/></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
    }
</script>

<style scoped>
    #contact {
        min-height: 60vh;
        background-color: var(--white);
        width: 100%;
        padding: 20px;
        padding-top: 4em;
    }

    #btns {
        text-align: center;
        margin-top: 4em;
    }
    
    .btn {
        width: 80%;
        margin: 20px;
        padding: 20px;
        border-radius: 20px;
    }
    
    .btn * {
        font-size: 2em;
    }
    
    mark {
        background-color: rgba(255, 255, 255, 0);
    }
    
    @media screen and (max-width: 460px) {
        mark {
            display: none;
        }
    }
</style>