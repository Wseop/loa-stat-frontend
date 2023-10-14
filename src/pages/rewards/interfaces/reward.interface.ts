export interface Reward {
  level: string;
  total: number;
  tradableGoldValue: number;
  goldValue: number;
  reward: {
    [key: string]: {
      min: number;
      max: number;
      avg: number;
    };
  };
}

export interface RewardsPresenterProps {
  categories: string[];
  onClickCategory: (category: string) => () => void;
  rewards: Reward[];
}
