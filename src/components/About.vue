<template>
    <div id="about" class="section">
        <h2 class="text-center">About Me</h2>
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <img src="../assets/logo.jp2" alt="Edvard Busck-Nielsen" id="about-img">
            </div>
            <div class="col-md-6 col-sm-12">
                <p id="about-text">
                    I have been programming for about 6 years and would like to make it my job in the future. I enjoy creating and solving problems because nothing else gives you that special feeling of success! There is nothing better than to create something new and experiment with new stuff, I'm constantly growing and I enjoy learning about new things.
                </p>
            </div>
        </div>
        <skills></skills>
    </div>
</template>

<script>
    import Skills from "./Skills";
    
    export default {
        name: 'About',
        components: {Skills},
    }
</script>

<style scoped>
    #about {
        min-height: 100vh;
        background-color: var(--darkGray);
        width: 100%;
        padding: 20px;
        padding-top: 8em;
    }
    p {
        color: var(--lightest)
    }
    .row {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10em;
    }
    #about-img {
        height: 18em;
    }
    #about-text {
        margin-top: 2em;
    }
    
    @media screen and (max-width: 550px) {
        .row {
            width: 99%;
        }
    }
    
    @media screen and (max-width: 350px) {
        #about-img {
            height: 12em;
        }
    }
</style>