import {Flex} from '@components/Flex';
import {TextInput} from '@components/TextInput';
import {H3, Text} from '@components/Typography';
import {styled} from '@stitches';
import Image from 'next/image';
import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';

const Imagecontainer = styled('div', {
  position: 'relative',
  display: 'block',
  borderRadius: '0.8em',
  overflow: 'hidden',
  size: '130px',
  '@bp2': {
    size: '150px',
  },
});

type Props = {
  imgSrc: string;
  name: string;
  price: number;
  oldPrice: number;
  setTotal: Dispatch<SetStateAction<number>>;
};

export const SingleProduct = (props: Props) => {
  const {name, price, imgSrc, oldPrice, setTotal} = props;
  const [count, setCount] = useState(1);
  const prevPriceRef = useRef<number>();
  const [productPrice, setProductPrice] = useState(price);

  useEffect(() => {
    prevPriceRef.current = productPrice;
  });

  const prevPrice = prevPriceRef.current;

  useEffect(() => {
    if (prevPrice!! > count * price) {
      setTotal((state) => state - (prevPrice!! - count * price));
      setProductPrice(count * price);
    } else if (prevPrice!! < count * price) {
      setTotal((state) => state + (count * price - prevPrice!!));
      setProductPrice(count * price);
    }
  }, [count, price, prevPrice, setTotal, setProductPrice]);

  return (
    <Flex as="section" gap="4">
      <Imagecontainer>
        <Image
          src={imgSrc}
          alt="product"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Imagecontainer>
      <Flex flow="col" main="spaceBtw">
        <Flex flow="col" gap="1">
          <H3>{name}</H3>
          <Flex gap="2">
            <Text css={{color: 'rgba(242, 153, 74, 1)'}}>${price}</Text>
            <Text css={{fontSize: '0.8rem'}}>${oldPrice}</Text>
          </Flex>
        </Flex>
        <TextInput
          type="number"
          min="0"
          css={{width: '100px', '@bp1': {width: '150px'}}}
          onChange={(e) => setCount(parseFloat(e.target.value))}
          value={count}
        />
      </Flex>
    </Flex>
  );
};

const Aside = styled('aside', Flex, {
  width: 'min(400px,100%)',
  background: 'rgba(242, 242, 242, 1)',
  borderRadius: '1.5rem',
  alignSelf: 'start',
  py: '$4',
});

export const Product = () => {
  const [total, setTotal] = useState(0);
  const shipping = 0;

  return (
    <Aside flow="col" center gap="11" css={{py: '$6', px: '$3'}}>
      <Flex flow="col" css={{marginX: 'auto', width: '90%'}} gap="6">
        <SingleProduct
          name="vintage Backbag"
          price={59.99}
          oldPrice={94.99}
          imgSrc="/images/photo1.png"
          setTotal={setTotal}
        />
        <SingleProduct
          name="vintage Backbag"
          price={79.99}
          oldPrice={94.99}
          imgSrc="/images/photo1.png"
          setTotal={setTotal}
        />
      </Flex>
      <Flex
        flow="col"
        gap="2"
        css={{
          width: '80%',
          '& div': {
            borderTop: '1px solid rgba(189, 189, 189, 1)',
            py: '0.2rem',
          },
        }}
      >
        <Flex main="spaceBtw">
          <Text>Shipping</Text>
          <Text>${shipping}</Text>
        </Flex>
        <Flex main="spaceBtw">
          <Text>Total</Text>
          <Text>${(total + shipping).toFixed(2)}</Text>
        </Flex>
      </Flex>
    </Aside>
  );
};
