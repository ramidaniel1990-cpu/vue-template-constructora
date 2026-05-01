// Composable para animaciones fadeIn al hacer scroll usando IntersectionObserver
import { onMounted, onUnmounted, type Ref } from 'vue'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal(
  elements: Ref<HTMLElement | null> | Ref<HTMLElement[]>,
  options: ScrollRevealOptions = {},
) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            if (once) observer?.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('reveal-visible')
          }
        })
      },
      { threshold, rootMargin },
    )

    const el = elements.value
    if (!el) return

    if (Array.isArray(el)) {
      el.forEach((item) => {
        if (item) {
          item.classList.add('reveal-hidden')
          observer!.observe(item)
        }
      })
    } else {
      ;(el as HTMLElement).classList.add('reveal-hidden')
      observer!.observe(el as HTMLElement)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
