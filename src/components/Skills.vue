<template>
    <div id="skills">
        <b-row>
            <b-col md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText('vuejs')" @mouseleave="hideSkillText('vuejs')">
                <font-awesome-icon :icon="['fab', 'vuejs']" :size="skillSize"/>
                <div class="skill-text-container">
                    <p id="vuejs-skill" class="skill-text">Intermediate to advanced</p>
                </div>
            </b-col>
            <b-col md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText('git')" @mouseleave="hideSkillText('git')">
                <font-awesome-icon :icon="['fab', 'git']" :size="skillSize"/>
                <div class="skill-text-container">
                    <p id="git-skill" class="skill-text">Intermediate</p>
                </div>
            </b-col>
            <b-col md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText('python')" @mouseleave="hideSkillText('python')">
                <font-awesome-icon :icon="['fab', 'python']" :size="skillSize"/>
                <div class="skill-text-container">
                    <p id="python-skill" class="skill-text">Intermediate</p>
                </div>
            </b-col>
            <b-col md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText('js')" @mouseleave="hideSkillText('js')">
                <font-awesome-icon :icon="['fab', 'js']" :size="skillSize"/>
                <div class="skill-text-container">
                    <p id="js-skill" class="skill-text">Intermediate to advanced</p>
                </div>
            </b-col>
            <b-col md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText('html5')" @mouseleave="hideSkillText('html5')">
                <font-awesome-icon :icon="['fab', 'html5']" :size="skillSize"/>
                <div class="skill-text-container">
                    <p id="html5-skill" class="skill-text">Advanced</p>
                </div>
            </b-col>
                <b-col md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText('css3')" @mouseleave="hideSkillText('css3')">
                <font-awesome-icon :icon="['fab', 'css3']" :size="skillSize"/>
                <div class="skill-text-container">
                    <p id="css3-skill" class="skill-text">Advanced</p>
                </div>
                </b-col>
            <b-col md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText('php')" @mouseleave="hideSkillText('php')">
                <font-awesome-icon :icon="['fab', 'php']" :size="skillSize"/>
                <div class="skill-text-container">
                    <p id="php-skill" class="skill-text">Beginner</p>
                </div>
            </b-col>
            <b-col md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText('linux')" @mouseleave="hideSkillText('linux')">
                <font-awesome-icon :icon="['fab', 'linux']" :size="skillSize"/>
                <div class="skill-text-container">
                    <p id="linux-skill" class="skill-text">Intermediate</p>
                </div>
            </b-col>
        </b-row>>
    </div>
</template>

<script>
    export default {
        name: 'Skills',
        data: function() {
            return {
                skillSize: '9x',
            }
        },
        methods: {
            showSkillText: function(skill) {
                document.querySelector('#' + skill + '-skill').style.display = 'block';
            },
            hideSkillText: function (skill) {
                document.querySelector('#' + skill + '-skill').style.display = 'none';
            }
        }
    }
</script>

<style scoped>
    #skills {
        padding-top: 4em;
        width: 100%;
    }
    
    .row {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        align-items: center;
        align-content: center;
        text-align: center;
    }
    
    .skill {
        color: var(--light-grey);
        padding: 10px;
    }
    
    .skill:hover {
        color: var(--accent);
        cursor: pointer;
    }
    
    .skill *:not(div) {
        margin: 5px;
    }
    
    .skill-text-container {
        height: 3.5em;
    }
    
    .skill-text {
        color: var(--light-grey);
        background-color: rgba(0, 0, 0, 0.6);
        padding: 5px;
        border-radius: 20px;
        display: none;
    }
</style>