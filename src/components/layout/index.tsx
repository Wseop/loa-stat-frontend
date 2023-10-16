import styled from '@emotion/styled';
import Footer from './footer';
import Navigation from './navigation';

interface LayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
