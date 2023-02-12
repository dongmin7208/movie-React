import Button from './Button';
import Button2 from './Button';
import styles from './Button.module.css';
import { useState, useEffect, SetStateAction } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => {
    setCount(count + 1);
  };
  const onChange = (event: { target: { value: SetStateAction<string> } }) =>
    setKeyword(event.target.value);

  useEffect(() => {
    console.log('I run only once.!!');
  }, []);
  useEffect(() => {
    console.log('I run when keyword changes.!!');
  }, [keyword]);

  useEffect(() => {
    // if (keyword !== '' && keyword.length > 5) return;
    console.log('Search for');
  }, [count]);
  useEffect(() => {
    console.log('I run when keyword && counter changes');
  }, [count, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search hrer...!!'
      />
      <h1 className={styles.title}>Welcome back!!!</h1>
      button count: {count}
      <button onClick={onClick}>Click me</button>
      <br />
      <Button text={'Click me'} />
      <Button2 text={'Click me2'} />
    </div>
  );
};

export default App;
