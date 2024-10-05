import { GqlSchema } from '@bitdev/symphony.backends.backend-server';
import { gql } from 'graphql-tag';
import type { PeopleNode } from './people.node.runtime.js';

export function createPeopleGqlSchema(people: PeopleNode): GqlSchema {
  return {
    typeDefs: gql`

    type User {
      username: String
      displayName: String
    }

    type Query {
      # retrieve a user object by username
      getUser(username: String): User

      # list all users.
      listUsers: [User]
    }
    
    `,
    resolvers: {
      Query: {
        getUser: async (req, { username }: { username: string }) => {
          const user = await people.getUser(username);
          return user;
        },
        listUsers: async () => {
          const users = await people.listUsers();
          return users.map((user) => {
            return user.toObject();
          });
        }
      }
    }
  };
}
