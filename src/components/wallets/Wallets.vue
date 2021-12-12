<template>
    <main>
        <div class="container text-top background-block">
            <label for="walletPicker" class="form-label">Input wallet address
                <input type="text" id="walletPicker" class="form-control" v-model="path">
                <button v-on:click="findWallet(path)" class="btn btn-outline-secondary" type="submit">Find wallet</button>
            </label>
        </div>
    </main>
</template>

<script>
    import HttpController from '@/components/controller/HttpController.js'

    export default {
        name: 'Wallets',
        mounted() {
            HttpController.get('/wallets/').then(response => {
                this.wallets = response.data;
            })
        },
        data() {
            return {
                wallets: [],
                path: null
            }
        },
        methods: {
            findWallet(path){
                window.location.href = "/wallets/" + path;
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