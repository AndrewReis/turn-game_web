<script setup lang="ts">
// dependencies
import { ref } from 'vue';
import { generateFakeData } from '@/fakes/generate';
import type { Character } from '@/fakes/models';
import { useCharacterStore } from '@/stores/character';

// composables
import { usePagination } from '@/composables/pagination';

// components
import Header from '@/components/Header.vue';
import UserInventory from '@/components/UserInventory.vue';
import GameModes from '@/components/GameModes.vue';
import TeamSelected from '@/components/TeamSelected.vue';
import CharacterDetail from '@/components/CharacterDetail.vue';

// store
const characterStore = useCharacterStore();

// setup vars
const page = ref(1);
const characters = ref<Character[]>([]);

characters.value = generateFakeData();
characterStore.setCurrentCharacter(characters.value[0]);

// hooks
const { paginatedList, numberOfPages, currentPage, goToPrev, goToNext } = usePagination(
  characters,
  {
    page: page,
    perPage: 10
  }
);

// methods
const viewCharacterDetail = (character: Character) => {
  characterStore.setCurrentCharacter(character);
};
</script>

<template>
  <div>
    <Header />

    <UserInventory />

    <GameModes />

    <TeamSelected />

    <CharacterDetail />

    <div class="container-list-characters">
      <div><input type="text" placeholder="Pesquisar" /></div>
      <ul id="characters-list">
        <li v-for="char in paginatedList" :key="char.id" @click="viewCharacterDetail(char)">
          <button>
            <img :src="char.avatarURL" alt="" />
          </button>
        </li>
      </ul>

      <div>
        <button @click="goToPrev">Prev</button>
        {{ currentPage }} / {{ numberOfPages }}
        <button @click="goToNext">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-list-characters {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1rem;
}
#characters-list {
  width: 100%;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-template-rows: repeat(2, 50px);

  li {
    list-style: none;
    width: 100%;
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
