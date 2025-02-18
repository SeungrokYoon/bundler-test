import "./style.css";
import styled from "styled-components";

const Button = styled.div`
  background: papayawhip;
  font-size: 2rem;
  color: red;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid black;
`;

export default function App() {
  return (
    <div>
      <h1 className="main-title">Hello, world</h1>
      <Button>Click me</Button>
    </div>
  );
}
