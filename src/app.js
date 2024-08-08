/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn-excuse").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["joger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yellerd at my", "stole my", "bit my"];
  let posetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndexRandom = Math.floor(Math.random() * pronoun.length);
  let subjIndexRandom = Math.floor(Math.random() * subject.length);
  let actionIndexRandom = Math.floor(Math.random() * action.length);
  let posetionIndexRandom = Math.floor(Math.random() * posetion.length);
  let whereIndexRandom = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndexRandom] +
    " " +
    subject[subjIndexRandom] +
    " " +
    action[actionIndexRandom] +
    " " +
    posetion[posetionIndexRandom] +
    " " +
    where[whereIndexRandom]
  );
};
