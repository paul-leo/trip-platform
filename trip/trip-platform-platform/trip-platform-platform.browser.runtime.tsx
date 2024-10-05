import { SymphonyPlatformAspect, type SymphonyPlatformBrowser } from '@bitdev/symphony.symphony-platform';
import { Dashboard, Panel } from '@nore-work/trip.ui.dashboard';
import { PiedTheme } from '@pied/design.pied-theme';
import type { TripPlatformPlatformConfig } from './trip-platform-platform-config.js';
import { PanelSlot } from './panel.js';
import { WelcomeCard } from './welcome-card.js';

export class TripPlatformPlatformBrowser {
  constructor(
    private config: TripPlatformPlatformConfig,
    private panelSlot: PanelSlot
  ) {}

  /**
   * register a panel to the platform.
   */
  registerPanel(panels: Panel[]) {
    this.panelSlot.register(panels);
    return this;
  }

  /**
   * list the panels in the platform.
   */
  listPanels() {
    return this.panelSlot.flatValues();
  }
  
  static dependencies = [SymphonyPlatformAspect];

  static defaultConfig: TripPlatformPlatformConfig = {};

  static async provider(
    [symphonyPlatform]: [SymphonyPlatformBrowser],
    config: TripPlatformPlatformConfig,
    [panelSlot]: [PanelSlot]
  ) {
    const tripPlatformPlatform = new TripPlatformPlatformBrowser(config, panelSlot);
  
    symphonyPlatform.registerRoute([
      {
        path: '/',
        component: () => {
          const panels = tripPlatformPlatform.listPanels();
          return <Dashboard panels={panels} />;
        }
      }
    ]);

    tripPlatformPlatform.registerPanel([
      {
        component: () => {
          return <WelcomeCard />;
        }
      }
    ]);

    symphonyPlatform.registerTheme((props) => {
      return <PiedTheme {...props} />;
    });

    return tripPlatformPlatform;
  }
}

export default TripPlatformPlatformBrowser;
