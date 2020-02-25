<template>
    <div id="tools" class="section">
        <h2>What I Use</h2>
        <table>
            <tr>
                <th>IDE</th>
                <td>Jetbrains</td>
            </tr>
            <tr>
                <th>Text Editor</th>
                <td>Sublime Text</td>
            </tr>
            <tr>
                <th>OS</th>
                <td>OSX, GNU/Linux</td>
            </tr>
            <tr>
                <th>SCM</th>
                <td>Git & GitHub</td>
            </tr>
            <tr>
                <th>Shell</th>
                <td>ZSH</td>
            </tr>
        </table>
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
    
    table {
        width: 80%;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2em;
        margin-bottom: 2em;
    }
    
    th, td {
        border: 1px solid var(--dark-border);
        width: 50%;
        padding: 15px;
        font-size: 1.7em;
    }
    
    th {
        font-weight: bold;
        color: var(--accent);
    }
    
    td {
        color: var(--light-grey);
    }

    @media screen and (max-width: 575px) {
        table {
            width: 100%;
        }
    }
</style>