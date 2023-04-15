import type { Character } from '@/fakes/models';
import { defineStore } from 'pinia';

export const useBattleStore = defineStore('battle', {
  state: () => ({
    allCharactersOrderedByTurn: [] as Character[],
    displayCharacters: [] as Character[],
    userTeam: [] as Character[],
    enemyTeam: [] as Character[],
    currentCharacter: {} as Character,
    oldCharacter: {} as Character | undefined,
    round: 1,
    currentTurn: 1
  }),

  actions: {
    setTeams(userTeam: Array<Character>, enemyTeam: Array<Character>) {
      this.userTeam = userTeam;
      this.enemyTeam = enemyTeam;
    },

    determineShiftOrder() {
      const allChars = this.userTeam.concat(this.enemyTeam);
      allChars.sort((a, b) => b.speed - a.speed);
      this.allCharactersOrderedByTurn = allChars;
      this.displayCharacters = allChars;
    },

    nextTurn() {
      this.currentTurn++;
      if (this.currentTurn >= this.allCharactersOrderedByTurn.length) {
        this.currentTurn = 0;
        this.round++;
      }

      this.currentCharacter = this.allCharactersOrderedByTurn[this.currentTurn];

      this.oldCharacter = this.displayCharacters.shift();
      if (this.oldCharacter) {
        this.displayCharacters.push(this.oldCharacter);
      } else {
        throw new Error('nextTurn: old character not found');
      }
    }
  }
});
