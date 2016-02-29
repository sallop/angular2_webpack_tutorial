import Person from '../../src/person.ts';
//var Person = require('../../src/person.ts');

describe("Person FullName", () => {
  var person: Person;

  beforeEach(() => {
    person = new Person();
    person.setFirstName("John");
    person.setLastName("Smith");
  });

  it("should concatenate first and last names", () => {
    expect(person.getFullName()).toBe("John, Smith");
  });
});
