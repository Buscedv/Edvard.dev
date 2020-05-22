<template>
    <div id="skills">
        <b-row>
            <b-col v-for="(skill, index) in skills" :key="index" md="3" sm="4" xs="12" class="skill" @mouseover="showSkillText(skill.title)" @mouseleave="hideSkillText(skill.title)">
                <font-awesome-icon :icon="['fab', skill.title]" :size="skillSize"/>
                <div class="skill-text-container">
                    <p :id="skill.title+'-skill'" class="skill-text" v-text="skill.level"></p>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Skills',
        data: function() {
            return {
                skillSize: '9x',
                skills: [
                    {
                        title: 'vuejs',
                        level: 'Intermediate',
                    },
                    {
                        title: 'git',
                        level: 'Intermediate',
                    },
                    {
                        title: 'js',
                        level: 'Intermediate to Advanced',
                    },
                    {
                        title: 'python',
                        level: 'Intermediate',
                    },
                    {
                        title: 'html5',
                        level: 'Advanced',
                    },
                    {
                        title: 'css3',
                        level: 'Advanced',
                    },
                    {
                        title: 'php',
                        level: 'Beginner',
                    },
                    {
                        title: 'linux',
                        level: 'Intermediate',
                    },
                ]
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