<script setup>
const props = defineProps(['product', 'shouldReverse']);

const productImage = (image) => {
    return image ? `assets/images/${image}.png` : '';
}

</script>

<template>
    <div class="product">
       <div class="product-image-wrapper">
            <img class="product-image" :src="productImage(props.product.image)" />
       </div>
       <div class="product-name">
            <p>{{ props.product.name }}</p>
            <span v-if="props.product.description">{{ props.product.description }}</span>
       </div>
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

    width: 100%;
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
    flex: 0 1 60%;
}

.product-name > p {
    color: #626b4e;
    font-size: 1rem;
    text-transform: uppercase;
}

.product-name > span {
    color: #040205;
    font-size: 0.7rem;
    word-break: normal;
}

.product-price {
    color: #040205;
    font-size: 1rem;
    font-weight: 600;
}

@media (min-width: 600px) {
    .product {
        column-gap: 1rem;
    }

    .product-image-wrapper {
        height: 75px;
    }

    .product-name {
        flex: 0 1 45%;
    }
}

@media (min-width: 768px) {
    .product-image-wrapper {
        height: 100px;
    }
}
</style>