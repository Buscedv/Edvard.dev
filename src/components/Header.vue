<template>
    <header class="section">
        <img id="logo" src="../assets/logo.png">
        <h1><mark>Edvard</mark> Busck-Nielsen</h1>
        <h2>Portfolio</h2>
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
        padding-top: 8em;
    }
    #logo {
        height: 15em;
        margin-bottom: 40px;
    }
    h1 {
        color: var(--darkGray);
        animation-name: fadeIn;
        animation-duration: .11s;
    }
    h1 mark {
        background-color: var(--whiteBg);
        color: var(--accent);
    }
    h2 {
        margin-top: 10px;
        color: var(--accent);
        animation-name: fadeIn;
        animation-duration: .11s;
    }
    
    @keyframes fadeIn {
        0% {opacity: 0.1%}
        100% {opacity: 100%}
    }
    
    @media screen and (max-height: 730px) {
        header {
            padding-top: 10px;
        }
        
        #logo {
            height: 11em;
            margin-bottom: 30px;
        }
    }
</style>