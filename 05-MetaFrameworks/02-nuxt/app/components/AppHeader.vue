<template>
  <header class="header">
    <span class="icon">🛏️</span>
    <NuxtLink to="/">
      <h1>Casas Rurales</h1>
    </NuxtLink>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
}

h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
}

.icon {
  font-size: 2rem;
}
</style>
