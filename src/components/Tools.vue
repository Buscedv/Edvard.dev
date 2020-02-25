<template>
    <div id="tools" class="section">
        <h2>What I Use</h2>
        <div class="inner row">
            <div class="col-12 row">
                <div class="col-6 tool tool-h">
                    <p>IDE</p>
                </div>
                <div class="col-6 tool">
                    <p>Jetbrains</p>
                </div>
            </div>
            <div class="col-12 row">
                <div class="col-6 tool tool-h">
                    <p>Text Editor</p>
                </div>
                <div class="col-6 tool">
                    <p>Sublime Text</p>
                </div>
            </div>
            <div class="col-12 row">
                <div class="col-6 tool tool-h">
                    <p>OS</p>
                </div>
                <div class="col-6 tool">
                    <p>OSX, GNU/Linux</p>
                </div>
            </div>
            <div class="col-12 row">
                <div class="col-6 tool tool-h">
                    <p>SCM</p>
                </div>
                <div class="col-6 tool">
                    <p>Git & GitHub</p>
                </div>
            </div>
            <div class="col-12 row">
                <div class="col-6 tool tool-h">
                    <p>Shell</p>
                </div>
                <div class="col-6 tool">
                    <p>ZSH</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tools',
    }
</script>

<style scoped>
    #tools {
        padding-top: 2em;
        width: 100%;
        text-align: center;
    }
    
    h2 {
        margin-bottom: 0.5em;
    }
    
    .inner {
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        display: flex;
    }
    
    .tool {
        border: 1px solid var(--dark-border);
        color: var(--light-grey);
        padding: 12px;
    }
    
    .tool p {
        margin-top: auto;
        margin-bottom: auto;
        text-align: left;
    }
    
    .tool-h {
        font-weight: bold;
        color: var(--accent);
    }
    
    .tool-h p {
        text-align: center;
    }

    @media screen and (max-width: 750px) {
        .inner {
            width: 99%;
            padding: 5px;
        }
    }
</style>