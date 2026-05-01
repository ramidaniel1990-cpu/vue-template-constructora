<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SocialButtons from '@/components/SocialButtons.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <ProcessSection />
    <TestimonialsSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
    <SocialButtons />
  </div>
</template>
