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

  let proRandom = Math.floor(Math.random() * pronoun.length);
  let subjRandom = Math.floor(Math.random() * subject.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let posetionRandom = Math.floor(Math.random() * posetion.length);
  let whereRandom = Math.floor(Math.random() * where.length);

  return (
    pronoun[proRandom] +
    " " +
    subject[subjRandom] +
    " " +
    action[actionRandom] +
    " " +
    posetion[posetionRandom] +
    " " +
    where[whereRandom]
  );
};
