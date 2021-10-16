<template>
  <div
    class="
      relative
      w-5/6
      p-4
      overflow-hidden
      transition
      duration-500
      shadow-lg
      hover:translate-y-1 hover:shadow-xl
      sm:w-2/3
      md:w-64
      bg-blue-50
      dark:bg-bluegray-800
      rounded-2xl
    "
  >
    <picture class="absolute w-40 h-auto mb-4 -right-20 -bottom-8">
      <source type="image/webp" :srcset="image + '.webp'" />
      <source type="image/png" :srcset="image + '.png'" />
      <img :alt="title" :src="image + '.png'" />
    </picture>
    <div class="w-4/6">
      <h3 class="no-underline hover:underline">
        <NuxtLink
          class="
            mb-2
            text-lg
            font-medium
            lg:text-xl
            font-kyivsans
            text-bluegray-800
            dark:text-bluegray-100
          "
          :to="path"
          >{{ title }}</NuxtLink
        >
      </h3>
      <p class="mb-2">
        <NuxtLink
          class="
            text-xs
            font-kyivsans
            lg:text-base
            text-bluegray-400
            dark:text-bluegray-300
            line-clamp-4
          "
          :to="path"
        >
          {{ description }}
        </NuxtLink>
        <NuxtLink
          class="
            text-xs
            underline
            font-kyivsans
            lg:text-base
            text-bluegray-400
            dark:text-bluegray-300
          "
          :to="path"
        >
          Mehr lesen
        </NuxtLink>
      </p>
      <p class="text-xl font-medium text-lemon-500 font-kyivsans">
        € {{ price }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    description: String,
    title: String,
    price: String,
    image: String,
    path: String,
  },
}
</script>
