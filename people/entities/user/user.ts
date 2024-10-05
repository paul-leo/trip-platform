
export type PlainUser = {
  username: string;
  displayName: string;
}

export class User {
  constructor(
    /**
     * machine user name.
     */
    readonly username: string,

    /**
     * display name of the user.
     */
    readonly displayName: string,
  ) {}

  /**
   * serialize a User into
   * a serializable object.
   */
  toObject() {
    return {
      username: this.username,
      displayName: this.displayName
    };
  }

  /**
   * create a User object from a 
   * plain object.
   */
  static from(plainUser: PlainUser) {
    return new User(
      plainUser.username,
      plainUser.displayName
    );
  }
}
