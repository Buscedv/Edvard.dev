<template>
    <header class="section">
        <div id="header-inner">
            <img id="logo" src="../assets/logo.png" alt="Edvard Busck-Nielsen">
            <h1><mark>Edvard</mark> Busck-Nielsen</h1>
            <h2>Portfolio</h2>
        </div>
    </header>
</template>

<script>
    // Vue
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    header {
        text-align: center;
        padding: 20px;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
    }
    
    #header-inner {
        height: 50vh;
        margin-left: auto;
        margin-right: auto;
    }
    
    #logo {
        height: 15em;
        margin-bottom: 40px;
    }
    h1 {
        color: var(--darkGray);
        animation-name: fadeIn;
        animation-duration: .1s;
    }
    h1 mark {
        background-color: var(--whiteBg);
        color: var(--accent);
    }
    h2 {
        margin-top: 10px;
        color: var(--accent);
        animation-name: fadeIn;
        animation-duration: .1s;
    }
    
    @keyframes fadeIn {
        0% {opacity: 0.1%}
        100% {opacity: 100%}
    }
    
    @media screen and (max-height: 760px) {
        #logo {
            height: 11em;
            margin-bottom: 30px;
        }
    }
</style>