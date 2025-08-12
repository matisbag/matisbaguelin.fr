export default defineNuxtPlugin(() => {
  const colorModeCookie = useCookie('color-mode', {
    default: () => 'light',
  })

  const applyColorMode = () => {
    let mode = colorModeCookie.value

    // Si pas de cookie, utiliser la préférence système
    if (!mode) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      mode = prefersDark ? 'dark' : 'light'
      colorModeCookie.value = mode
    }
  }

  applyColorMode()

  // Écouter les changements de préférence système
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    if (!localStorage.getItem('color-mode')) {
      const mode = mediaQuery.matches ? 'dark' : 'light'
      colorModeCookie.value = mode
    }
  })
})
