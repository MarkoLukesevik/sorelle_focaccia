<script setup>
import MenuItem from './components/MenuItem.vue';
import {
    sandwichesMenuItems,
    supplementsMenuItems,
    desertsMenuItems,
    alcoholicMenuItems,
    softDrinksMenuItems,
    wineMenuItems,
    beerMenuItems,
    hotDrinksMenuItems,
    waterMenuItems
} from '@/utils/menuItems';

</script>

<template>
    <div ref="menuItems" class="menu">
        <div ref="sandwiches" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("focacciaSandwiches") }}</h3>
            <menu-item v-for="sandwich in sandwichesMenuItems" :menuItem="sandwich"/>
        </div>

        <div ref="supplements" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("sauces") }}</h3>
            <menu-item v-for="supplement in supplementsMenuItems" :menuItem="supplement"/>
        </div>

        <div ref="deserts" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("deserts") }}</h3>
            <menu-item v-for="desert in desertsMenuItems" :menuItem="desert"/>
        </div>

        <div ref="allergens" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("allergens") }}</h3>
            <div class="allergens">
                <div class="allergen">
                    <div class="allergen-image-wrapper">
                        <img src="/assets/images/allergens/milk.png" />
                    </div>
                    <p>{{ $t("milk") }}</p>
                </div>

                <div class="allergen">
                    <div class="allergen-image-wrapper">
                        <img src="/assets/images/allergens/gluten.png" />
                    </div>
                    <p>{{ $t("gluten") }}</p>
                </div>

                <div class="allergen">
                    <div class="allergen-image-wrapper">
                        <img src="/assets/images/allergens/egg.png" />
                    </div>
                    <p>{{ $t("eggs") }}</p>
                </div>

                <div class="allergen">
                    <div class="allergen-image-wrapper">
                        <img src="/assets/images/allergens/peanut.png" />
                    </div>
                    <p>{{ $t("nuts") }}</p>
                </div>
            </div>
        </div>

        <div ref="alcoholic" class="menu-item-group">
            <h3 class="menu-item-group-title">А{{ $t("alcoholicBeverages") }}</h3>
            <menu-item v-for="drink in alcoholicMenuItems" :menuItem="drink"/>
        </div>

        <div ref="nonAlcoholic" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("softDrinks") }}</h3>
            <menu-item v-for="drink in softDrinksMenuItems" :menuItem="drink"/>
        </div>

        <div ref="wine" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("wine") }}</h3>
            <menu-item v-for="wine in wineMenuItems" :menuItem="wine"/>
        </div>

        <div ref="beer" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("beer") }}</h3>
            <menu-item v-for="beer in beerMenuItems" :menuItem="beer"/>
        </div>

        <div ref="hotDrinks" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("hotDrinks") }}</h3>
            <menu-item v-for="drink) in hotDrinksMenuItems" :menuItem="drink"/>
        </div>

        <div ref="water" class="menu-item-group">
            <h3 class="menu-item-group-title">{{ $t("water") }}</h3>
            <menu-item v-for="water in waterMenuItems" :menuItem="water"/>
        </div>
    </div>
</template>

<style scoped>
.menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 70%;
    align-items: center;
    column-gap: 1rem;
    row-gap: 2rem;

    overflow: auto;
        
    padding: 2rem 0.8rem;
}

.menu-item-group {
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    row-gap: 1rem;

    width: 100%;
}

::-webkit-scrollbar {
     width: 3px;
     border-radius: 0.6rem;
}

::-webkit-scrollbar-track {
    background: #f9e8c4;
}

::-webkit-scrollbar-thumb {
     background: #83837b;
     border-radius: 0.6rem;
}

.menu-item-group-title {
    color: #c7473c;

    font-size: 1.1rem;
    font-weight: 600;

    text-transform: uppercase;
}

.allergens {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    row-gap: 1rem;
}

.allergen {
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
    align-items: center;
    column-gap: 0.5rem;
}

.allergen > p {
    color: #5b6b40;
    font-size: 1rem;
    font-weight: 500;
}

.allergen-image-wrapper {
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1/1;
    background-color: #83837b0f;
    border-radius: 50%;
    
    padding: 0.8rem;
    height: 60px;
}

.allergen-image-wrapper > img {
    height: 100%;
}

@media (min-width: 600px) {
    .menu {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-around;

        padding: 2rem;
    }

    .menu-item-group {
        flex: 1 1 70%;

        width: unset;
    }

    .menu-item-group-title {
        font-size: 1.2rem;
    }

    .allergen-image-wrapper {
        height: 75px;
    }
}

@media (min-width: 768px) {
    .menu-item-group-title {
        font-size: 1.3rem;
    }

    .allergen-image-wrapper {
        height: 100px;
    }

    .allergen-image-wrapper > img {
    height: 70%;
}
}

@media (min-width: 992px) {
    .menu-item-group {
        flex: 0 1 calc(50% - 1rem);
        align-items: flex-start;
    }
}
</style>