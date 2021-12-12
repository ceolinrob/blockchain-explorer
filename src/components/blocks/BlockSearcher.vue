<template>
    <main>
        <div class="container text-top background-block">
            <label for="blockPicker" class="form-label">Input block height
                <input type="text" id="blockPicker" class="form-control" v-model="height">
                <button v-on:click="findBlock(height)" class="btn btn-outline-secondary" type="submit">Find block</button>
            </label>
        </div>
    </main>
</template>

<script>

    export default {
        name: 'BlockSearcher',
        data() {
            return {
                path: null
            }
        },
        methods: {
            findBlock(height){
                window.location.href = "/blocks/" + height;
            }
        }
    }
</script>

<style scoped>
    .text-top{
        color: var(--color-text-dark);
        font-size: 22px;
    }
    .background-block{
        display: inline-block;
        background-color: var(--color-background);
        width: 85%;
    }
    .background-block p{
        margin-left: 20px;
    }
    .form-control{
        margin-bottom: 10px;
    }
    .btn{
        margin-bottom: 10px;
    }
    .form-label{
        width: 85%;
    }

</style>
