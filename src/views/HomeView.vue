<script setup lang="ts">
import { ref, reactive } from 'vue';
import { generateFakeData, createBattleRoom } from '@/fakes/generate';

import type { Character } from '@/fakes/models';

let characters = reactive<Character[]>([]);
const currentChar = ref<Character>();

const userTeam = ref<Character[]>([]);

characters = generateFakeData();

const viewCharSkill = (character: Character) => {
  currentChar.value = character;
};

const chooseCharacterForTeam = (character: Character) => {
  if (!userTeam.value.some((t) => t.id === character.id)) {
    if (userTeam.value.length < 3) {
      userTeam.value.push(character);
    }
  }
};

const removeOfTeam = (id: string) => {
  userTeam.value = userTeam.value.filter((t) => t.id !== id);
};

const goBattle = () => {
  if (userTeam.value.length === 3) {
    const user = {
      id: 'pegar do localStorage',
      name: 'pegar do localStorage',
      team: userTeam.value
    };

    const opponent = {
      id: 'Gerar',
      name: 'Gerar',
      team: userTeam.value // Gerar
    };

    const battle = createBattleRoom({ user, opponent });
  }
};
</script>

<template>
  <main>
    <h1>Personagens</h1>

    <ol>
      <li v-for="character in characters" :key="character.id">
        {{ character.id }} {{ character.name }}
        <button @click="viewCharSkill(character)">Ver Habilidades</button>
        <button @click="chooseCharacterForTeam(character)">Escolher</button>
      </li>
    </ol>

    <ol v-if="currentChar">
      <li v-for="skill in currentChar.skills" :key="skill.id">
        {{ skill.charId }} - {{ skill.name }}
      </li>
    </ol>

    <div>
      <h2>Time</h2>
      <li v-for="t in userTeam" :key="t.id">
        {{ t.name }}
        <button @click="removeOfTeam(t.id)">Remover</button>
      </li>
    </div>

    <div>
      <h2>Simulador</h2>
      <button @click="goBattle">PVE</button>
    </div>
  </main>
</template>
