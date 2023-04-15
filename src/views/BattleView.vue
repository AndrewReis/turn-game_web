<script setup lang="ts">
// dependencies
import { onMounted, onUnmounted } from 'vue';
import type Phaser from 'phaser';
import { launch } from '@/game';

// store
import { useBattleStore } from '@/stores/battle';

const battleStore = useBattleStore();

let gameInstance: Phaser.Game;
const containerId = 'game-container';

function handleNextTurn() {
  battleStore.nextTurn();
}

onMounted(() => {
  gameInstance = launch(containerId);
});
onUnmounted(() => {
  gameInstance.destroy(false);
});
</script>

<template>
  <div>
    <h2>Round: {{ battleStore.round }}</h2>
    <div :id="containerId" />
    <button @click="handleNextTurn">Recarregar</button>
    <!-- <header>
      <h2>ROUND: {{ state.round }}</h2>
      <DisplayChars :characters="state.display" />
    </header>
    <div :id="containerId">
      <div id="time">
        <div
          v-for="(char, index) in state.time"
          :key="char.id"
          class="test characters"
          :style="handleCSS(index + 1)"
        />
      </div>
      <div id="time2">
        <div
          v-for="(char, index) in state.timeInimigo"
          :key="char.id"
          class="test2 characters"
          :style="handleCSS(index + 1, true)"
/>
      </div>
    </div>

    <SkillsSlots :skills="state.skills" />

    <footer>
      <div>
        <SystemBar :characters="state.time" />
      </div>
      <div>
        <SystemBar :characters="state.timeInimigo" />
      </div>
    </footer> -->
  </div>
</template>

<style lang="scss" scoped>
#game-container {
  width: 100%;
  height: 400px;
  position: relative;
}

canvas {
  width: 100%;
  height: 100%;
}

#time {
  position: absolute;
  top: 0;
  left: 0;
  width: 49%;
  height: 100%;
}

#time2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 49%;
  height: 100%;
}

.characters {
  cursor: pointer;
}

.characters:hover {
  border: 2px solid yellow;
}

.test {
  width: 70px;
  height: 100px;
  border: 2px solid red;
  position: absolute;
  left: 20px;
  cursor: pointer;
}

.test2 {
  width: 70px;
  height: 100px;
  border: 2px solid red;
  position: absolute;
  right: 20px;
}

footer {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
