import { images } from "../assets";

const TITLE = "EL003 Elleven Checkpoint-Friendly Compu-Backpack";

const palette = [
  ["#2b2459", "#2fa67e"],
  ["#d9d9d9", "#2fa67e"],
  ["#2fa67e", "#2b2459"],
  ["#e5a93c", "#2b2459"],
  ["#3b1fc4", "#9b7be0"],
  ["#7b4fe0", "#2b2459"],
  ["#8fc1de", "#2b2459"],
  ["#1c1c28", "#9b7be0"],
];

export const products = images.hoodies.map((image, i) => ({
  id: i + 1,
  title: TITLE,
  price: 76.43,
  image,
  colors: palette[i],
}));

export const giftSets = [images.box, images.box1, images.box2, images.giftBox].map(
  (image, i) => ({
    id: 101 + i,
    title: TITLE,
    price: 76.43,
    image,
    colors: ["#2b2459", "#2fa67e"],
  })
);