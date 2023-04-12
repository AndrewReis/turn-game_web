<script setup lang="ts">
type Skill = {
  id: string;
  name: string;
  target: string;
  imgUrl: string;
};

defineProps<{
  skills: Skill[];
}>();

const emit = defineEmits<{
  (e: 'execute', skill: Skill): void,
  (e: 'recharge'): void,
}>()

const executeSkill = (skill: Skill) => {
  emit('execute', skill);
}

const recharge = () => {
  emit('recharge');
}
</script>

<template>
  <div id="character-slots-container">
    <button v-for="skill in skills" :key="skill.id" @click="executeSkill(skill)">
      <img src="rasengan.png" />
    </button>
    <button v-if="!skills.length" v-for="fake in 4" :key="fake">
      X
    </button>
    <button @click="recharge">
      UP
    </button>
  </div>
</template>

<style scoped>
#character-slots-container {
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 50px);
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}

#character-slots-container button {
  width: 100%;
  height: 100%;
  background-color: #9b9b9b;
}

#character-slots-container button img {
  width: 100%;
  height: 100%;
}
</style>
