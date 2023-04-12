import Phaser from 'phaser';

import BootScene from './scenes/BootScene';
import BattleScene from './scenes/BattleScene';

function launch(containerId: string) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.RESIZE,
      parent: containerId,
      width: '100%',
      height: 400
    },
    scene: [BootScene, BattleScene]
  });
}

export default launch;
export { launch };
