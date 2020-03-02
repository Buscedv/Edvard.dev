<template>
    <div class="navbars">
        <div v-if="overlay" id="overlay">
            <b-row id="overlay-inner">
                <b-col md="4" sm="12">
                    <h4 class="overlay-header"><a href="#about" @click="toggleOverlay">About</a></h4>
                    <a href="#about" @click="toggleOverlay">About Me</a>
                    <a href="#skills" @click="toggleOverlay">Skills</a>
                    <a href="#tools" @click="toggleOverlay">What I Use</a>
                    <a href="#experience-education" @click="toggleOverlay">Experience & Education</a>
                </b-col>
                <b-col md="4" sm="12">
                    <h4 class="overlay-header"><a href="#portfolio" @click="toggleOverlay">Portfolio</a></h4>
                    <a href="https://github.com/buscedv" target="_blank" @click="toggleOverlay">GitHub</a>
                </b-col>
                <b-col md="4" sm="12">
                    <h4 class="overlay-header"><a href="#contact" @click="toggleOverlay">Contact</a></h4>
                    <a href="https://github.com/Buscedv" target="_blank" @click="toggleOverlay">GitHub</a>
                    <a href="https://linkedin.com/in/edvard-busck-nielsen" target="_blank" @click="toggleOverlay">LinkedIn</a>
                    <a href="mailto:edvard1807@gmail.com" @click="toggleOverlay">Email</a>
                </b-col>
            </b-row>
        </div>
        
        <nav id="navbar">
            <b-row>
                <b-col md="2" sm="1">
                    <a href="#">
                        <img class="navbar-img-icon" src="../assets/logo.png" alt="Edvard Busck-Nielsen">
                    </a>
                </b-col>
                <b-col md="8" sm="10" class="justify-content-center" id="nav">
                    <b-row>
                        <a v-for="(navbarItem, index) in navbarItems" :key="index" class="col navbar-item" :href="navbarItem.link" v-text="navbarItem.title"></a>
                    </b-row>
                </b-col>
                <b-col md="2" sm="1">
                    <a @click="toggleOverlay">
                        <font-awesome-icon class="navbar-img-icon" :icon="['fas', menuIcon]" />
                    </a>
                </b-col>
            </b-row>
        </nav>
        
        <nav id="mobile-navbar">
            <b-row class="mobile-navbar-row">
                <b-col cols="3" v-for="(navbarItem, index) in navbarItems" :key="index">
                    <a :href="navbarItem.link" :aria-label="navbarItem.title"><font-awesome-icon :icon="['fas', navbarItem.icon]"/></a>
                </b-col>
            </b-row>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data: function () {
            return {
                overlay: false,
                menuIcon: 'bars',
                navbarItems: [
                    {
                        title: 'Home',
                        link: '#',
                        icon: 'home',
                    },
                    {
                        title: 'About',
                        link: '#about',
                        icon: 'user',
                    },
                    {
                        title: 'Portfolio',
                        link: '#portfolio',
                        icon: 'cube',
                    },
                    {
                        title: 'Contact',
                        link: '#contact',
                        icon: 'envelope',
                    },
                ],
            }
        },
        methods: {
            toggleOverlay: function () {
                this.overlay = !this.overlay;
            }
        }
    }
</script>

<style scoped>
    /* OVERLAY */
    #overlay {
        background-color: var(--dark-grey);
        text-align: center;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
    }
    
    #overlay-inner {
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        position: fixed;
        width: 100%;
        top: 20%;
        height: 80%;
        border-bottom: 2px solid var(--accent);
        overflow-y: scroll;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    #overlay-inner::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE and Edge */
    #overlay-inner {
        -ms-overflow-style: none;
    }
    
    #overlay-inner img {
        height: 120px;
    }
    
    .overlay-header a {
        color: var(--accent) !important;
        text-decoration: none !important;
        font-size: 1.4em !important;
    }
    
    .overlay-header:hover a {
        color: var(--accent-hover) !important;
    }
    
    #overlay a {
        color: var(--light-grey);
        width: 100%;
        padding: 10px;
        text-decoration: none !important;
        float: left;
    }
    
    #overlay a:hover {
        color: var(--accent);
    }
    
    /* NAVBAR */
    #navbar {
        padding: 10px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: fixed;
        background-color: var(--white-bg);
        top: 0;
        z-index: 100;
        border-bottom: 1px solid var(--light-border);
        animation-name: slideIn;
        animation-duration: 0.02s;
    }
    
    #nav {
        margin-top: auto;
        margin-bottom: auto;
    }
    
    .navbar-item {
        color: var(--dark);
        font-size: 1.5em;
    }
    
    .navbar-item:hover {
        cursor: pointer;
        color: var(--accent)!important;
        text-decoration: none;
    }
    
    .navbar-img-icon {
        height: 2.5em;
        color: var(--dark-grey);
    }
    
    .navbar-img-icon:hover {
        cursor: pointer;
        color: var(--accent);
    }
    
    @keyframes slideIn {
        0% {
            top: -5%;
            
        }
        100% {
            top: 0;
        }
    }
    
    /* MOBILE NAVBAR */
    #mobile-navbar {
        visibility: hidden;
        width: 100%;
        text-align: center;
        position: fixed;
        bottom: 0;
        height: 50px;
        border-top: 1px solid var(--light-border);
        padding: 10px;
        background-color: white;
        z-index: 100;
    }
    
    .mobile-navbar-row {
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
    }
    
    #mobile-navbar a * {
        color: var(--dark);
        font-size: 1.3em;
        transition: .2s;
    }
    
    #mobile-navbar a:hover * {
        color: var(--accent);
    }
    
    /* MEDIA */
    @media screen and (max-width: 575px) {
        #navbar {
            visibility: hidden;
        }
        
        #mobile-navbar {
            visibility: visible;
        }
        
        #overlay-inner {
            top: 5px;
            border: none;
        }
    }
</style>