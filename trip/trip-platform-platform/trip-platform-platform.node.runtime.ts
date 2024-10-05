import { SymphonyPlatformAspect, type SymphonyPlatformNode } from '@bitdev/symphony.symphony-platform';
import type { TripPlatformPlatformConfig } from './trip-platform-platform-config.js';
import { tripPlatformPlatformGqlSchema } from './trip-platform-platform.graphql.js'

export class TripPlatformPlatformNode {
  constructor(
    private config: TripPlatformPlatformConfig,
  ) {}
  
  /**
   * retrieve something.
   */
  async getSomething(id: string) {
    return id;
  }  
  
  static dependencies = [SymphonyPlatformAspect];

  static defaultConfig: TripPlatformPlatformConfig = {};

  static async provider(
    [symphonyPlatform]: [SymphonyPlatformNode],
    config: TripPlatformPlatformConfig,
  ) {
    const tripPlatformPlatform = new TripPlatformPlatformNode(config);
    const gqlSchema = tripPlatformPlatformGqlSchema(tripPlatformPlatform);

    symphonyPlatform.registerBackendServer([
      {
        gql: gqlSchema,
      }
    ]);

    return tripPlatformPlatform;
  }
}

export default TripPlatformPlatformNode;
