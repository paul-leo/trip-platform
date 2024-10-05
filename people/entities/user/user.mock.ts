import { User } from "./user.js";

export const userMock = {
  larry: User.from({
    username: 'larry',
    displayName: 'Larry Smith'
  }),
  rose: User.from({
    username: 'rose',
    displayName: 'Rodney Rose'
  })
};
