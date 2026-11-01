<script setup lang="ts">
import type { House } from '~/types/house'

const route = useRoute()
const config = useRuntimeConfig()

const { data: house } = await useFetch<House>(
  `${config.public.apiBase}/houses/${route.params.id}`,
)

if (!house.value) {
  throw createError({ statusCode: 404, statusMessage: 'Casa no encontrada', fatal: true })
}

useSeoMeta({
  title: `${house.value.name} - Casas Rurales`,
  description: house.value.description,
})
</script>

<template>
  <article v-if="house">
    <div class="header">
      <h2 class="title">{{ house.name }}</h2>
      <p class="price">{{ house.price }}€ / noche</p>
    </div>

    <div class="content">
      <NuxtImg
        class="image"
        :src="`${config.public.picturesBase}${house.image}`"
        :alt="house.name"
        width="700"
        height="500"
        format="webp"
        preload
      />

      <div class="info">
        <h3>Descripción</h3>
        <p>{{ house.description }}</p>

        <h3>Dirección</h3>
        <p>{{ house.address }}, {{ house.city }}, {{ house.country }}</p>

        <p><strong>Habitaciones:</strong> {{ house.bedrooms }}</p>
        <p><strong>Camas:</strong> {{ house.beds }}</p>
        <p><strong>Baños:</strong> {{ house.bathrooms }}</p>
        <p><strong>Servicios:</strong> {{ house.amenities.join(', ') }}</p>

        <BookButton />
      </div>
    </div>

    <h3 class="reviews-title">Reviews</h3>
    <ul class="reviews">
      <li v-for="review in house.reviews" :key="review.id" class="review">
        <p>Fecha: {{ review.date }}</p>
        <p>{{ review.author }}: {{ review.comment }}</p>
      </li>
    </ul>
  </article>
</template>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.title {
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
}

.price {
  margin: 0;
  font-size: 1.8rem;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

@media (min-width: 768px) {
  .content {
    grid-template-columns: 1fr 1fr;
  }
}

.image {
  width: 100%;
  height: auto;
}

.info h3 {
  margin: 0 0 0.5rem;
}

.info p {
  margin: 0 0 1rem;
}

.reviews-title {
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.reviews {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  list-style: none;
}

.review {
  padding: 0.75rem 1rem;
  border: 2px solid #1f2937;
  border-radius: 8px;
}

.review p {
  margin: 0.5rem 0;
}
</style>
