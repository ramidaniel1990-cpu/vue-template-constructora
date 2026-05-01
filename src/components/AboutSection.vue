<script setup lang="ts">
import { companyValues, siteConfig } from '@/data/config'
</script>

<template>
  <!-- Sección sobre nosotros: layout dos columnas -->
  <section id="nosotros" class="py-20 lg:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Columna izquierda: contenido de texto -->
        <div>
          <!-- Badge -->
          <span class="inline-block text-[#F59E0B] font-['Inter'] font-medium text-xs tracking-[0.3em] uppercase mb-4">
            Sobre Nosotros
          </span>

          <!-- Título -->
          <h2
            class="font-['Montserrat'] font-bold text-[#0A1628] leading-tight mb-6"
            style="font-size: clamp(28px, 3.5vw, 44px)"
          >
            Más de 10 años construyendo el futuro de Venezuela
          </h2>

          <!-- Párrafo descriptivo -->
          <p class="font-['Inter'] text-[#475569] text-base leading-relaxed mb-8">
            Constru Yamel nació con la misión de transformar el sector de la construcción venezolana,
            aportando estándares internacionales de calidad, honestidad y cumplimiento. Hemos dejado
            nuestra huella en más de 50 proyectos residenciales y comerciales a lo largo del país,
            siempre con el mismo compromiso: construir bien, a tiempo y dentro del presupuesto pactado.
          </p>

          <!-- Valores en grid 2x2 -->
          <div class="grid grid-cols-2 gap-5 mb-10">
            <div
              v-for="value in companyValues"
              :key="value.title"
              class="flex items-start gap-3"
            >
              <!-- Ícono con fondo amarillo suave -->
              <div class="w-10 h-10 bg-[#FEF3C7] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F59E0B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-5 h-5"
                >
                  <path :d="value.icon" />
                </svg>
              </div>
              <div>
                <h4 class="font-['Montserrat'] font-bold text-[#0A1628] text-sm mb-1">
                  {{ value.title }}
                </h4>
                <p class="font-['Inter'] text-[#64748B] text-xs leading-relaxed">
                  {{ value.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Botón CTA outline -->
          <a
            :href="siteConfig.whatsappUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 border-2 border-[#1B3A6B] text-[#1B3A6B] font-['Montserrat'] font-bold text-sm tracking-wider px-8 py-4 hover:bg-[#1B3A6B] hover:text-white transition-all duration-300"
          >
            Conocer más
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <!-- Columna derecha: imagen con decoración -->
        <div class="relative">
          <!-- Imagen principal -->
          <div
            class="overflow-hidden shadow-2xl"
            style="border-radius: 8px;"
          >
            <img
              src="/images/PROYECT2.png"
              alt="Equipo Constru Yamel en obra"
              class="w-full h-full object-cover"
              style="max-height: 500px;"
            />
          </div>

          <!-- Badge flotante superior derecho -->
          <div
            class="absolute -top-5 -right-5 lg:top-8 lg:-right-8 bg-[#F59E0B] text-black p-5 shadow-xl"
            style="border-radius: 2px;"
          >
            <p class="font-['Montserrat'] font-extrabold text-3xl leading-none">+50</p>
            <p class="font-['Inter'] font-medium text-xs mt-1 leading-tight">Proyectos<br>realizados</p>
          </div>

          <!-- Elemento decorativo: línea amarilla en esquina inferior izquierda -->
          <div class="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-[#F59E0B]"></div>
        </div>
      </div>
    </div>
  </section>
</template>
