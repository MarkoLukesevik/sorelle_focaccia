<script setup>

</script>

<template>
    <div class="info">
        <div class="info-border"></div>

        <div class="info-content">
            <div class="info-content-wrapper">
                <img class="info-content-logo" src="/assets/images/sollere.png" />
                <p>Животот е комбинација од магија и фокача.</p>
            </div>

            <div class="info-content-wrapper">
                <div class="info-content__work-time">
                    <p>Понеделник-Петок</p>
                    <span>08:30-16:30</span>
                </div>
                <div class="info-content__contact">
                    <p>Контакт/тел.</p>
                    <a href="tel:+38977222758">077 222 758</a>
                </div>
                <div class="info-content__icons">
                    <a href="https://maps.app.goo.gl/2C32+79J?fbclid=PAZXh0bgNhZW0CMTEAAaa6yJlHaNfBpm_HGxoD9AZzoK_X4Yx0hTed54S7PR26iFYTtzg3S1ivNJ4_aem_HyapnhWtQzKrVOO81pUDiw" target="_blank">
                        <img class="info-img" src="/assets/images/location.png" />
                    </a>
                    <a href="https://www.instagram.com/sorelle_focaccia/" target="_blank">
                        <img class="info-img" src="/assets/images/instagram.png" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .info {
        position: relative;

        display: flex;
        flex-direction: column;
        flex: 0 1 auto;

        height: 20vh;
        height: 20dvh;
    }

    .info-border {
        position: absolute;
        top: -20px;

        width: 100%;
        height: 20px;
        background-image:  url(/assets/images/border.png);
        background-repeat: repeat
    }

    .info-content {
        display: flex;
        flex-direction: row;
        flex: 1 1 auto;
        justify-content: space-between;
        padding: 1rem;
    }

    .info-content-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
    }

    .info-content-logo {
        width: 70px;
    }

    .info-content__work-time {
        display: flex;
        flex-direction: column;
        flex: 0 1 auto;
        row-gap: 0.1rem;
    }

    .info-content__work-time > h2 {
        color: #be5f54;
        font-size: 1.4rem;
    }

    .info-content__work-time > p {
        color: #626b4e;
        font-size: 1.1rem;
    }

    .info-content__work-time > span {
        color: #040205;
        font-size: 1rem;
    }

    .info-content__contact > p {
        color: #626b4e;
        font-size: 1.1rem;
    }

    .info-content__icons {
        display: flex;
        flex-direction: row;
        flex: 0 1 auto;
        column-gap: 0.3rem;
    }

    .info-img {
        width: 25px;
    }
</style>