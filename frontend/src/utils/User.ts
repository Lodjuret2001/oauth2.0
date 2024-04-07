class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public picture: string,
    public email: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.picture = picture;
    this.email = email;
  }
}

export default User;
