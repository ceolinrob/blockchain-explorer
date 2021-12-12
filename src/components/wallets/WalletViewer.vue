<template>
    <main>
        <div v-if="wallet != null" class="container text-top background-block">
            <p>Displaying wallet on address: <b>{{wallet.address}}</b></p>
            <p>Wallet currently has a balance of <b>{{wallet.balance}}</b></p>
            <p>Nonce number: {{wallet.nonce}}</p>
        </div>
        <div v-if="wallet == null" class="container text-top background-block">
            <p>There is no wallet with address <b>{{path}}</b></p>
        </div>
    </main>
</template>

<script>
    import HttpController from '@/components/controller/HttpController.js'

    export default {
        name: 'WalletViewer',
        mounted() {
            HttpController.get('/wallets/' + this.$route.params.address).then(response => {
                this.wallet = response.data;
            }).catch(error => {
                this.wallet = null;
            });
        },
        data() {
            return {
                wallet: [],
                path: this.$route.params.address
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

</style>