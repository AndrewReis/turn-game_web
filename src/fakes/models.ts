import { nanoid } from 'nanoid';

export type SkillEffects = {
  damage: number;
  staminaCost: number;
  target: 'self' | 'one_enemy' | 'all_enemies';
};

export type PhaserFramesOptions = {
  prefix: string;
  end: number;
  zeroPad: number;
};

export type GameState = {
  user: {
    id: string;
    name: string;
    team: Character[];
  };
  opponent: {
    id: string;
    name: string;
    team: Character[];
  };
};

export class User {
  public readonly id: string;
  public nickname: string;

  constructor(nickname: string) {
    this.id = nanoid();
    this.nickname = nickname;
  }
}

export class Character {
  public readonly id: string;
  public name: string;
  public phaserKey: string;
  public health: number;
  public stamina: number;
  public readonly speed: number;
  public userId: string;
  public readonly avatarURL: string;
  public readonly previewURL: string;
  public readonly spriteURL: string;
  public readonly spriteJsonURL: string;
  public skills?: CharacterSpriteSkill[];

  constructor({
    name,
    phaserKey,
    health,
    stamina,
    speed,
    userId,
    avatarURL,
    spriteURL,
    spriteJsonURL,
    previewURL
  }: Omit<Character, 'id'>) {
    this.id = nanoid();
    this.name = name;
    this.phaserKey = phaserKey;
    this.health = health;
    this.stamina = stamina;
    this.speed = speed;
    this.userId = userId;
    this.spriteURL = spriteURL;
    this.spriteJsonURL = spriteJsonURL;
    this.avatarURL = avatarURL;
    this.previewURL = previewURL;
  }
}

export class CharacterSpriteSkill {
  public readonly id: string;
  public charId: string;
  public name: string;
  public description: string;
  public imgURL: string;
  public jsonURL: string;
  public slotOrder: number;
  public isRepeat: boolean;
  public skillEffect: SkillEffects;
  public phaserKey: string;
  public framesOptions: PhaserFramesOptions;

  constructor({
    charId,
    name,
    description,
    imgURL,
    jsonURL,
    slotOrder,
    isRepeat,
    skillEffect,
    framesOptions,
    phaserKey
  }: Omit<CharacterSpriteSkill, 'id'>) {
    this.id = nanoid();
    this.charId = charId;
    this.name = name;
    this.description = description;
    this.imgURL = imgURL;
    this.jsonURL = jsonURL;
    this.slotOrder = slotOrder;
    this.isRepeat = isRepeat;
    this.skillEffect = skillEffect;
    this.framesOptions = framesOptions;
    this.phaserKey = phaserKey;
  }
}

export class BattleRoom {
  public readonly id: string;
  public readonly state: GameState;

  constructor(state: GameState) {
    this.id = nanoid();
    this.state = state;
  }
}
