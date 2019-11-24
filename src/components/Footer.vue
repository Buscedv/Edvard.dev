<template>
    <footer>
        <p>&copy; Edvard Busck-Nielsen {{ new Date().getFullYear() }}</p>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        copyright: '',
        created: function () {
            this.copyright = '2019';
        },
    }
</script>

<style scoped>
    footer {
        width: 100%;
        height: 50px;
        background-color: var(--darkGray);
        text-align: center;
        padding: 2px;
        display: flex;
        justify-content: center;
    }
    
    p {
        margin-top: auto;
        margin-bottom: auto;
        color: var(--lighter);
        font-size: 1em !important;
    }
</style>