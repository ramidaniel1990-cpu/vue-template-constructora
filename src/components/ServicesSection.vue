<script setup lang="ts">
import { ref } from 'vue'
import { services } from '@/data/config'
import { useScrollReveal } from '@/composables/useScrollReveal'

const cardsRef = ref<HTMLElement[]>([])
useScrollReveal(cardsRef, { threshold: 0.1 })
</script>

<template>
  <!-- Sección de servicios con cards sin imagen -->
  <section id="servicios" class="py-20 lg:py-32 bg-[#F1F5F9]">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Encabezado de sección -->
      <div class="text-center mb-16">
        <span class="inline-block text-[#F59E0B] font-['Inter'] font-medium text-xs tracking-[0.3em] uppercase mb-4">
          Nuestros Servicios
        </span>
        <h2
          class="font-['Montserrat'] font-bold text-[#1B3A6B] leading-tight"
          style="font-size: clamp(32px, 4vw, 48px)"
        >
          Lo que construimos para ti
        </h2>
        <div class="w-16 h-1 bg-[#F59E0B] mx-auto mt-6"></div>
      </div>

      <!-- Grid de 6 servicios -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          :ref="(el) => { if (el) cardsRef[service.id - 1] = el as HTMLElement }"
          class="relative bg-white p-8 overflow-hidden group cursor-default
                 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          :style="{ transitionDelay: `${(service.id - 1) * 80}ms` }"
        >
          <!-- Número de fondo decorativo -->
          <span
            class="absolute top-4 right-6 font-['Montserrat'] font-bold text-7xl text-[#E2E8F0] select-none leading-none pointer-events-none"
          >
            {{ service.number }}
          </span>

          <!-- Ícono SVG en amarillo -->
          <div class="relative z-10 w-12 h-12 mb-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F59E0B"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-full h-full"
            >
              <path :d="service.icon" />
            </svg>
          </div>

          <!-- Título -->
          <h3 class="relative z-10 font-['Montserrat'] font-bold text-[#1B3A6B] text-lg mb-3">
            {{ service.title }}
          </h3>

          <!-- Descripción -->
          <p class="relative z-10 font-['Inter'] text-[#64748B] text-sm leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Línea inferior amarilla en hover -->
          <div
            class="absolute bottom-0 left-0 h-[3px] bg-[#F59E0B] w-0 group-hover:w-full transition-all duration-500"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
