import type { HomeConfig } from './home-config.js';
import {
  SymphonyPlatformAspect,
  SymphonyPlatformBrowser,
} from '@bitdev/symphony.symphony-platform';

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
          return <div>这是首页</div>;
        },
      },
    ]);

    return home;
  }
}

export default HomeBrowser;
