import { useEffect, useState } from 'react';
import MarketPricePresenter from './market-price.presenter';
import {
  ItemPrice,
  TripodPrice,
  TripodSearchFilter,
} from '../../interfaces/market-price.interface';
import axios from 'axios';

const categories = [
  '재련 재료',
  '보석',
  '전설 각인서',
  '트라이포드',
  '에스더의 기운',
];

export default function MarketPriceContainer() {
  const [marketPrice, setMarketPrice] = useState<ItemPrice[]>([]);
  const [tripodPrices, setTripodPrices] = useState<TripodPrice[]>([]);
  const [category, setCategory] = useState<string>('재련 재료');

  const onClickCategory = (category: string) => () => {
    setCategory(category);

    if (category === '트라이포드') return;

    axios
      .get(`${process.env.NEXT_PUBLIC_API}/marketprice/${category}`)
      .then((result) => {
        setMarketPrice(result.data);
      })
      .catch((error) => {
        if (error.response) console.log(error.response.status);
        else if (error.request) console.log(error.request);
        else console.log(error.message);
      });
  };

  const onClickTripodSearch = (tripodSearchFilter: TripodSearchFilter) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API}/marketprice/tripods/${tripodSearchFilter.className}`
      )
      .then((result) => {
        setTripodPrices(result.data);
      })
      .catch((error) => {
        if (error.response) console.log(error.response.status);
        else if (error.request) console.log(error.request);
        else console.log(error.message);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/marketprice/재련 재료`)
      .then((result) => {
        setMarketPrice(result.data);
      })
      .catch((error) => {
        if (error.response) console.log(error.response.status);
        else if (error.request) console.log(error.request);
        else console.log(error.message);
      });
  }, []);

  return (
    <MarketPricePresenter
      categories={categories}
      category={category}
      onClickCategory={onClickCategory}
      onClickTripodSearch={onClickTripodSearch}
      itemPrices={marketPrice}
      tripodPrices={tripodPrices}
    />
  );
}
