<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useBattleStore } from '@/stores/battle';
import { useCharacterStore } from '@/stores/character';

const router = useRouter();
const battleStore = useBattleStore();
const characterStore = useCharacterStore();

function goToBattleSimulator() {
  battleStore.setTeams(characterStore.userTeam, characterStore.enemyTeam);
  battleStore.determineShiftOrder();

  router.push('/battle-room');
}
</script>

<template>
  <nav id="actions">
    <a @click.prevent="goToBattleSimulator">Simulador</a>
  </nav>
</template>

<style lang="scss">
#actions {
  width: 100%;
  background-color: greenyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  gap: 0.5rem;

  a {
    width: 100px;
    height: 35px;
    border-radius: 8px;
    border: 1px solid;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
