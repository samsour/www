import { createApp } from "vue";
import App from "./App.vue";
import { printPinchingHand } from "./assets/js/signature";

createApp(App).mount("#sour");

printPinchingHand();
