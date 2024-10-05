import { loadAspect } from '@bitdev/harmony.testing.load-aspect';
import type { TripPlatformPlatformBrowser } from './trip-platform-platform.browser.runtime.js';
import { TripPlatformPlatformAspect } from './trip-platform-platform.aspect.js';

it('should retrieve the aspect', async () => {
  const tripPlatformPlatform = await loadAspect<TripPlatformPlatformBrowser>(TripPlatformPlatformAspect, {
    runtime: 'browser',
  });

  expect(tripPlatformPlatform).toBeTruthy();
});    
