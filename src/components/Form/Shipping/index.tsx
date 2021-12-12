import {Flex} from '@components/Flex';
import {TextInput} from '@components/TextInput';
import {H2} from '@components/Typography';
import {styled} from '@stitches';
import {HiHome} from 'react-icons/hi';
import {IoEarth, IoPersonCircle} from 'react-icons/io5';
import {MdOutlineLocationCity} from 'react-icons/md';

const Section = styled('section', Flex, {});

export const ShippingAddress = () => {
  return (
    <Section flow="col" gap="4">
      <H2>Shipping address</H2>
      <Flex flow="col" gap="4">
        <TextInput
          type="text"
          id="name"
          label="Full name"
          placeholder="Your name..."
        >
          <IoPersonCircle />
        </TextInput>
        <TextInput
          type="text"
          id="home"
          label="Address"
          placeholder="Your address..."
        >
          <HiHome />
        </TextInput>
        <TextInput
          type="text"
          id="City"
          label="City"
          placeholder="Your city..."
        >
          <MdOutlineLocationCity />
        </TextInput>
        <Flex
          flow={{
            '@initial': 'col',
            '@bp1': 'row',
          }}
          gap="3"
        >
          <TextInput
            type="text"
            id="country"
            label="Country"
            placeholder="Your country..."
          >
            <IoEarth />
          </TextInput>
          <TextInput
            type="number"
            id="postal-code"
            label="Postal code"
            placeholder="Your postal code..."
          ></TextInput>
        </Flex>
      </Flex>
    </Section>
  );
};
