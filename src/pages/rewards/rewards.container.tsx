import axios from 'axios';
import { useEffect, useState } from 'react';
import RewardsPresenter from './rewards.presenter';
import { Reward } from './interfaces/reward.interface';

const categories = ['카오스던전', '가디언토벌'];

export default function RewardsContainer() {
  const [rewardsChaos, setRewardsChaos] = useState<Reward[]>([]);
  const [rewardsGuardian, setRewardsGuardian] = useState<Reward[]>([]);
  const [targetRewards, setTargetRewards] = useState<Reward[]>([]);

  const onClickCategory = (category: string) => () => {
    if (category === '카오스던전') {
      setTargetRewards(rewardsChaos);
    } else if (category === '가디언토벌') {
      setTargetRewards(rewardsGuardian);
    }
  };

  // reward data 초기화
  useEffect(() => {
    categories.forEach((category) => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/rewards/${category}`)
        .then((result) => {
          const rewards = [...result.data].reverse();
          if (category === '카오스던전') {
            setRewardsChaos(rewards);
            setTargetRewards(rewards);
          } else if (category === '가디언토벌') {
            setRewardsGuardian(rewards);
          }
        })
        .catch((error) => {
          if (error.response) console.log(error.response.status);
          else if (error.request) console.log(error.request);
          else console.log(error.message);
        });
    });
  }, []);

  return (
    <RewardsPresenter
      categories={categories}
      onClickCategory={onClickCategory}
      rewards={targetRewards}
    />
  );
}
