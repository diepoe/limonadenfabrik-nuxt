<template>
  <div>
    <Navbar />
    <div class="grid w-full">
      <main
        class="
          grid
          w-5/6
          max-w-full
          min-h-screen
          pb-5
          overflow-visible
          p-43
          md:w-3/4
          place-self-center
        "
      >
        <Nuxt />
      </main>
    </div>
    <Foot />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-blue-50 dark:bg-bluegray-900 dark:text-white',
    },
  },
}
</script>
