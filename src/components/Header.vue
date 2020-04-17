<template>
    <header>
        <b-container fluid>
            <b-row class="inner">
                <b-col md="6" class="inner-part">
                    <b-row class="inner-row">
                        <b-col md="12" class="inner-part-element">
                            <h1><mark>Edvard</mark></h1>
                        </b-col>
                        <b-col md="12" class="inner-part-element">
                            <h1>Busck-Nielsen</h1>
                        </b-col>
                        <b-col md="12" class="inner-part-element">
                            <h1><mark>Portfolio</mark></h1>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="6" class="inner-part">
                    <b-row class="inner-row">
                        <b-col md="12" class="inner-part-element">
                            <img src="../assets/logo.png" alt="Edvard Busck-Nielsen">
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    header {
        width: 70%;
        height: 100vh;
        background-color: var(--white-bg);
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }

    .inner {
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
    }

    .inner-row, .inner-part, .inner-part-element {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }
    
    h1 {
        color: var(--dark-grey-text);
        font-family: 'Open Sans', sans-serif !important;
        font-weight: bolder;
        font-size: 5.5em !important;
        margin: 0;
    }
    
    h1 mark {
        color: var(--accent);
        background: none;
        padding: 0;
    }

    img {
        height: 20em;
    }

    /* Media for WIDTH */

    @media screen and (max-width: 980px) {
        header {
            width: 100%;
            padding-left: 100px;
            padding-right: 100px;
        }
        h1 {
            font-size: 3.5em !important;
        }
        img {
            height: 10em;
        }
    }

    @media screen and (max-width: 780px) {
        header {
            padding-left: 25px;
            padding-right: 0;
        }
        h1 {
            font-size: 7em !important;
        }

        img {
            display: none;
        }
    }

    @media screen and (max-width: 710px) {
        header {
            padding-left: 0;
            padding-right: 0;
        }

        .inner {
            padding: 5px;
        }

        h1 {
            font-size: 6em !important;
            width: 100%;
        }
    }

    @media screen and (max-width: 700px) {
        h1 {
            font-size: 4em !important;
        }
    }

    @media screen and (max-width: 410px) {
        h1 {
            font-size: 3em !important;
        }
    }

    @media screen and (max-width: 330px) {
        h1 {
            font-size: 2em !important;
        }
    }

    @media screen and (max-width: 270px) {
        h1 {
            font-size: 1em !important;
        }
    }
</style>
