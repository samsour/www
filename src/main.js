import { createApp } from "troisjs";
import App from "./App.vue";
import { printPinchingHand } from "./assets/js/signature";

createApp(App).mount("#sour");

printPinchingHand();
