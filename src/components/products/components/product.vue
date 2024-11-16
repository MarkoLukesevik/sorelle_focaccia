<script setup>
const props = defineProps(['product', 'shouldReverse']);
</script>

<template>
    <div class="product">
       <div class="product-image-wrapper">
            <img class="product-image" :src="props.product.image" />
       </div>
       <div class="product-name">{{ props.product.name }}</div>
       <div class="product-price">{{ props.product.price }} мкд</div>
    </div>

</template>

<style scoped>
.product {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 0.5rem;

    width: max-content;
}

.product-image-wrapper {
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

.product-image {
    height: 100%;
}

.product-name {
    color: #040205;
    font-size: 0.8rem;
    text-transform: uppercase;
}

.product-price {
    color: #040205;
    font-size: 0.9rem;
    font-weight: 600;
}

@media (min-width: 600px) {
    .product {
        column-gap: 1rem;
    }

    .product-image-wrapper {
        height: 75px;
    }
}

@media (min-width: 768px) {
    .product-image-wrapper {
        height: 100px;
    }

    .product-name {
        font-size: 1rem;
    }

    .product-price {
        font-size: 1rem;
    }
}

@media (min-width: 992px) {
    .product {
        width: unset;
    }
}
</style>