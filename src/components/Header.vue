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
        background-color: var(--white-bg);
    }
    
    .header {
        width: 90%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }
    
    .header-inner {
        width: 100%;
    }
    
    img {
        height: 200px;
    }
    
    h1 {
        color: var(--dark-grey-text);
        font-size: 4em;
        padding: 20px;
    }
    
    h1 mark {
        color: var(--accent);
        background: none;
    }
    
    @media screen and (max-height: 620px) {
        img {
            height: 120px;
        }
        
        h1 {
            font-size: 2.2em !important;
        }
    }
    
    @media screen and (max-height: 290px) {
        img {
            height: 100px;
        }
    }

    @media screen and (max-height: 225px) {
        img {
            display: none;
        }
        
        h1 {
            width: 70%;
            font-size: 1.6em;
            margin-left: auto;
            margin-right: auto;
        }
    }
    
    @media screen and (max-width: 770px) {
        h1 {
            font-size: 2em !important;
        }
    }
    
    @media screen and (max-width: 480px) {
        h1 {
            font-size: 1.9em;
        }
    }

    @media screen and (max-width: 333px) {
        .header {
            width: 100%;
        }
        
        img {
            max-height: 130px;
        }
        
        h1 {
            padding-left: 5px;
            padding-right: 5px;
            font-size: 1.8em !important;
        }
    }
</style>