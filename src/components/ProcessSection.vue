<script setup lang="ts">
import { ref } from 'vue'
import { processSteps } from '@/data/config'
import { useScrollReveal } from '@/composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef)
</script>

<template>
  <!-- Sección de proceso con 4 pasos conectados -->
  <section id="proceso" class="py-20 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-12" ref="sectionRef">

      <!-- Encabezado -->
      <div class="text-center mb-16 lg:mb-20">
        <span class="inline-block text-[#F59E0B] font-['Inter'] font-medium text-xs tracking-[0.3em] uppercase mb-4">
          Cómo Trabajamos
        </span>
        <h2
          class="font-['Montserrat'] font-bold text-[#0A1628] leading-tight"
          style="font-size: clamp(32px, 4vw, 48px)"
        >
          Nuestro Proceso
        </h2>
        <div class="w-16 h-1 bg-[#F59E0B] mx-auto mt-6"></div>
      </div>

      <!-- Pasos — desktop horizontal con línea conectora / mobile vertical -->
      <div class="relative">

        <!-- Línea conectora horizontal — top-[30px] = centro del círculo de 60px -->
        <div class="hidden lg:block absolute top-[30px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-[2px] bg-[#E2E8F0] z-0"></div>
        <!-- Línea de progreso amarilla decorativa -->
        <div class="hidden lg:block absolute top-[30px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-[2px] bg-[#F59E0B]/30 z-0"></div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
          <div
            v-for="(step, index) in processSteps"
            :key="step.id"
            class="flex flex-col items-center text-center"
            :style="{ transitionDelay: `${index * 120}ms` }"
          >
            <!-- Número circular amarillo -->
            <div
              class="w-[60px] h-[60px] rounded-full bg-[#F59E0B] flex items-center justify-center mb-5 shadow-lg flex-shrink-0"
            >
              <span class="font-['Montserrat'] font-bold text-black text-sm">
                {{ step.number }}
              </span>
            </div>

            <!-- Ícono -->
            <div class="w-10 h-10 mb-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1B3A6B"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-full h-full"
              >
                <path :d="step.icon" />
              </svg>
            </div>

            <!-- Título -->
            <h3 class="font-['Montserrat'] font-bold text-[#0A1628] text-base mb-3">
              {{ step.title }}
            </h3>

            <!-- Descripción -->
            <p class="font-['Inter'] text-[#64748B] text-sm leading-relaxed max-w-[220px]">
              {{ step.description }}
            </p>

            <!-- Conector vertical en mobile -->
            <div v-if="index < processSteps.length - 1" class="lg:hidden w-[2px] h-10 bg-[#E2E8F0] mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
