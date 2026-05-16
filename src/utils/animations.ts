import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animate counter from 0 to target value
 */
export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration: number = 2,
  suffix: string = ''
) => {
  const obj = { value: 0 }
  gsap.to(obj, {
    value: target,
    duration,
    onUpdate: () => {
      element.textContent = Math.round(obj.value) + suffix
    },
    ease: 'power2.out',
  })
}

/**
 * Animate elements on scroll with fade and slide
 */
export const animateOnScroll = (
  selector: string,
  options: {
    duration?: number
    delay?: number
    stagger?: number
    yDistance?: number
  } = {}
) => {
  const {
    duration = 0.8,
    delay = 0,
    stagger = 0.2,
    yDistance = 30,
  } = options

  const elements = document.querySelectorAll(selector)
  elements.forEach((el, idx) => {
    ScrollTrigger.create({
      trigger: el as HTMLElement,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay: delay + idx * stagger,
          ease: 'power2.out',
        })
      },
    })
  })
}

/**
 * Create parallax effect
 */
export const parallax = (
  element: HTMLElement,
  speed: number = 0.5
) => {
  ScrollTrigger.create({
    onUpdate: (self) => {
      gsap.to(element, {
        y: self.getVelocity() * speed,
        overwrite: 'auto',
      })
    },
  })
}

/**
 * Animate text reveal
 */
export const revealText = (
  element: HTMLElement,
  duration: number = 1
) => {
  const text = element.textContent || ''
  element.innerHTML = ''

  const chars = text.split('')
  chars.forEach((char) => {
    const span = document.createElement('span')
    span.textContent = char
    span.style.opacity = '0'
    element.appendChild(span)
  })

  gsap.to(element.querySelectorAll('span'), {
    opacity: 1,
    duration,
    stagger: 0.05,
    ease: 'power2.out',
  })
}

/**
 * Staggered list animation
 */
export const staggerList = (
  items: HTMLElement[],
  options: {
    duration?: number
    delay?: number
    stagger?: number
    yDistance?: number
  } = {}
) => {
  const {
    duration = 0.6,
    delay = 0,
    stagger = 0.1,
    yDistance = 20,
  } = options

  items.forEach((item) => {
    item.style.opacity = '0'
    item.style.transform = `translateY(${yDistance}px)`
  })

  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration,
    delay,
    stagger,
    ease: 'power2.out',
  })
}
