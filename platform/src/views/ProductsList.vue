<template>
  <div class="ProductsList">
    <TheHeader />
    <MainMenu />
    <h1>Your products list</h1>
    <div v-if="!isLoading && products">
      <ProductItem
        v-for="product in products"
        :key="product.sku"
        :product="product"
      />
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useProductsStore } from "@/stores/products";
import { usePendingActions } from "@/stores/pendingActions";
import TheHeader from "@/components/platform/TheHeader.vue";
import MainMenu from "@/components/platform/MainMenu.vue";
import ProductItem from "@/components/ProductItem.vue";

export default defineComponent({
  components: {
    TheHeader,
    MainMenu,
    ProductItem,
  },

  setup() {
    const productsStore = useProductsStore();
    const pendingActionsStore = usePendingActions();

    const products = computed(() => productsStore.getList);

    if (!products.value) {
      productsStore.setProducts();
    }

    const isLoading = computed(() =>
      pendingActionsStore.getList.includes("setProducts")
    );

    return {
      products,
      isLoading,
    };
  },
});
</script>
