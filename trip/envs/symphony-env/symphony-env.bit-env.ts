/**
 * this env extends the Bit official Harmony environment.
 * learn more: https://bit.cloud/bitdev/harmony/harmony-env
 */
import { HarmonyEnv } from '@bitdev/harmony.harmony-env';
import { HarmonyWorkspaceStarter } from '@bitdev/symphony.generators.symphony-starters';
import { SymphonyTemplates } from '@bitdev/symphony.generators.symphony-templates';
import { StarterList } from '@teambit/generator';

export class SymphonyEnv extends HarmonyEnv {
  /* shorthand name for the environment */
  name = "symphony-env";

  generators() {
    return SymphonyTemplates();
  }
  
  starters() {
    return StarterList.from([
      HarmonyWorkspaceStarter.from()
    ]);
  }
}

export default new SymphonyEnv();
