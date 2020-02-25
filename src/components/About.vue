<template>
    <div id="about" class="section">
        <div id="about-inner">
            <h2 class="text-center">About Me</h2>
            <img src="../assets/logo.png" alt="Edvard Busck-Nielsen" id="about-img">
            <p id="about-text">
                I have been programming for about 6 years and would like to make it my job in the future. I enjoy creating new things & solving problems because nothing else gives you that special feeling of success! There is nothing better than to create something new and experiment with new stuff, I'm constantly growing and I enjoy learning about new things.
            </p>
        </div>
        <skills></skills>
        <tools></tools>
    </div>
</template>

<script>
    import Skills from "./Skills";
    import Tools from "./Tools";
    
    export default {
        name: 'About',
        components: {Tools, Skills},
    }
</script>

<style scoped>
    #about {
        min-height: 100vh;
        background-color: var(--dark-grey);
        width: 100%;
        padding: 20px;
        padding-top: 1em;
    }
    
    p {
        color: var(--dark-white)
    }
    
    #about-inner {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4em;
        background-color: rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 30px;
        border-radius: 10px;
    }
    
    #about-img {
        height: 18em;
        margin-top: 20px;
        margin-bottom: 12px;
    }
    
    #about-text {
        margin-top: 2em;
        text-align: left;
    }
    
    @media screen and (max-width: 550px) {
        #about-inner {
            width: 99%;
        }
    }
    
    @media screen and (max-width: 350px) {
        #about-img {
            height: 12em;
        }
    }
</style>