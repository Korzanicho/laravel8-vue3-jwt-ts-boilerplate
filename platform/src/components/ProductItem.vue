<template>
  <div class="ProductItem">
    <h2 class="title">{{ product.name }}</h2>
    <span>Price: {{ product.price }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        name: "Product",
        price: 0,
      }),
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="sass">
.ProductItem
  margin-top: 20px
  width: 300px
  max-width: 100%
  border: 1px solid #000
  border-radius: 20px
  padding: 20px
  display: flex
  flex-direction: column
  justify-content: center

  .title
    font-size: 20px
    font-weight: bold
    text-align: center
</style>
