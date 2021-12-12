<template>
    <main>
        <div class="container">
            <div class="text-top background-block">
                <p>Transaction <b>{{transaction.hash}}</b> on height {{this.$route.params.height}}</p>
                <p>Type of transaction: {{transaction.memo}}</p>
                <p>Amount traded: {{transaction.amount}}</p>
                <p>Fee: {{transaction.fee}}</p>
                <p class="break-word">Signature: {{transaction.signature}}</p>
            </div>


        </div>
    </main>
</template>

<script>
    import HttpController from '@/components/controller/HttpController.js'

    export default {
        name: 'TransactionHash',
        mounted() {
            HttpController.get('/blocks/' + this.$route.params.height + '/transactions/' + this.$route.params.hash).then(response => {
                this.transaction = response.data;
            })
        },
        data(){
            return {
                transaction: []
            }
        }
    }
</script>

<style scoped>
    .text-top{
        color: var(--color-text-dark);
        font-size: 22px;
    }

    .text-table{
        font-size: 12px;
    }

    .background-block{
        display: inline-block;
        background-color: var(--color-background);
        width: 85%;
    }
    .background-block p{
        margin-left: 20px;
    }
    .break-word{
        word-wrap: break-word;
    }
</style>