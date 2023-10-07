import { styled } from 'styled-components';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const Styledapp = styled.div`
  /* background-color: orangered; */
  padding: 2rem;
`;

const App = () => {
  return (
    <Styledapp>
      <Heading as="h1">hotel</Heading>
      <Heading as="h2">cheack in</Heading>
      <Heading as="h3">cheak out</Heading>
      <Button>cheak in</Button>
      <Button>cheak out</Button>
      <Input type="number" placeholder="num of guest" />
    </Styledapp>
  );
};

export default App;
