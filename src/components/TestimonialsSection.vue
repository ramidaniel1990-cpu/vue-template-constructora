<script setup lang="ts">
import { testimonials } from '@/data/config'
</script>

<template>
  <!-- Sección de testimonios con cards y comillas decorativas -->
  <section id="testimonios" class="py-20 lg:py-32 bg-[#F1F5F9]">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Encabezado -->
      <div class="text-center mb-16">
        <span class="inline-block text-[#F59E0B] font-['Inter'] font-medium text-xs tracking-[0.3em] uppercase mb-4">
          Testimonios
        </span>
        <h2
          class="font-['Montserrat'] font-bold text-[#1B3A6B] leading-tight"
          style="font-size: clamp(32px, 4vw, 48px)"
        >
          Lo que dicen nuestros clientes
        </h2>
        <div class="w-16 h-1 bg-[#F59E0B] mx-auto mt-6"></div>
      </div>

      <!-- Grid de testimonios -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="bg-white p-8 shadow-md hover:shadow-xl transition-shadow duration-300 relative"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Comillas decorativas de apertura -->
          <span
            class="absolute top-5 right-6 font-['Montserrat'] font-bold text-[#F59E0B] leading-none select-none"
            style="font-size: 80px; opacity: 0.18; line-height: 1;"
          >
            &ldquo;
          </span>

          <!-- Estrellas -->
          <div class="flex items-center gap-1 mb-5">
            <svg
              v-for="i in testimonial.rating"
              :key="i"
              class="w-4 h-4 text-[#F59E0B]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Comentario -->
          <p class="font-['Inter'] text-[#475569] text-sm leading-relaxed mb-6 relative z-10">
            "{{ testimonial.comment }}"
          </p>

          <!-- Avatar e info -->
          <div class="flex items-center gap-4 border-t border-[#E2E8F0] pt-5">
            <div
              class="w-12 h-12 rounded-full bg-[#1B3A6B] flex items-center justify-center flex-shrink-0"
            >
              <span class="font-['Montserrat'] font-bold text-white text-lg">
                {{ testimonial.initial }}
              </span>
            </div>
            <div>
              <p class="font-['Montserrat'] font-bold text-[#0A1628] text-sm">
                {{ testimonial.name }}
              </p>
              <p class="font-['Inter'] text-[#94A3B8] text-xs mt-0.5">
                {{ testimonial.project }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
