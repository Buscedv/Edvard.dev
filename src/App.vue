<template>
    <div id="app">
       <div class="justify-content-center">
           <Loader v-if="!loaded"></Loader>
           <div v-else>
               <Navbar></Navbar>
               <Header></Header>
               <about></about>
               <experience-education></experience-education>
               <portfolio></portfolio>
               <contact></contact>
               <Footer></Footer>
           </div>
       </div>
    </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    import Header from "./components/Header";
    import Loader from "./components/Loader";
    import About from "./components/About";
    import ExperienceEducation from "./components/ExperienceEducation";
    import Portfolio from "./components/Portfolio";
    import Contact from "./components/Contact";
    import Footer from "./components/Footer";
    
    export default {
        name: 'app',
        components: {Contact, Portfolio, ExperienceEducation, About, Loader, Header, Navbar, Footer},
        data: function () {
            return {
                loaded: false,
            }
        },
        created: function() {
          this.loaded = true;
        },
        destroyed: function() {
            this.loaded = false;
        }
    }
</script>

<style>
    @import './assets/styles/variables.css';
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        font-family: 'Verdana', sans-serif !important;
    }
    
    #app {
        background-color: var(--white);
    }
    
    h1, h2, h3, h4, h5, h6 {
        color: var(--dark-grey);
        margin: 10px;
    }
    
    h1 {
        font-size: 3.5em !important;
    }
    
    h2 {
        font-size: 3em !important;
        color: var(--accent);
    }
    
    h3 {
        font-size: 2.5em !important;
    }
    
    h4 {
        font-size: 2em !important;
    }
    
    h5 {
        font-size: 1.5em !important;
    }
    
    h6 {
        font-size: 1em !important;
    }
    
    p {
        font-size: 1.5em !important;
    }
    
    a {
        font-size: 1.5em !important;
    }
    
    .btn-primary {
        background-color: var(--accent) !important;
        outline-color: var(--accent) !important;
        border-color: var(--accent) !important;
    }
    
    .btn-primary:hover {
        background-color: var(--accent-hover) !important;
    }
</style>
