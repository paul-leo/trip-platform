import { Button } from '@bitdesign/sparks.actions.button';
import { PeopleLobby } from '@nore-work/people.ui.people-lobby';
import type { PeopleConfig } from './people-config.js';
import { MenuListItem, MenuListItemSlot } from './menu-list-item.js';
import { SymphonyPlatformAspect, SymphonyPlatformBrowser } from '@bitdev/symphony.symphony-platform';
import { type HeaderBrowser, HeaderAspect } from '@bitdev/symphony.aspects.header';
import { TripPlatformPlatformBrowser, TripPlatformPlatformAspect } from '@nore-work/trip.trip-platform-platform';
import { NewPeople } from './new-people.js';

export class PeopleBrowser {
  constructor(
    private config: PeopleConfig,
    private menuItemSlot: MenuListItemSlot
  ) {}
  
  /**
   * register a new menu item to the user bar.
   */
  registerMenuItem(menuItems: MenuListItem[]) {
    this.menuItemSlot.register(menuItems);
    return this;
  }

  /**
   * list all menu items.
   */
  listMenuItems() {
    return this.menuItemSlot.flatValues();
  }

  static dependencies = [SymphonyPlatformAspect, HeaderAspect, TripPlatformPlatformAspect];

  static defaultConfig: PeopleConfig = {};

  static async provider(
    [symphonyPlatform, header, tripPlatformPlatform]: [SymphonyPlatformBrowser, HeaderBrowser|undefined, TripPlatformPlatformBrowser],
    config: PeopleConfig,
    [menuItemSlot]: [MenuListItemSlot]
  ) {
    
    symphonyPlatform.registerRoute([
      {
        path: 'people',
        component: () => {
          return <PeopleLobby />
        }
      },
    ]);

    header?.registerAction([
      {
        name: 'signup',
        component: () => {
          return <Button href="/">Get started</Button>
        }
      }
    ]);

    tripPlatformPlatform.registerPanel([
      {
        category: 'People',
        component: () => {
          return <NewPeople />;
        }
      }
    ]);

    header?.registerLink([
      {
        label: 'People',
        href: '/people',
      }
    ]);

    return new PeopleBrowser(config, menuItemSlot);
  }
}

export default PeopleBrowser;
