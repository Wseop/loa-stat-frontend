import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { MenuButton } from '../commons/button';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <MenuButton key={v} onClick={onClickMovePage(routes[i])}>
          {v}
        </MenuButton>
      ))}
    </Wrapper>
  );
}
