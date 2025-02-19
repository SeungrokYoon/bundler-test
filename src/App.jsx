import './style.css';
import { styled } from 'styled-components';

const Button = styled.div`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;

  font-size: 2rem;
  color: red;

  background: papayawhip;
`;

export default function App() {
  return (
    <div>
      <h1 className="main-title">Hello, world</h1>
      <Button>Click me</Button>
    </div>
  );
}
