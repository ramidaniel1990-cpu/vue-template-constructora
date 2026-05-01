<script setup lang="ts">
import { contactCards, siteConfig } from '@/data/config'
</script>

<template>
  <!-- Sección de contacto con cards + botón WhatsApp + Google Maps -->
  <section id="contacto" class="py-20 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Encabezado -->
      <div class="text-center mb-14">
        <span
          class="inline-block text-[#F59E0B] font-['Inter'] font-medium text-xs tracking-[0.3em] uppercase mb-4"
        >
          Contacto
        </span>
        <h2
          class="font-['Montserrat'] font-bold text-[#0A1628] leading-tight mb-4"
          style="font-size: clamp(32px, 4vw, 48px)"
        >
          Hablemos de tu proyecto
        </h2>
        <p class="font-['Inter'] text-[#64748B] text-base max-w-lg mx-auto">
          Estamos listos para transformar tu idea en una realidad construida con calidad y
          precisión.
        </p>
        <div class="w-16 h-1 bg-[#F59E0B] mx-auto mt-6"></div>
      </div>

      <!-- Cards de contacto en 3 columnas -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        <a
          v-for="card in contactCards"
          :key="card.title"
          :href="card.href"
          target="_blank"
          rel="noopener"
          class="flex flex-col items-center text-center p-8 border border-[#E2E8F0] hover:border-[#F59E0B] hover:shadow-lg transition-all duration-300 group"
        >
          <!-- Ícono -->
          <div
            class="w-14 h-14 bg-[#F1F5F9] group-hover:bg-[#FEF3C7] rounded-full flex items-center justify-center mb-5 transition-colors duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B3A6B"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6 group-hover:stroke-[#F59E0B] transition-colors duration-300"
            >
              <path :d="card.icon" />
            </svg>
          </div>

          <!-- Título -->
          <p
            class="font-['Inter'] font-medium text-[#94A3B8] text-xs tracking-[0.15em] uppercase mb-2"
          >
            {{ card.title }}
          </p>

          <!-- Valor -->
          <p class="font-['Montserrat'] font-bold text-[#0A1628] text-base">
            {{ card.value }}
          </p>
        </a>
      </div>

      <!-- Google Maps embed -->
      <div class="overflow-hidden shadow-lg" style="border-radius: 8px; height: 400px">
        <iframe
          :src="siteConfig.mapEmbedUrl"
          width="100%"
          height="100%"
          style="border: 0"
          :allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Ubicación Constru Yamel — Venezuela"
        ></iframe>
      </div>
    </div>
  </section>
</template>
