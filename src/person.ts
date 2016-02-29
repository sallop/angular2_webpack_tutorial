export default class Person {

  private firstName: string;
  private lastName: string;

  setFirstName(value: string){
    this.firstName = value;
  }

  setLastName(value: string){
    this.lastName = value;
  }

  getFullName() : string {
    return this.firstName + ", " + this.lastName;
  }
}
