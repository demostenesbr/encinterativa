<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="headermenu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/howtoparticipate">Como Participar</RouterLink>
      <RouterLink to="/awards">Prêmios</RouterLink>
      <RouterLink to="/participatingproducts">Produtos Participantes</RouterLink>
      <RouterLink to="/revenues">Receitas</RouterLink>
      <RouterLink to="/nbapills">Pílulas NBA</RouterLink>
      <RouterLink to="/winners">Ganhadores</RouterLink>
      <RouterLink to="/consumers" class="consumer">Olá, Ana</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
