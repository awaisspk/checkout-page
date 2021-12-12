import {Flex} from '@components/Flex';
import {TextInput} from '@components/TextInput';
import {H2} from '@components/Typography';
import {styled} from '@stitches';
import {HiPhone} from 'react-icons/hi';
import {MdEmail} from 'react-icons/md';

const Section = styled('section', Flex, {});
export const ContactInfo = () => {
  return (
    <Section flow="col" gap="4">
      <H2>Contact information</H2>
      <Flex flow="col" gap="4">
        <TextInput
          type="email"
          id="email"
          label="Email"
          placeholder="Enter your email..."
        >
          <MdEmail />
        </TextInput>
        <TextInput
          type="tel"
          id="tel"
          label="Phone"
          placeholder="Enter your phone..."
        >
          <HiPhone />
        </TextInput>
      </Flex>
    </Section>
  );
};
