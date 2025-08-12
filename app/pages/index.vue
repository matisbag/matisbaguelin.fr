<script lang="ts" setup>
import { css } from 'styled-system/css'
</script>

<template>
  <main>
    <h1>Hello world!</h1>
    <div :class="css({ fontSize: '5xl', fontWeight: 'bold' })">
      Hello 🐼!
    </div>
  </main>
</template>
