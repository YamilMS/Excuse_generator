/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#Motivo").innerHTML = excusa();
  });
};

let excusa = () => {
  let who = ["My cat", "Aliens", "Steve Jobs", "Vladimir Putin", "Pikachu"];
  let action = ["burned", "broke", "ate", "pissed", "attacked"];
  let what = ["my homework", "my house", "my car", "my dog", "my mother"];
  let when = [
    "yesterday",
    "before my lunch",
    "last week",
    "while I was sleeping",
    "just a second ago"
  ];
  let quien = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length);

  return (
    who[quien] + " " + action[accion] + " " + what[quien] + " " + when[cuando]
  );
};
