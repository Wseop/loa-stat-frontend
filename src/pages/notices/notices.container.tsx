import { useEffect, useState } from 'react';
import NoticesPresenter from './notices.presenter';
import { Notice } from '../../interfaces/notices.interface';
import axios from 'axios';

const MAX_NOTICE = 10;
const PAGE_NOTICES = [
  '[캐릭터 통계] 1620이상, 레이드 세팅, 엘릭서 효과가 활성화된 캐릭터 정보만 통계에 포함됩니다.',
  '[캐릭터 통계] 스킬 레벨이 2이상이거나 룬을 착용한 경우 스킬 채용률에 포함됩니다.',
  '[캐릭터 통계] 밸런스 패치 이전의 캐릭터 정보가 섞여있을 수 있습니다.',
  '[캐릭터 통계] 밸런스 패치 직후에는 신뢰도가 떨어질 수 있습니다.',
  '[카던/가토] 휴식 게이지가 적용되지 않은 일일 수확량 기준으로 표기됩니다.',
  '[카던/가토] 수익은 시세 페이지의 실시간 최저가를 기준으로 계산됩니다.',
];

export default function NoticesContainer() {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/notices`)
      .then((result) => {
        setNotices(result.data.slice(0, MAX_NOTICE));
      })
      .catch((error) => {
        if (error.response) console.log(error.response.status);
        else if (error.request) console.log(error.request);
        else console.log(error.message);
      });
  }, []);

  return <NoticesPresenter notices={notices} pageNotices={PAGE_NOTICES} />;
}
