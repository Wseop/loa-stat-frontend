export interface MarketPricePresenterProps {
  categories: string[];
  category: string;
  onClickCategory: (category: string) => () => void;
  onClickTripodSearch: (TripodSearchFilter: TripodSearchFilter) => void;
  itemPrices: ItemPrice[];
  tripodPrices: TripodPrice[];
}

export interface ItemPrice {
  itemName: string;
  itemGrade: string;
  iconPath?: string;
  price: number;
  updated: string;
}

export interface TripodPrice {
  skillName: string;
  tripodName: string;
  price: number;
  updated: string;
}

export interface TripodSearchFilter {
  className: string;
}
