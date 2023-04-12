<script setup lang="ts">
type Props = {
  id: string;
  name: string;
  life: number;
  stamina?: number;
};

defineProps<{
  characters: Props[];
}>();

const subtractBar = (value: number) => {
  // TODO
  if (value === 0) {
    return `width: ${0}%`;
  }
  return `width: ${value}%`;
}
</script>

<template>
  <div class="character-system-bar" v-for="char in characters" :key="char.id">
    <div class="character-system-bar-info">
      <div class="character-health-bar" :style="subtractBar(char.life)"> {{ char.life }} </div>
      <div v-if="char.stamina" class="character-stamina-bar" :style="subtractBar(char.stamina)"> {{ char.stamina }} </div>
      <div v-else class="character-without-stamina-bar"></div>
    </div>
    <span>{{ char.name }}</span>
  </div>
</template>

<style scoped>
.character-system-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #3b3b3b;
}

.character-system-bar span {
  flex: 1;
}

.character-system-bar-info {
  width: 40%;
  max-width: 200px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.character-health-bar {
  width: 100%;
  height: 20px;
  background-color: red;
}

.character-stamina-bar {
  width: 100%;
  height: 20px;
  background-color: #22afe7;
}
</style>
