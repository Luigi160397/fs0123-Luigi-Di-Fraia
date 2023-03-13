//Esercizio1

class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    static isSameAge(x, y){
        if (x.age > y.age) {
            return x.firstName + " è più vecchio/a di " + y.firstName
        } else if(x.age < y.age){ 
            return x.firstName + " è più giovane di " + y.firstName
        } else{
            return x.firstName + " ha la stessa età di " + y.firstName
        }
    }
}

const user1 = new User('Luigi', 'Di Fraia', '26', 'Roma');
const user2 = new User('Mario', 'Rossi', '30', 'Milano');
const user3 = new User('Francesca', 'Verdi', '26', 'Torino');
const user4 = new User('Lucia', 'Esposito', '42', 'Napoli');

console.log(User.isSameAge(user4, user1));
console.log(User.isSameAge(user1, user3));
console.log(User.isSameAge(user2, user4));

//Esercizio2

class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    static isTheSameOwner(pet1, pet2){
        return pet1.ownerName === pet2.ownerName
            
    }
}

const form = document.querySelector('form');
const saveButton = form.querySelector('button');


const petList = document.createElement('ul');
const contenuto = document.querySelector('#contenuto')
contenuto.appendChild(petList);


saveButton.addEventListener('click', function (event) {

  event.preventDefault();


  const petName = form.petName.value;
  const ownerName = form.ownerName.value;
  const species = form.species.value;
  const breed = form.breed.value;


  const pet = new Pet(petName, ownerName, species, breed);


const petListItem = document.createElement('li');

const petString = JSON.stringify(pet).replace(/[{}"]/g, ' ');

petListItem.textContent = petString.toUpperCase();


petList.appendChild(petListItem);



  form.reset();
});



