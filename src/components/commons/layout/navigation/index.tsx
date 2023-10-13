import styled from '@emotion/styled';
import { NaviButton } from '../../buttons/navi-button';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 10px;
  text-align: center;
`;

const menus = ['홈', '캐릭터 통계', '시세', '카던/가토'];
const routes = ['/', '/characters', '/market-price', '/rewards'];

export default function Navigation(): JSX.Element {
  const router = useRouter();

  const onClickMovePage = (route: string) => () => {
    router.push(route);
  };

  return (
    <Wrapper>
      {menus.map((v, i) => (
        <NaviButton key={v} onClick={onClickMovePage(routes[i])}>
          {v}
        </NaviButton>
      ))}
    </Wrapper>
  );
}
