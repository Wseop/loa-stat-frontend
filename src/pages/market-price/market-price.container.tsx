import { useState } from 'react';
import MarketPricePresenter from './market-price.presenter';
import { ItemPrice } from './interfaces/market-price.interface';
import axios from 'axios';

const categories = ['재련 재료', '보석', '각인서', '에스더의 기운'];

export default function MarketPriceContainer() {
  const [marketPrice, setMarketPrice] = useState<ItemPrice[]>([]);
  const [category, setCategory] = useState<string>('재련 재료');

  const onClickCategory = (category: string) => () => {
    setCategory(category);

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

  return (
    <MarketPricePresenter
      categories={categories}
      category={category}
      onClickCategory={onClickCategory}
      itemPrices={marketPrice}
    />
  );
}
