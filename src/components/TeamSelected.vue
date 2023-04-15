<script setup lang="ts">
import type { Character } from '@/fakes/models';
import { useCharacterStore } from '@/stores/character';

const characterStore = useCharacterStore();

function selectCharacter(character: Character) {
  characterStore.setCurrentCharacter(character);
}
</script>

<template>
  <div id="user-team">
    <div v-for="character in characterStore.userTeam" :key="character.id">
      <button @click="selectCharacter(character)">
        <img :src="character.avatarURL" alt="" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
#user-team {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    width: 50px;
    height: 50px;
    border: 1px solid white;

    button {
      cursor: pointer;
      width: 100%;
      height: 100%;
      border: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
