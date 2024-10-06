import { loadAspect } from '@bitdev/harmony.testing.load-aspect';
import type { TrainBrowser } from './train.browser.runtime.js';
import { TrainAspect } from './train.aspect.js';

it('should retrieve the aspect', async () => {
  const train = await loadAspect<TrainBrowser>(TrainAspect, {
    runtime: 'browser',
  });

  expect(train).toBeTruthy();
});    
