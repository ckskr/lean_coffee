import { dbConnect } from "../../src/dbConnect";
import Card from "../../src/models/cardModel";
// import { getProductById } from "../../../src/services/productsService";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === "GET") {
    const card = getCardById(id);
    response.status(200).json(card);
  } else if (request.method === "PUT") {
    const data = JSON.parse(request.body);
    await Card.findByIdAndUpdate(id, data);
    response.status(200).json({ message: "card updated" });
  } else if (request.method === "DELETE") {
    await Card.findByIdAndDelete(id);
    response.status(200).json({ message: "card deleted" });
  }
}
