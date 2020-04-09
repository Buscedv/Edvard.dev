<template>
    <div id="portfolio">
        <h2 class="text-center">Portfolio</h2>
        <b-container fluid>
            <b-row class="portfolio-content" v-for="groupedPortfolioItem in groupedPortfolioItems" :key="groupedPortfolioItems.indexOf(groupedPortfolioItem)">
                <b-col lg="4" md="6" sm="12" v-for="portfolioItem in groupedPortfolioItem" :key="groupedPortfolioItem.indexOf(portfolioItem)">
                    <div class="portfolio-card">
                        <h3 v-text="portfolioItem.title"></h3>
                        <p class="text-left" v-text="portfolioItem.description"></p>
                        <a :href="portfolioItem.link" target="_blank" rel="noopener" class="btn btn-primary">Learn More</a>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Portfolio',
        data: function () {
            return {
                portfolioItems: [
                    {
                        title: 'Enkelt',
                        description: 'The worlds first programming language that uses a swedish syntax.',
                        link: 'https://enkelt.io',
                    },
                    {
                        title: 'Berlinerfunk.fi',
                        description: 'Website design for the funk/jazz/rock band Berlinerfunk.',
                        link: 'https://berlinerfunk.fi',
                    },
                    {
                        title: 'Emilianaskoog.fi',
                        description: 'A personal website design. Built with Vue.js, and deployed with Netlify',
                        link: 'https://emilianaskoog.fi',
                    },
                    {
                        title: 'Abnex',
                        description: 'Abnormal Expressions (abnex) is an alternative to Regular Expressions (regex).',
                        link: 'https://github.com/Buscedv/abnormal-expressions',
                    },
                    {
                        title: 'Huffman Coding',
                        description: 'An demonstration on how huffman compression works. Written in Python.',
                        link: 'https://github.com/Buscedv/Huffman',
                    },
                    {
                        title: 'PyEpoch',
                        description: 'A Python module for working with timezones & the Unix epoch.',
                        link: 'https://buscedv.github.io/PyEpoch/',
                    },
                ]
            }
        },
        computed: {
            groupedPortfolioItems: function () {
                const chunkSize = 3;
                
                let chunked = [];
    
                let i;
                let portfolioItemCounter = 0;
                
                for (i = 0; i < Math.round(this.portfolioItems.length/chunkSize); i++) {
                    chunked.push([])
                }
                
                for (i = 0; i < chunked.length; i++) {
                    while (chunked[i].length !== chunkSize || portfolioItemCounter === this.portfolioItems.length-1) {
                        chunked[i].push(this.portfolioItems[portfolioItemCounter]);
                        portfolioItemCounter++;
                    }
                }
                
                return chunked;
            }
        }
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

    @media screen and (max-width: 575px) {
        #portfolio {
            padding-top: 2em;
        }
    }

    @media screen and (max-width: 350px) {
        #portfolio {
            padding-left: 0;
            padding-right: 0;
        }

        .portfolio-content {
            padding: 0;
        }

        .portfolio-card {
            padding: 10px;
        }

        .portfolio-card h3 {
            font-size: 1.2em !important;
        }

        .portfolio-card p {
            font-size: 0.8em;
        }
    }
</style>
