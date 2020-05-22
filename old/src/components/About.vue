<template>
    <div id="about" class="section">
        <div id="about-inner" class="row">
            <div class="col-md-6 col-sm-12">
                <h2 class="text-center">About</h2>
                <h2 class="text-center" id="me">Me</h2>
            </div>
            <div class="col-md-6 col-sm-12">
                <img src="../assets/logo.png" alt="Edvard Busck-Nielsen" id="about-img">
            </div>
            <div class="col-12">
                <p id="about-text">
                    I have been programming for about 6 years and would like to make it my job in the future. I enjoy creating new things & solving problems because nothing else gives you that special feeling of success! There is nothing better than to create something new and experiment with new stuff, I'm constantly growing and I enjoy learning about new things.
                </p>
            </div>
        </div>
        <Skills></Skills>
        <Tools></Tools>
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
        padding-top: 2em;
    }

    h2 {
        text-align: left !important;
        margin: 0;
        padding: 0;
        font-size: 5em !important;
    }

    #me {
        color: var(--white) !important;
    }
    
    p {
        color: var(--dark-white);
    }
    
    #about-inner {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4em;
        padding: 20px;
    }
    
    #about-img {
        height: 18em;
        margin-top: 20px;
        margin-bottom: 12px;
    }
    
    #about-text {
        margin-top: 2em;
        text-align: left;
        padding: 10px;
    }
    
    @media screen and (max-width: 550px) {
        #about {
            padding: 5px;
        }
        #about-inner {
            width: 100%;
            padding: 5px;
        }

        #about-img {
            display: none;
        }
    }
    
    @media screen and (max-width: 350px) {
        #about-img {
            height: 12em;
        }
    }
</style>
