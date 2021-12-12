import {Flex} from '@components/Flex';
import {styled} from '@stitches';

const Layout = styled('label', {
  color: 'rgba(79, 79, 79, 1)',
  fontSize: '0.8rem',
  fontWeight: '$600',
});

const Input = styled('input', {
  all: 'unset',
  fontSize: '1rem',
  color: 'rgba(130, 130, 130, 1)',
  width: '100%',
  backgroundColor: 'transparent',
});

const Box = styled('div', Flex, {
  border: '1px solid rgba(130, 130, 130, 1)',
  borderRadius: '0.5em',
  height: '50px',
  width: '100%',
  px: '0.8em',

  '& svg': {
    mr: '10px',
    size: '1.3rem',
    fill: 'rgba(130, 130, 130, 1)',
  },
});

type TextInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  id?: string;
};

export const TextInput = (props: TextInputProps) => {
  const {css, label, id, type, children, placeholder, ...rest} = props;
  return (
    <Flex flow="col" gap="1" css={css}>
      <Layout htmlFor={id}>{label}</Layout>
      <Box cross="center">
        {children}
        <Input type={type} id={id} placeholder={placeholder} {...rest} />
      </Box>
    </Flex>
  );
};
