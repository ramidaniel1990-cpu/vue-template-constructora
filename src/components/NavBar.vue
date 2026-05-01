<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '@/data/config'

// Estado del scroll para cambiar fondo del navbar
const scrolled = ref(false)
// Estado del menú móvil
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

// Scroll suave hacia la sección
function scrollTo(href: string) {
  closeMenu()
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Navbar fijo con transición de fondo al hacer scroll -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-[#0A1628] shadow-2xl' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-20">

        <!-- Logo -->
        <a href="#inicio" @click.prevent="scrollTo('#inicio')" class="flex items-center gap-3 flex-shrink-0">
          <img src="/src/assets/images/logo.png" alt="Constru Yamel" class="object-contain" style="height: 45px;" />
          <span class="font-['Montserrat'] font-bold text-2xl text-white tracking-widest">CONSTRU</span>
          <span class="font-['Montserrat'] font-bold text-2xl text-[#F59E0B] tracking-widest">YAMEL</span>
        </a>

        <!-- Links de navegación — desktop -->
        <ul class="hidden lg:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
              class="text-white text-sm font-['Inter'] font-medium tracking-[0.15em] hover:text-[#F59E0B] transition-colors duration-300 cursor-pointer"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Botón hamburguesa — mobile -->
        <button
          class="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          @click="toggleMenu"
          aria-label="Abrir menú"
        >
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300"
            :class="menuOpen ? 'rotate-45 translate-y-[7px]' : ''"
          ></span>
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300"
            :class="menuOpen ? 'opacity-0' : ''"
          ></span>
          <span
            class="block w-6 h-0.5 bg-white transition-all duration-300"
            :class="menuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
          ></span>
        </button>
      </div>
    </div>

    <!-- Drawer móvil -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="menuOpen" class="lg:hidden bg-[#0A1628] border-t border-[#1B3A6B]">
        <ul class="px-6 py-6 flex flex-col gap-4">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
              class="block text-white text-base font-['Inter'] font-medium tracking-[0.12em] hover:text-[#F59E0B] transition-colors duration-300 py-2 border-b border-[#1B3A6B]"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
