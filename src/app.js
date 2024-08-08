/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn-excuse").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

function RamdonIndexArray(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["joger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yellerd at my", "stole my", "bit my"];
  let posetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  return (
    `${RamdonIndexArray(pronoun)}` +
    " " +
    `${RamdonIndexArray(subject)}` +
    " " +
    `${RamdonIndexArray(action)}` +
    " " +
    `${RamdonIndexArray(posetion)}` +
    " " +
    `${RamdonIndexArray(where)}`
  );
};
