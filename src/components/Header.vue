<template>
    <header>
        <nav class="container">
            <a href="/">
                <img src="https://www.clipartmax.com/png/full/201-2010871_home-icon-png-home-house-icon-website-home-logo.png" alt="home" id="home">
            </a>

            <div class="side">
                    <div class="side-item"><a href="/blocks">Blocks</a></div>
                    <div class="side-item"><a href="/transactions">Transactions</a></div>
                    <div class="side-item"><a href="/wallets">Search wallet</a></div>                
            </div>


            

        </nav>
    </header>
</template>

<script>
    export default{
        name: 'Header'
    }
</script>

<style scoped>

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #home {
        width: 90px;
        height: 55px;
    }

    a:visited, a:link, a:active, a:hover, a {
        text-decoration: none;
        transition: 0.2s opacity;
        color: var(--color-text-light);
    }

    .side{
        display: flex;
        flex-direction: row;
    }
    .side-item{
        margin-right: 8px;
    }
</style>
