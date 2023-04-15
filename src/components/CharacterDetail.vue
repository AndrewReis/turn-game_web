<script setup lang="ts">
import { useCharacterStore } from '@/stores/character';

const characterStore = useCharacterStore();

function addToTeam() {
  characterStore.addToUserTeam();
}
function removeToTeam() {
  characterStore.removeToUserTeam();
}
</script>

<template>
  <div id="container">
    <div class="header">
      stars

      <div class="actions">
        <button @click="removeToTeam">remover equipe</button>
        <button @click="addToTeam">adicionar equipe</button>
      </div>
    </div>

    <div class="character-container">
      <div class="character-atribbutes">atributos</div>

      <div class="character-preview">
        <img :src="characterStore.currentCharacter.previewURL" alt="" />
        <button>comprar</button>
        <p>
          {{ characterStore.currentCharacter.name }}
        </p>
      </div>
    </div>

    <footer class="character-detail-footer">
      <strong>skills</strong>
      <ol class="slots-container">
        <li v-for="skill in characterStore.currentCharacter.skills" :key="skill.id">
          <div class="skill">1</div>
          <span> {{ skill.name }} </span>
        </li>
      </ol>
    </footer>
  </div>
</template>

<style lang="scss">
#container {
  width: 285px;
  background-color: silver;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: flex;
  justify-content: space-between;
  background-color: greenyellow;
  padding: 0.5rem;

  .actions {
    display: flex;
    place-items: center;
    gap: 4px;

    button {
      width: 70px;
      height: 30px;
      border-radius: 7px;
      border: 0;
    }
  }
}

.character-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    place-items: center;
  }

  .character-atribbutes {
  }
  .character-preview {
    flex: 1;
  }

  img {
    height: 130px;
  }
}

.character-detail-footer {
  width: 100%;
  background-color: red;

  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.125rem;
    text-transform: uppercase;
  }

  .slots-container {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(4, minmax(50px, 100px));
    justify-content: center;

    li {
      list-style: none;
      width: 100%;
      height: 100%;
      border: 1px solid white;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      .skill {
        width: 50px;
        height: 50px;
        border: 1px solid green;

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        font-size: 0.75rem;
        text-align: center;
      }
    }
  }
}
</style>
