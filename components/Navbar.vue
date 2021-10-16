<template>
  <nav class="grid grid-cols-3 p-3 mb-2 md:p-4 xl:p-6 xl:mb-8 lg:mb-6">
    <NuxtLink to="/" class="col-span-2 lg:col-span-1">
      <header class="flex flex-row items-center">
        <picture class="w-12 h-12 xl:w-14 xl:h-14">
          <source type="image/webp" srcset="/icon.webp" />
          <source type="image/png" srcset="/icon.png" />

          <img src="/icon.png" width="720" height="720" alt="Limonade Icon" />
        </picture>
        <span
          class="
            text-xl
            font-cyrene
            text-bluegray-900
            dark:text-bluegray-200
            md:text-2xl
            lg:text-3xl
            xl:text-4xl
          "
        >
          Fluffy Limonade
        </span>
      </header>
    </NuxtLink>
    <!--Desktop Nav-->
    <ul
      class="
        hidden
        grid-cols-4
        col-span-2
        lg:grid
        place-content-center place-items-end
      "
    >
      <li
        class="
          grid
          p-2
          rounded-md
          max-w-max
          place-items-center
          text-bluegray-600
          dark:text-bluegray-300
          text-md
          lg:text-lg
          hover:bg-blue-100
          dark:hover:bg-bluegray-800 dark:hover:text-bluegray-200
          2xl:text-xl
          font-kyivsans
        "
        v-for="item in items"
        :key="(item.name, item.url)"
      >
        <NuxtLink v-bind:to="item.url">{{ item.name }}</NuxtLink>
      </li>
    </ul>
    <!--Mobile nav-->
    <div class="grid col-span-1 mr-4 lg:hidden place-items-end">
      <button
        class="p-2 rounded hover:bg-blue-100 dark:hover:bg-bluegray-800"
        aria-label="show menu"
        @click="toggleMenu(true)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current text-bluegray-800 dark:text-bluegray-200"
          width="24"
          height="24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div :class="{ hidden: !showMenu }">
      <div
        class="
          absolute
          inset-x-0
          top-0
          z-40
          p-2
          transition
          origin-top-right
          transform
          lg:hidden
        "
      >
        <div
          class="
            overflow-hidden
            rounded-lg
            shadow-md
            bg-blue-50
            dark:bg-bluegray-800
          "
        >
          <div class="px-3 pt-4">
            <div class="-mr-2">
              <button
                type="button"
                @click="toggleMenu(false)"
                aria-label="Toggle mobile menu"
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  text-red-500
                  rounded-md
                  dark:hover:bg-bluegray-700
                  hover:text-red-600 hover:bg-blue-100
                  focus:outline-none
                "
              >
                <span class="sr-only">Close main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 md:w-7 md:h-7"
                  width="24"
                  height="24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M0 0h24v24H0z" stroke="none" />
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-4 pt-2 pb-3 space-y-2 md:px-8" role="none">
              <NuxtLink
                rel="prefetch"
                v-bind:to="item.url"
                class="
                  block
                  px-3
                  py-2
                  text-base
                  font-medium
                  leading-relaxed
                  rounded-md
                  font-kyivsans
                  text-bluegray-700
                  dark:text-bluegray-300
                  md:text-lg
                  hover:text-bluegray-900 hover:bg-blue-300
                "
                role="menuitem"
                v-for="item in items"
                :key="(item.name, item.url)"
                >{{ item.name }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { url: '/about', name: 'Das Unternehmen' },
        { url: '/shop', name: 'Shop' },
        { url: '/rezepte', name: 'Rezepte' },
        { url: '/partner', name: 'Partner' },
      ],
      showMenu: false,
    }
  },
  methods: {
    toggleMenu(state) {
      this.showMenu = state
    },
  },
}
</script>
