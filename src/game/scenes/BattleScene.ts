import { Scene } from 'phaser';

export default class BattleScene extends Scene {
  constructor() {
    super({ key: 'BattleScene' });
  }

  preload() {}

  create() {
    this.add.image(400, 300, 'sky');

    this.anims.create({
      key: 'hadoken',
      frames: this.anims.generateFrameNames('test', {
        prefix: 'Idle__',
        end: 9,
        zeroPad: 3,
        suffix: '.png'
      }),
      yoyo: true,
      repeat: -1
    });

    // USER TEAM #1 CHAR
    const ryu = this.add.sprite(60, 70, 'test').play('hadoken').setScale(0.2);
    // USER TEAM #2 CHAR
    const ryu2 = this.add.sprite(90, 200, 'test').play('hadoken').setScale(0.2);
    // USER TEAM #3 CHAR
    const ryu3 = this.add.sprite(60, 330, 'test').play('hadoken').setScale(0.2);

    // ENEMY TEAM #1 CHAR
    const ryu4 = this.add.sprite(540, 70, 'test').play('hadoken').setScale(0.2);
    ryu4.flipX = true;
    // ENEMY TEAM #2 CHAR
    const ryu5 = this.add.sprite(510, 200, 'test').play('hadoken').setScale(0.2);
    ryu5.flipX = true;
    // ENEMY TEAM #3 CHAR
    const ryu6 = this.add.sprite(540, 330, 'test').play('hadoken').setScale(0.2);
    ryu6.flipX = true;
  }
}
