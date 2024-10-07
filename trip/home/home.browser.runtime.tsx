import type { HomeConfig } from './home-config.js';
import {
  SymphonyPlatformAspect,
  SymphonyPlatformBrowser,
} from '@bitdev/symphony.symphony-platform';
import { HomeRoot } from '@nore-work/trip.home-root';
import { TrainAspect, TrainBrowser } from '@nore-work/trip.train';
export class HomeBrowser {
  constructor(private config: HomeConfig) {}

  static dependencies = [SymphonyPlatformAspect, TrainAspect];

  static defaultConfig: HomeConfig = {};

  static async provider(
    [symphonyPlatform, train]: [SymphonyPlatformBrowser, TrainBrowser],
    config: HomeConfig
  ) {
    const home = new HomeBrowser(config);
    symphonyPlatform.registerRoute([
      {
        path: '/',
        component: () => {
          return <HomeRoot deps={{ train }}></HomeRoot>;
        },
      },
    ]);

    return home;
  }
}

export default HomeBrowser;
