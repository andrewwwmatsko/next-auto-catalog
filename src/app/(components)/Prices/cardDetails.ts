const firstPriceCard: PriceListCardData = {
  title: "Base",
  price: "$150",
  firstPayment: "No",
  uniqueDesign: "No",
  history: "No",
  indexing: "Yes",
  lotRemoval: "Yes",
};
const secondPriceCard: PriceListCardData = {
  title: "Profi",
  price: "$150",
  firstPayment: "1000$",
  uniqueDesign: "Yes",
  history: "No",
  indexing: "Yes",
  lotRemoval: "Yes",
};
const thirdPriceCard: PriceListCardData = {
  title: "Business",
  price: "$500",
  firstPayment: "Custom",
  uniqueDesign: "No",
  history: "No",
  indexing: "Yes",
  lotRemoval: "No",
};

const priceCards = [firstPriceCard, secondPriceCard, thirdPriceCard];

export default priceCards;
