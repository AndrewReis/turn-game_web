import type { GameState } from './models';

import avatarURL from '@/game/assets/itachi-avatar.jpg';
import previewURL from '@/game/assets/itachi.png';

import {
  CharacterRepository,
  CharacterSpriteSkillRepository,
  BattleRoomRepository
} from './repositories';

export function generateFakeData() {
  const charRepository = new CharacterRepository();
  const charSpriteSkillRepository = new CharacterSpriteSkillRepository();

  for (let i = 0; i < 60; i++) {
    const char = charRepository.create({
      name: `char random name ${i}`,
      health: 100,
      stamina: 100,
      speed: i * 10,
      phaserKey: `char-random-name-${i}`,
      userId: '',
      avatarURL: avatarURL,
      previewURL: previewURL,
      spriteJsonURL: '/src/game/tmp/test.json',
      spriteURL: '/src/game/tmp/test.png'
    });

    for (let i = 0; i < 4; i++) {
      charSpriteSkillRepository.create({
        name: `skill random name slot-${i}`,
        phaserKey: `skill-random-name-${i}`,
        description: `skill-random-description-${i}`,
        imgURL: '',
        jsonURL: '',
        isRepeat: true,
        slotOrder: i,
        framesOptions: { end: 0, prefix: '', zeroPad: 0 },
        skillEffect: { damage: 20, staminaCost: 15, target: 'one_enemy' },
        charId: char.id
      });
    }
  }

  const chars = charRepository.getAll();
  const skills = charSpriteSkillRepository.getAll();

  return chars.map((char) => {
    char.skills = skills.filter((skill) => skill.charId === char.id);
    return char;
  });
}

export function createBattleRoom({ user, opponent }: GameState) {
  const battleRoomRepository = new BattleRoomRepository();

  return battleRoomRepository.create({ state: { user, opponent } });
}
