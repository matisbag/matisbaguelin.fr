<script lang="ts" setup>
import { css } from 'styled-system/css'

const { toggleColorMode } = useColorMode()
</script>

<template>
  <header>
    <NuxtLink to="/">
      Header
    </NuxtLink>
    <button
      :class="css({ px: '2', py: '1', fontSize: 'md', backgroundColor: 'primary', rounded: 'sm', color: 'white' })"
      @click="toggleColorMode"
    >
      switch
    </button>
  </header>
</template>
