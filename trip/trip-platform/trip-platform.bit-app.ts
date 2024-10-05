import { HarmonyPlatform } from '@bitdev/harmony.harmony-platform';
import { NodeJSRuntime } from '@bitdev/harmony.runtimes.nodejs-runtime';
import { BrowserRuntime } from '@bitdev/harmony.runtimes.browser-runtime';
import { SymphonyPlatformAspect } from '@bitdev/symphony.symphony-platform';
import { HeaderAspect } from '@bitdev/symphony.aspects.header';
import { PeopleAspect } from '@nore-work/people.people';
import { TripPlatformPlatformAspect } from '@nore-work/trip.trip-platform-platform';

/**
  * compose the trip-platform platform.
  */    
export const TripPlatform = HarmonyPlatform.from({
  name: 'trip-platform',
  platform: [SymphonyPlatformAspect, {
    name: 'Pied Piper',
    slogan: 'Network',
    domain: 'trip-platform.teambit.games',
    logo: 'https://static.bit.dev/extensions-icons/trip-platform.svg',
  }],

  runtimes: [
    new BrowserRuntime(), 
    new NodeJSRuntime()
  ],

  aspects: [
    // you can use the symphony header aspect or fork to build your own.
    HeaderAspect,
    // example feature, replace with your own.
    PeopleAspect,
    TripPlatformPlatformAspect,
    // To deploy the platform on a Kubernetes cluster, use the official Kubernetes deployer 
    // for Harmony. @see https://bit.cloud/bitdev/symphony/deployers/kubernetes
  ],
});

export default TripPlatform;
