<template>
    <div id="experience-education">
        <b-row id="content">
            <b-col md="6" sm="12" id="experience">
                <h2 class="text-center">Experience</h2>
                <div class="edu-exp-card" v-for="(exp, index) in experience" :key="index">
                    <div class="edu-exp-card-inner">
                        <h3 v-text="exp.title"></h3>
                        <h4 v-text="exp.location"></h4>
                        <h5 v-text="(exp.end !== '') ? exp.start + ' - ' + exp.end : exp.start"></h5>
                        <p v-html="exp.description"></p>
                    </div>
                </div>
            </b-col>
            <b-col md="6" sm="12" id="education">
                <h2 class="text-center">Education</h2>
                <div class="edu-exp-card" v-for="(exp, index) in education" :key="index">
                    <div class="edu-exp-card-inner">
                        <h3 v-text="exp.title"></h3>
                        <h4 v-text="exp.location"></h4>
                        <h5 v-text="(exp.end !== '') ? exp.start + ' - ' + exp.end : exp.start"></h5>
                        <p v-html="exp.description"></p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'ExperienceEducation',
        data: function() {
            return {
                experience: [
                    {
                        title: "Trainee",
                        location: "KSF Media Ab",
                        start: "February 2020",
                        end: "April 2020 (current)",
                        description: "Internship as part of my vocational education (vocational qualification in information and communications technology), software development."
                    },
                    {
                        title: "Summer Intern",
                        location: "Supermetrics Oy",
                        start: "June 2019",
                        end: "July 2019",
                        description: "Assisted in product development. Worked on internal tools for the CS (customer support) team.<br/><br/>Vue.js, Bootstrap, PHP & Git"
                    },
                    {
                        title: "Assisting In Product Development",
                        location: "Supermetrics Oy",
                        start: "February 2019",
                        end: "April 2019",
                        description: "Gathered API documentation"
                    },
                    {
                        title: "Trainee",
                        location: "Supermetrics Oy",
                        start: "November 2018",
                        end: "",
                        description: 'TET/PRAO (work experience program) for 2 weeks.<br/><br/> - Python programming, API integrations, documentation and Google Dialogflow work.<br/><br/>Graded: 3/3, "Quick to start working, works well independently, managed to do more than planned, shown interest in learning new"',
                    },
                ],
                education: [
                    {
                        title: 'Vocational School',
                        location: 'Prakticum',
                        start: 'August 2019',
                        end: 'Current',
                        description: 'Vocational qualification in Information and Communications Technology. Studying software development.',
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    #experience-education {
        width: 100%;
        min-height: 100vh;
        background-color: var(--white-bg);
        padding: 20px;
        padding-top: 8em;
    }
    
    #content {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    
    #content h2 {
        color: var(--accent);
        margin-bottom: 1em;
    }
    
    .edu-exp-card {
        padding: 10px;
        width: 55%;
        border-left: 5px solid var(--dark-grey);
        border-radius: 4px;
        margin-right: 50px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 25%;
    }
    
    .edu-exp-card-inner {
        background-color: var(--dark-grey);
        border-radius: 20px;
        min-height: 300px;
        padding: 20px;
    }
    
    .edu-exp-card-inner h3 {
        color: var(--accent);
        font-size: 1.6em !important;
    }
    
    .edu-exp-card-inner h4 {
        color: var(--light-grey);
        font-size: 1.1em !important;
    }
    
    .edu-exp-card-inner h5 {
        color: var(--grey);
        font-size: 0.9em !important;
    }
    
    .edu-exp-card-inner p {
        color: var(--dark-white);
        margin-left: 9px;
        margin-top: 20px;
        font-size: 1.2em !important;
    }
    
    .edu-exp-card-inner:hover {
        background-color: var(--dark-hover);
    }
    
    @media screen and (max-width: 1100px) {
        #content {
            width: 100%;
        }
        
        .edu-exp-card {
            width: 80%;
        }
    }
    
    @media screen and (max-width: 767px) {
        .edu-exp-card {
            margin-left: 5px;
            width: 99%;
        }
    }
    
    @media screen and (max-width: 320px) {
        #content h2 {
            font-size: 2.2em !important;
        }
        
        .edu-exp-card h3 {
            font-size: 1em !important;
        }
        
        .edu-exp-card p {
            font-size: 0.8em !important;
        }
    }
</style>
