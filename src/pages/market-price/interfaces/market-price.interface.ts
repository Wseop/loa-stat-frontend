export interface MarketPricePresenterProps {
  categories: string[];
  onClickCategory: (category: string) => () => void;
  itemPrices: ItemPrice[];
}

export interface ItemPrice {
  itemName: string;
  price: number;
  updated: string;
}
