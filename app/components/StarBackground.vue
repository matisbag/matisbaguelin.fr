<template>
  <div :class="backgroundStyle">
    <canvas
      ref="starsCanvas"
      :class="canvasStyle"
    />
    <PlanetHorizon />
  </div>
</template>

<script setup lang="ts">
import { css } from 'styled-system/css'

const starsCanvas = useTemplateRef<HTMLCanvasElement>('starsCanvas')

const backgroundStyle = css({
  position: 'fixed',
  inset: '0',
  pointerEvents: 'none',
  background: 'radial-gradient(ellipse at bottom, {colors.primary/05} 0%, transparent 60%), {colors.bg/02}',
  overflow: 'hidden',
})

const canvasStyle = css({
  position: 'absolute',
  inset: '0',
  opacity: '0.8',
})

interface Star {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinkleOffset: number
}

const STAR_COUNT = 40

let stars: Star[] = []
let animationId: number
let ctx: CanvasRenderingContext2D | null = null

let starColor = ''
let accentColor = ''

const createStars = (count: number) => {
  const canvas = starsCanvas.value
  if (!canvas) return

  stars = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    twinkleSpeed: Math.random() * 0.02 + 0.01,
    twinkleOffset: Math.random() * Math.PI * 2,
  }))
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1]!, 16),
        g: parseInt(result[2]!, 16),
        b: parseInt(result[3]!, 16),
      }
    : { r: 255, g: 255, b: 255 }
}

const updateColors = () => {
  const style = getComputedStyle(document.documentElement)
  starColor = style.getPropertyValue('--colors-bg-inverted').trim()
  accentColor = style.getPropertyValue('--colors-secondary').trim()
}

const drawStars = (time: number) => {
  if (!ctx || !starsCanvas.value) return

  const canvas = starsCanvas.value
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const starRgb = hexToRgb(starColor)
  const accentRgb = hexToRgb(accentColor)

  for (const star of stars) {
    // Update position
    star.x += star.vx
    star.y += star.vy

    // Wrap around edges
    if (star.x < 0) star.x = canvas.width
    else if (star.x > canvas.width) star.x = 0
    if (star.y < 0) star.y = canvas.height
    else if (star.y > canvas.height) star.y = 0

    // Twinkle effect
    const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5
    const opacity = star.opacity * twinkle

    // Draw star with gradient
    const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 2)
    gradient.addColorStop(0, `rgba(${starRgb.r}, ${starRgb.g}, ${starRgb.b}, ${opacity})`)
    gradient.addColorStop(0.5, `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${opacity * 0.5})`)
    gradient.addColorStop(1, 'transparent')

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2)
    ctx.fill()

    // Center point
    ctx.fillStyle = `rgba(${starRgb.r}, ${starRgb.g}, ${starRgb.b}, ${opacity})`
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.radius * 0.5, 0, Math.PI * 2)
    ctx.fill()
  }
}

const animate = (time: number) => {
  drawStars(time * 0.001)
  animationId = requestAnimationFrame(animate)
}

const handleResize = () => {
  if (!starsCanvas.value) return

  const oldWidth = starsCanvas.value.width
  const oldHeight = starsCanvas.value.height

  starsCanvas.value.width = window.innerWidth
  starsCanvas.value.height = window.innerHeight

  // Scale existing stars instead of recreating them
  if (oldWidth > 0 && oldHeight > 0 && stars.length > 0) {
    const scaleX = starsCanvas.value.width / oldWidth
    const scaleY = starsCanvas.value.height / oldHeight

    stars.forEach((star) => {
      star.x *= scaleX
      star.y *= scaleY
    })
  }
  else {
    // Create stars on first load or if no stars exist
    createStars(STAR_COUNT)
  }
}

onMounted(() => {
  if (starsCanvas.value) {
    ctx = starsCanvas.value.getContext('2d')
    updateColors()
    handleResize()
    window.addEventListener('resize', handleResize)
    animationId = requestAnimationFrame(animate)
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>
