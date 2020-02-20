<template>
    <footer>
        <p>&copy; Edvard Busck-Nielsen {{ new Date().getFullYear() }}</p>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        computed: {
            copyright: function () {
                return new Date().getFullYear();
            }
        }
    }
</script>

<style scoped>
    footer {
        width: 100%;
        height: 50px;
        background-color: var(--dark-grey);
        text-align: center;
        padding: 2px;
        display: flex;
        justify-content: center;
    }
    
    p {
        margin-top: auto;
        margin-bottom: auto;
        color: var(--light-grey);
        font-size: 1em !important;
    }
</style>