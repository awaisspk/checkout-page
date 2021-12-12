import {Flex} from '@components/Flex';
import {ContactInfo} from './ContactInfo';
import {ShippingAddress} from './Shipping';

export const Form = () => {
  return (
    <Flex flow="col" css={{width: 'min(450px,100%)'}} gap="8">
      <ContactInfo />
      <ShippingAddress />
    </Flex>
  );
};
