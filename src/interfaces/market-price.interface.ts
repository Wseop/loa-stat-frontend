export interface MarketPricePresenterProps {
  categories: string[];
  category: string;
  onClickCategory: (category: string) => () => void;
  itemPrices: ItemPrice[];
}

export interface ItemPrice {
  itemName: string;
  price: number;
  updated: string;
}
