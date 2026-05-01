<script setup lang="ts">
import { siteConfig } from '@/data/config'
</script>

<template>
  <!-- Footer oscuro con 2 columnas -->
  <footer class="bg-[#0A1628] pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Dos columnas -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <!-- Columna 1: Logo + descripción + teléfono -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <img
              src="/src/assets/images/logo.png"
              alt="Constru Yamel"
              class="object-contain"
              style="height: 40px"
            />
            <span class="font-['Montserrat'] font-bold text-xl text-white tracking-widest"
              >CONSTRU</span
            >
            <span class="font-['Montserrat'] font-bold text-xl text-[#F59E0B] tracking-widest"
              >YAMEL</span
            >
          </div>
          <p class="font-['Inter'] text-[#94A3B8] text-sm leading-relaxed mb-5 max-w-sm">
            Constructora venezolana con más de 10 años de experiencia en proyectos residenciales y
            comerciales de alta calidad.
          </p>
          <a
            :href="`tel:${siteConfig.whatsapp.replace(/\s/g, '')}`"
            class="flex items-center gap-2 text-[#94A3B8] hover:text-[#F59E0B] transition-colors font-['Inter'] text-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {{ siteConfig.whatsapp }}
          </a>
        </div>

        <!-- Columna 2: Síguenos -->
        <div>
          <h4
            class="font-['Montserrat'] font-bold text-white text-sm tracking-[0.15em] uppercase mb-6"
          >
            Síguenos
          </h4>
          <div class="flex flex-col gap-3">
            <a
              :href="siteConfig.instagram"
              target="_blank"
              rel="noopener"
              class="font-['Inter'] text-[#94A3B8] text-sm hover:text-[#F59E0B] transition-colors duration-300"
            >
              @construyamel — Instagram
            </a>
            <a
              href="https://www.facebook.com/construyamel"
              target="_blank"
              rel="noopener"
              class="font-['Inter'] text-[#94A3B8] text-sm hover:text-[#F59E0B] transition-colors duration-300"
            >
              @construyamel — Facebook
            </a>
            <a
              :href="siteConfig.whatsappUrl"
              target="_blank"
              rel="noopener"
              class="font-['Inter'] text-[#94A3B8] text-sm hover:text-[#F59E0B] transition-colors duration-300"
            >
              +58 424 910 8341 — WhatsApp
            </a>
          </div>

          <!-- Email -->
          <div class="mt-6">
            <a
              :href="`mailto:${siteConfig.email}`"
              class="font-['Inter'] text-[#94A3B8] text-sm hover:text-[#F59E0B] transition-colors duration-300"
            >
              {{ siteConfig.email }}
            </a>
          </div>
        </div>
      </div>

      <!-- Línea divisora -->
      <div class="border-t border-[#1B3A6B] pt-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="font-['Inter'] text-[#64748B] text-sm text-center md:text-left">
            &copy; 2025 Constru Yamel — Venezuela
          </p>
          <p class="font-['Inter'] text-[#64748B] text-sm text-center md:text-right">
            Ingeniería · Construcción · Arquitectura
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
