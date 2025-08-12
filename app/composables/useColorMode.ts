type ColorMode = 'light' | 'dark'

export const useColorMode = () => {
  const colorMode = useCookie<ColorMode>('color-mode', {
    default: () => 'light',
    sameSite: 'lax',
  })

  const setColorMode = (mode: ColorMode) => {
    colorMode.value = mode
  }

  const toggleColorMode = () => {
    setColorMode(colorMode.value === 'light' ? 'dark' : 'light')
  }

  return {
    colorMode: readonly(colorMode),
    setColorMode,
    toggleColorMode,
  }
}
