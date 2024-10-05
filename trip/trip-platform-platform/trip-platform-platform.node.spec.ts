import { loadAspect } from '@bitdev/harmony.testing.load-aspect';
import type { TripPlatformPlatformNode } from './trip-platform-platform.node.runtime.js';
import { TripPlatformPlatformAspect } from './trip-platform-platform.aspect.js';

it('should retrieve the aspect', async () => {
  const tripPlatformPlatform = await loadAspect<TripPlatformPlatformNode>(TripPlatformPlatformAspect, {
    runtime: 'node',
  });

  expect(tripPlatformPlatform).toBeTruthy();
});    
