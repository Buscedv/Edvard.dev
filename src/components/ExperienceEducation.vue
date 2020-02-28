<template>
    <div id="experience-education">
        <b-row id="content">
            <b-col md="6" sm="12" id="experience">
                <h2 class="text-center">Experience</h2>
                <div class="edu-exp-card">
                    <div class="edu-exp-card-inner">
                        <h3>Trainee</h3>
                        <h4>KSF Media Ab</h4>
                        <h5>February 2020 - Current</h5>
                        <p>
                            Internship as part of my vocational education (vocational qualification in information and communications technology), software development.
                        </p>
                    </div>
                </div>
                <div class="edu-exp-card">
                    <div class="edu-exp-card-inner">
                        <h3>Summer Intern</h3>
                        <h4>Supermetrics Oy</h4>
                        <h5>June 2019 - July 2019</h5>
                        <p>
                            Assisted in product development. Worked on internal tools for the CS (customer support) team.
    
                            Vue.js, Bootstrap, PHP & Git
                        </p>
                    </div>
                </div>
                <div class="edu-exp-card">
                    <div class="edu-exp-card-inner">
                        <h3>Assisting In Product Development</h3>
                        <h4>Supermetrics Oy</h4>
                        <h5>February 2019 - April 2019</h5>
                        <p>
                            Gathered API documentation
                        </p>
                    </div>
                </div>
                <div class="edu-exp-card">
                    <div class="edu-exp-card-inner">
                        <h3>Trainee</h3>
                        <h4>Supermetrics Oy</h4>
                        <h5>November 2018</h5>
                        <p>
                            TET/PRAO (work experience program) for 2 weeks.
    
                            - Python programming, API integrations, documentation and Google Dialogflow work.
    
                            Graded: 3/3, "Quick to start working, works well independently, managed to do more than planned, shown interest in learning new"
                        </p>
                    </div>
                </div>
            </b-col>
            <b-col md="6" sm="12" id="education">
                <h2 class="text-center">Education</h2>
                <div class="edu-exp-card">
                    <div class="edu-exp-card-inner">
                        <h3>Vocational School</h3>
                        <h4>Prakticum</h4>
                        <h5>August 2019 - Current</h5>
                        <p>Vocational qualification in Information and Communications Technology. Studying software development.</p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'ExperienceEducation',
    }
</script>

<style scoped>
    #experience-education {
        width: 100%;
        min-height: 100vh;
        background-color: var(--white);
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
