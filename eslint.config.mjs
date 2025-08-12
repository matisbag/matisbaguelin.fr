// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
}).overrideRules({
  'vue/multi-word-component-names': 'off',
  'vue/no-multiple-template-root': 'off',
})
