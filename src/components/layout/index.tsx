import styled from '@emotion/styled';
import Footer from './footer';
import Navigation from './navigation';

interface LayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <Wrapper>
      <Navigation />
      <Body>{props.children}</Body>
      <Footer />
    </Wrapper>
  );
}
