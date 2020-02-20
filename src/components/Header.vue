<template>
    <header>
        <div class="header">
            <div class="header-inner">
                <img src="../assets/logo.png" alt="Edvard Busck-Nielsen">
                <h1><mark>Edvard</mark> Busck-Nielsen <mark>Portfolio</mark></h1>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    header {
        width: 100%;
        height: 100vh;
    }
    
    .header {
        width: 100%;
        height: 90%;
        padding: 150px;
        text-align: center;
        display: flex;
        align-items: center;
    }
    
    .header-inner {
        width: 100%;
    }
    
    img {
        height: 200px;
    }
    
    h1 {
        color: var(--dark);
        font-size: 4em;
        padding: 20px;
    }
    
    h1 mark {
        color: var(--accent);
        background: none;
    }

    @media screen and (max-width: 757px) {
        .header {
            padding: 10px;
        }
    
        img {
            height: 130px;
        }
    
        h1 {
            padding: 10px;
            font-size: 3em;
        }
    }
</style>