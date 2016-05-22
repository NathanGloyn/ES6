import {TapeMachine} from "./codes";

const tp = new TapeMachine();
tp.record("Hello... Hellooooo!!! Hellooooooo!!!!");
tp.play();

const p = document.createElement("p");
p.innerText = "Victory!";
document.querySelector("body").appendChild(p);