import styled from '@emotion/styled';
import Footer from './footer';
import Navigation from './navigation';

interface LayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  width: 1920px;
  display: block;
  text-align: center;
`;

const Body = styled.div`
  display: inline-block;
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
