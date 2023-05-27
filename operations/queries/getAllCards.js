import CardListFields from "operations/fragments/cardList";
import CardFields from "operations/fragments/card";
const GET_ALL_CARDS = `
query MyQuery {
  allCardLists {
    cards {
      ${CardFields}
    }
  }
}


`;

export default GET_ALL_CARDS;
