import { defineStore } from 'pinia';
import type { Character } from '@/fakes/models';

export const useCharacterStore = defineStore('characters', {
  state: () => ({
    userTeam: [] as Character[],
    enemyTeam: [] as Character[],
    currentCharacter: {} as Character
  }),

  actions: {
    setCurrentCharacter(character: Character) {
      this.currentCharacter = character;
    },

    addToUserTeam() {
      if (!this.userTeam.some((t) => t.id === this.currentCharacter.id)) {
        if (this.userTeam.length < 3) {
          this.userTeam.push(this.currentCharacter);
          this.enemyTeam.push(this.currentCharacter);
        }
      }
    },

    removeToUserTeam() {
      this.userTeam = this.userTeam.filter((t) => t.id !== this.currentCharacter.id);
      this.enemyTeam = this.enemyTeam.filter((t) => t.id !== this.currentCharacter.id);
    }
  }
});
