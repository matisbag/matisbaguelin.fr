<script lang="ts" setup>
import { css } from 'styled-system/css'
import { container } from 'styled-system/patterns'
</script>

<template>
  <main :class="container()">
    <h1>Hello world!</h1>
    <div :class="css({ fontSize: '5xl', fontWeight: 'bold', color: 'primary' })">
      Hello 🐼!
    </div>
  </main>
</template>
