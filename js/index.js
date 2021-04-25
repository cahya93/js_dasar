function hello(name) {
  console.log("hai, " + name);
}

hello("Eko Cahyanto");
hello("Dhevy Indahasari Sekeon");

let angka1 = 5;
let angka2 = 7;
let paragraph =
  "hasil dari perkalian dari " + angka1 + " dan " + angka2 + " adalah ";

function hitung(number1, number2) {
  return number1 * number2;
}

const result = hitung(angka1, angka2);
console.log(paragraph + result);

// console tabel

const datas = [
  { name: "Eko Cahyanto", course: "Front End" },
  { name: "Dhevy Indahasi S", course: "Back End" },
  { name: "Stevy Cahya Asharu", course: "Devlops" },
];

console.table(datas);
