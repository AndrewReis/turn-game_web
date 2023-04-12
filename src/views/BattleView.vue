<template>
  <section id="page-game">
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
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Phaser from 'phaser';

// components
import DisplayChars from '@/components/DisplayChars.vue';
import SkillsSlots from '@/components/SkillsSlots.vue';
import SystemBar from '@/components/SystemBar.vue';

import { launch } from '@/game';

export default defineComponent({
  data() {
    return {
      gameInstance: {} as any,
      containerId: 'game-container'
    };
  },

  created() {
    this.gameInstance = launch(this.containerId);
  },

  unmounted() {
    this.gameInstance.destroy(true);
  },

  methods: {
    handleCSS(index: number, isOpponent = false) {
      if (!isOpponent) {
        if (index === 1) {
          return `top: 20px`;
        }

        if (index === 2) {
          return `top: 150px; left: 50px`;
        }

        if (index === 3) {
          return `top: 280px`;
        }
      } else {
        if (index === 1) {
          return `top: 20px`;
        }

        if (index === 2) {
          return `top: 150px; right: 50px`;
        }

        if (index === 3) {
          return `top: 280px`;
        }
      }
    }
  }
});
</script>

<style scoped>
#page-game {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

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
