<script setup>

</script>

<template>
    <div class="info">
        <div class="info-border"></div>

        <div class="info-content">
            <div class="info-logo-wrapper">
                <img class="info-content-logo" src="/assets/images/logo-with-text.png" alt="" />
            </div>

            <div class="info-content-wrapper">
                <div class="info-content__work-time">
                    <p>{{ $t('mondayFriday') }}</p>
                    <span>08:30-16:30</span>
                </div>
                <div class="info-content__contact">
                    <p>{{ $t('contactTel') }}</p>
                    <a href="tel:+38977222755">077 222 755</a>
                </div>
                <div class="info-content__icons">
                    <a href="https://www.google.com/maps/place/Sorelle+Focaccia/@42.0032791,21.4009124,17z/data=!3m1!4b1!4m6!3m5!1s0x135415007d1544eb:0xf5322c688474e84!8m2!3d42.0032791!4d21.4009124!16s%2Fg%2F11y8vyy8tm?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <img class="info-img" src="/assets/images/location.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/sorelle_focaccia/" target="_blank">
                        <img class="info-img" src="/assets/images/instagram.png" alt="" />
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
    flex-direction: column;
    flex: 1 1 auto;
    row-gap: 0.5rem;

    padding: 0.6rem;
}

.info-logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.3rem;

    width: 100%;
}

.info-content-logo {
    width: 50%;
}

.info-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.3rem;
}

.info-content__work-time {
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    align-items: center;
    row-gap: 0.1rem;
}

.info-content__work-time > p {
    color: #5b6b40;
    font-size: 1rem;
}

.info-content__work-time > span {
    color: #040205;
    font-size: 0.9rem;
}

.info-content__contact {
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    align-items: center;
    row-gap: 0.1rem;
}

.info-content__contact > p {
    color: #5b6b40;
    font-size: 1rem;
}

.info-content__contact > a {
    color: #040205;
    font-size: 0.9rem;
    text-decoration: none;
}

.info-content__icons {
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
    column-gap: 0.8rem;

    margin-top: 0.3rem;
}

.info-img {
    width: 30px;
}

@media (min-width: 600px) {
    .info-content {
        flex-direction: row;
        justify-content: space-between;
        row-gap: 0;
        padding: 0.6rem 0.8rem;
    }

    .info-logo-wrapper {
        width: 50%;
        align-items: flex-start;
    }

    .info-content-logo {
        width: 30%;
    }

    .info-content-wrapper {
        align-items: flex-start;
        row-gap: 0;
    }

    .info-content__work-time {
        align-items: flex-start;
    }

    .info-content__contact {
        align-items: flex-start;
    }

    .info-content__icons {
        column-gap: 0.3rem;
        margin-top: 0.2rem;
    }

    .info-img {
        width: 25px;
    }
}
</style>