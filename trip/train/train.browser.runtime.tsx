import type { TrainConfig } from './train-config.js';
import { SymphonyPlatformAspect, SymphonyPlatformBrowser } from '@bitdev/symphony.symphony-platform';
// import { TrainAppRoot } from '@nore-work/train.train-app-root';

export class TrainBrowser {
  constructor(
    private config: TrainConfig,
  ) {}
  
  static dependencies = [SymphonyPlatformAspect];

  static defaultConfig: TrainConfig = {};

  static async provider(
    [symphonyPlatform]: [SymphonyPlatformBrowser],
    config: TrainConfig,
  ) {
    const train = new TrainBrowser(config);
    symphonyPlatform.registerRoute([
      {
        path: 'train',
        component: () => {
          return <div>这是火车票</div>
        }
      }
    ]);

    return train;
  }
  goToList(data) {
    console.log('goToList');
    // history.pushState(data, "", "/train");
  }
}

export default TrainBrowser;
