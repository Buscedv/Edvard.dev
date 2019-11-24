<template>
    <nav>
        <div class="row">
            <div class="col-md-2 col-sm-1">
                <a href="#"><img class="navbar-img" src="../favicon.png" alt="Edvard Busck-Nielsen"></a>
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
</template>

<script>
    // Vue
    export default {
        name: 'Navbar',
    }
</script>

<style scoped>
    /* NAVBAR */
    nav {
        padding: 10px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        position: fixed;
        background-color: #fff;
        top: 0;
        z-index: 99;
        border-bottom: 1px solid var(--lightest);
        animation-name: slideIn;
        animation-duration: 0.1s;
    }
    
    #nav {
        margin-top: auto;
        margin-bottom: auto;
    }
    
    .navbar-item {
        color: var(--lighterGray);
        font-size: 1.5em;
    }
    
    .navbar-item:hover {
        cursor: pointer;
        color: var(--accent)!important;
        text-decoration: none;
    }
    
    .navbar-img {
        height: 2.5em;
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
</style>