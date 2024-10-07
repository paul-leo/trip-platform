import { HarmonyPlatform } from '@bitdev/harmony.harmony-platform';
import { NodeJSRuntime } from '@bitdev/harmony.runtimes.nodejs-runtime';
import { BrowserRuntime } from '@bitdev/harmony.runtimes.browser-runtime';
import { SymphonyPlatformAspect } from '@bitdev/symphony.symphony-platform';
// import { TrainAspect } from '@nore-work/trip.train';
import { HomeAspect } from '@nore-work/trip.home';

/**
 * compose the trip-platform platform.
 */
export const TripPlatform = HarmonyPlatform.from({
  name: 'trip-platform',
  platform: [
    SymphonyPlatformAspect,
    {
      name: 'Trip',
      slogan: 'Trip',
      domain: '',
      logo: 'https://bit.dev/bitdev/symphony/assets/symphony-logo.svg',
    },
  ],

  runtimes: [new BrowserRuntime(), new NodeJSRuntime()],

  aspects: [
    // TrainAspect,
    HomeAspect,
  ],
});

export default TripPlatform;
