import { v4 as uuidv4 } from "uuid";
import bee from "/assets/bee.jpg";
import austronaut from "/assets/astronaut.jpg";
import chicken from "/assets/chicken.jpg";
import cow from "/assets/cow.jpg";
import crocodile from "/assets/crocodile.jpg";
import rabbit from "/assets/rabbit.jpg";
import dinosaur from "/assets/dinosaur.jpg";
import doggy from "/assets/doggy.jpg";
import cat from "/assets/cat.jpg";
import koala from "/assets/koala.jpg";
import slot from "/assets/slot.jpg";
import penguin from "/assets/penguin.jpg";

let cardList = [
    {
        id: uuidv4(),
        name: "Bee",
        imgSrc: bee,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Astronaut",
        imgSrc: austronaut,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Chicken",
        imgSrc: chicken,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Cow",
        imgSrc: cow,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Crocodile",
        imgSrc: crocodile,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Rabbit",
        imgSrc: rabbit,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Dinosaur",
        imgSrc: dinosaur,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Doggy",
        imgSrc: doggy,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Cat",
        imgSrc: cat,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Koala",
        imgSrc: koala,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Slot",
        imgSrc: slot,
        clicked: false,
    },
    {
        id: uuidv4(),
        name: "Penguin",
        imgSrc: penguin,
        clicked: false,
    },
];

export default cardList;
