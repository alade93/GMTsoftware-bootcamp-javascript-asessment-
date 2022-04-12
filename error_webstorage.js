// try {
//   let lastName = "Yetayeh";
//   let fullName = fistName + " " + lastName;
// } catch (err) {
//   console.log(err);
// }

// const throwErrorExampleFun = () => {
//   let message;
//   let x = prompt("Enter a number: ");
//   try {
//     if (x == "") throw "empty";
//     if (isNaN(x)) throw "not a number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too high";
//   } catch (err) {
//     console.log(err);
//   }
// };
// throwErrorExampleFun();
// localStorage.setItem("firstName", "Asabeneh"); // since the value is string we do not stringify it
// console.log(localStorage);

// localStorage.setItem("firstName", "Mubarak");
// localStorage.setItem("lastName", "Lawal");
// localStorage.setItem("age", 29);
// localStorage.setItem("country", "Nigeria");
// localStorage.setItem("city", "Abuja");
// console.log(localStorage);

// const student = {
//   firstName: "Idris",
//   lastName: "Lawal",
//   age: 29,
//   skills: ["HTML", "CSS", "JS", "React"],
// };
// const studentText = JSON.stringify(student, undefined, 4);
// localStorage.setItem("student", studentText);
// console.log(localStorage);

// const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
// const userskills = JSON.stringify(skills, undefined, 4);
// console.log(userskills);

// let age = 250;
// const userAge = JSON.stringify(age);
// console.log(userAge);

// let isMarried = true;
// const userisMarried = JSON.stringify(isMarried);
// console.log(isMarried);

// const student = {
//   firstName: "Asabeneh",
//   lastName: "Yetayehe",
//   age: 250,
//   isMarried: true,
//   skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
// };
// const userIsAstudent = JSON.stringify(student, undefined, 4);
// console.log(userIsAstudent);

// const ObjStudent = JSON.stringify(
//   student,
//   ["firstName", "lastName", "skills"],
//   4
// );
// console.log(ObjStudent);

// class Animal {
//   constructor(Name, Age, Color, Legs) {
//     console.log(this);
//     this.Name = Name;
//     this.Age = Age;
//     this.Color = Color;
//     this.Legs = Legs;
//   }
// }

// function getAge() {
//   return this.Age;
// }
// function setColor(Color) {
//   return this.Color;
// }
// const Animal1 = new Animal("Rufus", 10, "Black", 4);
// console.log(Animal1);

// console.log(Animal1.getAge);

// class Dog extends Animal {
//   saySomething() {
//     console.log("This is an animal");
//   }
// }

// class Cat extends Animal {
//   saySomething() {
//     console.log("This is also an animal");
//   }
// }
// const Dog1 = new Dog("Bingo", 9, "Green", 4);
// const Cat1 = new Cat("Jessie", 3, "Grey", 4);
// console.log(Dog1);
// console.log(Cat1);

// class Animal2 extends Animal {
//   constructor(Name, Age, Color, Legs, Breed) {
//     super(Name, Age, Color, Legs);
//     this.Breed = Breed;
//     this.Name = Name;
//     this.Age = Age;
//     this.Color = Color;
//     this.Legs = Legs;
//   }
// }
// const Animal3 = new Animal2("Rufus", 10, "Black", 4, "Husky");
// console.log(Animal3);
