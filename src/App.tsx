import Button from './Button';
import Button2 from './Button';
import styles from './Button.module.css';

const App = () => {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={'Click me'} />
      <Button2 text={'Click me2'} />
    </div>
  );
};

export default App;
