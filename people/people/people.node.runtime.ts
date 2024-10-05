import { SymphonyPlatformNode, SymphonyPlatformAspect } from '@bitdev/symphony.symphony-platform';
import { User, userMock } from '@nore-work/people.entities.user';
import { createPeopleGqlSchema } from "./people.graphql.js";

export class PeopleNode { 
  /**
   * get a user object.
   */
  async getUser(username: string): Promise<User|undefined> {
    return userMock[username];
  }

  /**
   * list users.
   */
  async listUsers(): Promise<User[]> {
    const users = Object.values(userMock);
    return users;
  }

  static dependencies = [SymphonyPlatformAspect];
  
  static async provider([symphonyPlatform]: [SymphonyPlatformNode]) {
    const people = new PeopleNode();
    const gqlSchema = createPeopleGqlSchema(people);

    symphonyPlatform.registerBackendServer([
      {
        routes: [],
        gql: gqlSchema
      }
    ]);

    return people;
  }
}

export default PeopleNode;
