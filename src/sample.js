function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <input placeholder='Write a number...' type='text' />
      <input placeholder='And another one...' type='text' />
      <input placeholder='Select operation' type='text' />
      <select name='' id=''>
        <label htmlFor=''></label>
        <option value='add'>+</option>
        <option value='subtract'>-</option>
        <option value='divide'>/</option>
        <option value='multiply'>*</option>
      </select>
      <button>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      <button onClick={() => onsubmit()}>Calculator</button>
      <span>
        {left}, {right}
      </span>
      <span>The Result:{result} </span>
      <p>Result: </p>
    </div>
  );
}
