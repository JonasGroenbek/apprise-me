#!/usr/bin/env node
import gradient from "gradient-string";
import axios from "axios";
import { createSpinner } from "nanospinner";

const loadingSpinner = createSpinner("Loading");
loadingSpinner.start();

setTimeout(async () => {
  const response = await axios.get(
    "https://uselessfacts.jsph.pl/random.json?language=en"
  );
  loadingSpinner.stop();
  console.log(gradient.rainbow(response.data.text));
}, 500);
