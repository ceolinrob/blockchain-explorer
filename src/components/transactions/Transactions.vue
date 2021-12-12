<template>
    <main>
        <div class="container">
            <div class="text-top">Latest ten transactions</div>

            <table class="table table-secondary table-striped col-md-12">
                <thead>
                    <tr scope="col">
                        <th>Type</th>
                        <th>Hash</th>
                        <th>Amount</th>
                        <th>Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="col" v-for="(transactions, index) in transactions" :key="index">
                        <td class="text-table">{{transactions.memo}}</td>
                        <td class="text-table">{{transactions.hash}}</td>
                        <td class="text-table">{{transactions.amount}}</td>
                        <td class="text-table">{{transactions.fee}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </main>
  
</template>

<script>
    import HttpController from '@/components/controller/HttpController.js'

    export default {
        name: 'Transactions',
        mounted() {
            HttpController.get('/transactions').then(response => {
                this.transactions = response.data;
            })
        },
        data(){
            return {
                transactions: []
            }
        }
    }
</script>

<style scoped>
    .text-top{
        color: var(--color-text-light);
        font-size: 22px;
    }

    .text-table{
        font-size: 12px;
    }

</style>