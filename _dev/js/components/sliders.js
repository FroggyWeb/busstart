import { tns } from "../plugins/tiny-slider/src/tiny-slider";

const portfolio = tns({
  container: ".portfolio",
  items: 1,
  gutter: 20,
  slideBy: "page",
  navPosition: "bottom",
  controls: false,
  responsive: {
    "1024": {
      "items": 2
    },
  }
});

