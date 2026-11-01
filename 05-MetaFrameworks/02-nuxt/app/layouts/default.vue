<template>
  <div>
    <AppHeader />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
}
</style>
