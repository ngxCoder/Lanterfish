import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import SimpleForm from "./components/SimpleForm";

function textToNumbers(text: string) {
  return text.split(",").map((num) => Number(num));
}

function simulation(initialFishes: number[], days: number) {
  let fishes = [...initialFishes];
  for (let day = 1; day <= days; day++) {
    for (let i = 0; i < fishes.length; i++) {
      const fish = fishes[i];
      if (fish <= 0) {
        fishes[i] = 6;
        fishes = [...fishes, 8];
      } else {
        fishes[i] = fishes[i] - 1;
      }
    }
    console.log(`day: ${day}`, fishes);
  }
  return fishes;
}

const part1 = (text: string) => {
  const initialFishes = textToNumbers(text);
  const fishes = simulation(initialFishes, 2);
  return fishes.length; //nums.length;
};

const part2 = (text: string) => {
  return 0;
};

function App() {
  return (
    <>
      <SimpleForm title="Lanternfish - Part 1" fn={part1} />
      <SimpleForm title="Lanternfish - Part 2" fn={part2} />
    </>
  );
}

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
