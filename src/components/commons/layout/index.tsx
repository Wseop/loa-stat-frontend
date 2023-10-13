import Footer from './footer';
import Navigation from './navigation';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
}
