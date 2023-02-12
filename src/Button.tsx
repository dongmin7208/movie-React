import styled from './Button.module.css';

type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  return <button className={styled.btn}>{text}</button>;
};
export default Button;
