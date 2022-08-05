import { dbConnect } from "../dbConnect";
import Card from "../models/cardModel";

export async function getAllCards() {
  await dbConnect();

  const cards = await Card.find();

  return cards.map(({ id, name, description }) => {
    return { id, name, description };
  });
}

export async function getCardById(id_) {
  await dbConnect();

  const category = await Card.findById(id_);

  const { id, name, description } = card;

  return { id, name, description };
}
