import { Character, CharacterSpriteSkill, User, BattleRoom } from './models';

export class UserRepository {
  private repository: User[];

  constructor() {
    this.repository = [];
  }

  create(data: Omit<User, 'id'>) {
    const user = new User(data.nickname);
    this.repository.push(user);
    return user;
  }

  findById(id: string) {
    return this.repository.find((user) => user.id === id);
  }
}

export class CharacterRepository {
  private repository: Character[];

  constructor() {
    this.repository = [];
  }

  create(data: Omit<Character, 'id'>) {
    const character = new Character(data);
    this.repository.push(character);
    return character;
  }

  getAll() {
    return this.repository;
  }
}

export class CharacterSpriteSkillRepository {
  private repository: CharacterSpriteSkill[];

  constructor() {
    this.repository = [];
  }

  create(data: Omit<CharacterSpriteSkill, 'id'>) {
    const skill = new CharacterSpriteSkill(data);
    this.repository.push(skill);
    return skill;
  }

  getAll() {
    return this.repository;
  }
}

export class BattleRoomRepository {
  private repository: BattleRoom[];

  constructor() {
    this.repository = [];
  }

  create({ state }: Omit<BattleRoom, 'id'>) {
    const battleRoom = new BattleRoom(state);
    this.repository.push(battleRoom);
    return battleRoom;
  }

  getAll() {
    return this.repository;
  }
}
