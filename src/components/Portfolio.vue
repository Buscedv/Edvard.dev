<template>
    <div id="portfolio">
        <h2 class="text-center">Portfolio</h2>
        <div class="row portfolio-content">
            <div class="col-md-4 col-sm-12">
                <div class="portfolio-card">
                    <h3>Enkelt</h3>
                    <p class="text-left">A transpiled programming language written in Python. Enkelt is the worlds first swedish programming language. Enkelt's syntax is one hundred percent swedish. Enkelt is designed to be used in programming education.</p>
                    <a href="https://enkelt.io" target="_blank" class="btn btn-primary">Website</a>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="portfolio-card">
                    <h3>Huffman Compression</h3>
                    <p class="text-left">A script that compresses text using huffman coding. Written in Python</p>
                    <a href="https://github.com/Buscedv/Huffman" target="_blank" class="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="portfolio-card">
                    <h3>Quicksort</h3>
                    <p class="text-left">A basic quicksort implementation written in Python.</p>
                    <a href="https://github.com/Buscedv/Quicksort" target="_blank" class="btn btn-primary">GitHub</a>
                </div>
            </div>
        </div>
        <div class="row portfolio-content">
            <div class="col-md-4 col-sm-12">
                <div class="portfolio-card">
                    <h3>Bootstrap Wiki Template</h3>
                    <p class="text-left">A wiki website template created with HTML5 & Bootstrap.</p>
                    <a href="https://github.com/Buscedv/BootstrapWikiTemplate" target="_blank" class="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="portfolio-card">
                    <h3>PyEpoch</h3>
                    <p class="text-left">A Python module that can convert timezones, set time and calculate seconds since the UNIX epoch.</p>
                    <a href="https://buscedv.github.io/PyEpoch/" target="_blank" class="btn btn-primary">Website</a>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="portfolio-card">
                    <h3>Emilianaskoog.fi</h3>
                    <p class="text-left">Personal website design for Emiliana Skoog.</p>
                    <a href="https://emilianaskoog.fi" target="_blank" class="btn btn-primary">Website</a>
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
        background-color: var(--darkGray);
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
        background-color: var(--darkest);
        padding: 20px;
        border-radius: 20px;
        text-align: center;
        min-height: 25em;
        margin: 10px;
    }
    
    .portfolio-card h3 {
        color: var(--accent);
    }
    
    .portfolio-card p {
        color: var(--lighter);
    }
    
    .portfolio-card:hover {
        background-color: var(--darkestHover);
    }
    
    @media screen and (max-width: 1500px) {
        .portfolio-content {
            padding: 2px;
            width: 100%;
        }
        
        .portfolio-card {
            padding: 5px;
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