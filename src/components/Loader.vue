<template>
    <div id="container">
        <div id="loader"></div>
        <img src="../assets/logo.jp2" alt="Edvard Busck-Nielsen">
    </div>
</template>

<script>
    export default {
        name: 'Loader',
    }
</script>

<style scoped>
    #container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        background-color: var(--whiteBg);
    }
    #loader {
        border: 5px solid var(--darkGray);
        border-top: 5px solid var(--accent);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 2s linear infinite;
        position: absolute;
        z-index: 101;
    }
    img {
        position: absolute;
        z-index: 100;
        height: 80px;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>