<template>
    <main id="error-layout" v-if="error.statusCode==404">
        <b class="tiny">404</b>
        <h1 class="short">THIS PAGE DOESN'T EXIST.</h1>
        <small class="long">The link you clicked on may be broken or no longer exist.</small>
    </main>
    <main id="error-layout" v-else>
        <b class="tiny">OOPS</b>
        <h1 class="short">AN ERROR OCCURED.</h1>
        <small class="long">Sorry, that one's on us...</small>
    </main>
</template>

<style scoped>
body{
    padding: 0px;
    margin: 0px;
    font-size: 16px;
}
main#error-layout {
    display: flex; position: relative;
    width: 100vw; height: 100vh; 
    flex-flow: column nowrap;
    color: white;
    background: rgb(1, 1, 40);
    justify-content: center; align-items: center;
}
#error-layout .tiny{
    margin: auto auto 3px auto; padding: 0px;
    font-size: 9em; font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#error-layout .short{
    margin: 3px auto 3px auto; padding: 0px;
    font-size: 3em; font-weight: bold; width: 100%; text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#error-layout .long{
    margin: 3px auto auto auto;
    font-size: 12px; width: 100%; text-align: center;
}
</style>

<script>
export default {
    props: ['error'],
    layout: 'error',
    data(){
        return {};
    },
    mounted(){
        // statusCode, path, message
        console.log(this.error);
    }
}
</script>