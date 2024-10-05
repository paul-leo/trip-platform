import { GqlSchema } from '@bitdev/symphony.backends.backend-server';
import { gql } from 'graphql-tag';
import type { TripPlatformPlatformNode } from './trip-platform-platform.node.runtime.js';

export function tripPlatformPlatformGqlSchema(tripPlatformPlatform: TripPlatformPlatformNode): GqlSchema {
  return {
    typeDefs: gql`

    type Something {
      name: String
    }

    type Query {
      getSomething(id: String): Something
    }
    `,
    resolvers: {
      Query: {
        getSomething: async (req, { id }: { id: string }) => {
          const something = await tripPlatformPlatform.getSomething(id);
          return something;
        },
      }
    }
  };
}
