import type { HomeConfig } from './home-config.js';
import {
  SymphonyPlatformAspect,
  SymphonyPlatformBrowser,
} from '@bitdev/symphony.symphony-platform';
import { HomeRoot } from '@nore-work/trip.home-root';
export class HomeBrowser {
  constructor(private config: HomeConfig) {}

  static dependencies = [SymphonyPlatformAspect];

  static defaultConfig: HomeConfig = {};

  static async provider(
    [symphonyPlatform]: [SymphonyPlatformBrowser],
    config: HomeConfig
  ) {
    const home = new HomeBrowser(config);
    symphonyPlatform.registerRoute([
      {
        path: '/',
        component: () => {
          return <HomeRoot></HomeRoot>;
        },
      },
    ]);

    return home;
  }
}

export default HomeBrowser;
