import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Transactions from '@/components/transactions/Transactions.vue';
import Blocks from '@/components/blocks/Blocks.vue';
import BlockViewer from '@/components/blocks/BlockViewer.vue';
import BlockSearcher from '@/components/blocks/BlockSearcher.vue';
import BlockTransactions from '@/components/transactions/BlockTransactions.vue';
import TransactionHash from '@/components/transactions/TransactionHash.vue';
import Wallets from '@/components/wallets/Wallets.vue';
import WalletViewer from '@/components/wallets/WalletViewer.vue';



const routes = [
    {
        path:'/',
        redirect:'/blocks'
    },
    {
        path:'/transactions',
        component: Transactions
    },
    {
        path:'/blocks',
        component: Blocks
    },
    {
        path:'/blocks/:height',
        component: BlockViewer
    },
    {
        path: '/blocks/:height/transactions',
        component: BlockTransactions
    },
    {
        path: '/blocks/:height/transactions/:hash',
        component: TransactionHash
    },
    {
        path: '/block-search/',
        component: BlockSearcher
    },
    {
        path: '/wallets',
        component: Wallets
    },
    {
        path: '/wallets/:address',
        component: WalletViewer
    }
];

const router = new VueRouter({
    routes, 
    mode:'history'
});

export default router;