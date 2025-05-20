console.log('Hello There!');
const pet = {
  name: 'Fluffy',
  species: 'cat',
  age: 3,
  color: 'white',
  owner: {
    name: 'Alice',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62701'
    }
  }
}

console.log(pet.owner.name); // Alice
console.log(pet.owner.address.city); // Springfield
console.log(pet.species); // cat