import {Flex} from '@components/Flex';
import {Form} from '@components/Form';
import {Layout} from '@components/Layout';
import {Product} from '@components/Product';
import type {NextPage} from 'next';
import {ReactElement} from 'react';

type PageProps = NextPage & {
  getLayout: (page: ReactElement) => JSX.Element;
};

const Home: PageProps = () => {
  return (
    <Flex
      flow={{
        '@initial': 'col',
        '@bp3': 'rowReverse',
      }}
      main="spaceBtw"
      gap="9"
    >
      <Product />
      <Form />
    </Flex>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout footer header>
      {page}
    </Layout>
  );
};

export default Home;
