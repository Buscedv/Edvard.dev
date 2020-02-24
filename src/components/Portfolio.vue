<template>
    <div id="portfolio">
        <h2 class="text-center">Portfolio</h2>
        <div class="row portfolio-content">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="portfolio-card">
                    <h3>Enkelt</h3>
                    <p class="text-left">A transpiled programming language written in Python. Enkelt is the worlds first swedish programming language. Enkelt is designed to be used in programming education.</p>
                    <a href="https://enkelt.io" target="_blank" rel="noopener" class="btn btn-primary">Website</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="portfolio-card">
                    <h3>Berlinerfunk.fi</h3>
                    <p class="text-left">Website design for the funk/jazz/rock band Berlinerfunk.</p>
                    <a href="https://berlinerfunk.fi" target="_blank" rel="noopener" class="btn btn-primary">Website</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="portfolio-card">
                    <h3>PyEpoch</h3>
                    <p class="text-left">A Python module that can convert timezones, set time and calculate seconds since the UNIX epoch.</p>
                    <a href="https://buscedv.github.io/PyEpoch/" target="_blank" rel="noopener" class="btn btn-primary">Website</a>
                </div>
            </div>
        </div>
        <div class="row portfolio-content">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="portfolio-card">
                    <h3>Huffman Compression</h3>
                    <p class="text-left">A script that compresses text using huffman coding. Written in Python</p>
                    <a href="https://github.com/Buscedv/Huffman" target="_blank" rel="noopener" class="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="portfolio-card">
                    <h3>Quicksort</h3>
                    <p class="text-left">A basic quicksort implementation written in Python.</p>
                    <a href="https://github.com/Buscedv/Quicksort" target="_blank" rel="noopener" class="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="portfolio-card">
                    <h3>Emilianaskoog.fi</h3>
                    <p class="text-left">Personal website design.</p>
                    <a href="https://emilianaskoog.fi" target="_blank" rel="noopener" class="btn btn-primary">Website</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Portfolio',
    }
</script>

<style scoped>
    #portfolio {
        width: 100%;
        min-height: 100vh;
        background-color: var(--dark-grey);
        padding: 20px;
        padding-top: 8em;
    }
    
    .portfolio-content {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        margin-top: 2em;
    }
    
    .portfolio-card {
        background-color: var(--dark-hover);
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        min-height: 25em;
        margin: 5px;
        border: 3px solid var(--dark-hover);
    }
    
    .portfolio-card h3 {
        color: var(--accent);
    }
    
    .portfolio-card p {
        color: var(--light-grey);
    }
    
    .portfolio-card:hover {
        background-color: var(--black);
    }
    
    @media screen and (max-width: 1500px) {
        .portfolio-content {
            padding: 2px;
            width: 100%;
        }
        
        .portfolio-card h3 {
            font-size: 2em !important;
            margin-bottom: 10px;
        }
    }
    
    @media screen and (max-width: 350px) {
        .portfolio-card h3 {
            font-size: 1.2em !important;
        }
        
        .portfolio-card p {
            font-size: 0.8em;
        }
    }
</style>
