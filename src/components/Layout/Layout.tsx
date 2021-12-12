import {Footer} from '@components/Footer';
import {Header} from '@components/Header';
import {styled} from '@stitches';

const StyledLayout = styled('main', {
  width: 'min(1000px, 90%)',
  marginX: 'auto',
  minH: '100vh',
  display: 'grid',
  gridTemplateRows: '100px auto 40px',
});

type LayoutProps = {
  header?: boolean;
  footer?: boolean;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const {footer, header, children} = props;
  return (
    <StyledLayout>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </StyledLayout>
  );
};
