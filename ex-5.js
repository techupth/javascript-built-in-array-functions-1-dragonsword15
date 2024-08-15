const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];


let average = students.reduce(function (aa, bb) {
  return aa + bb.score / students.length;
}, 0);
console.log(average)