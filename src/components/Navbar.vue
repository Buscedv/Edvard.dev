<template>
    <div class="navbars">
        <nav id="navbar">
            <div class="row">
                <div class="col-md-2 col-sm-1">
                    <a href="#"><img class="navbar-img" src="../assets/logo.png" alt="Edvard Busck-Nielsen"></a>
                </div>
                <div class="col-md-8 col-sm-10 justify-content-center" id="nav">
                    <div class="row">
                        <a class="col navbar-item" href="#home">Home</a>
                        <a class="col navbar-item" href="#about">About</a>
                        <a class="col navbar-item" href="#portfolio">Portfolio</a>
                        <a class="col navbar-item" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        
        <nav id="mobile-navbar">
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
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style scoped>
    /* NAVBAR */
    #navbar {
        padding: 10px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: fixed;
        background-color: var(--white);
        top: 0;
        z-index: 99;
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
    
    .navbar-img {
        height: 2.7em;
    }
    
    .navbar-img:hover {
        cursor: pointer;
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
        z-index: 99;
    }
    
    #mobile-navbar .row {
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
    }
    
    #mobile-navbar a * {
        color: var(--dark);
        font-size: 1.3em;
        transition: .2s;
    }
    
    #mobile-navbar a *:hover {
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
    }
</style>