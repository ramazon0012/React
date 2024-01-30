import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(1);

  const [infosType, setinfosType] = useState('posts');

  // useEffect(() => {
  //     document.title = `Siz ${count} marta bosdingiz`;
  //     console.log(count)
  // })
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${infosType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      {/* <p>Siz {count} marta bosdingiz</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
      <button onClick={() => setinfosType('users')}>Users</button>
      <button onClick={() => setinfosType('comments')}>Comments</button>
      <button onClick={() => setinfosType('todos')}>Todos</button>
    </div>
  );
};
export default Effect;
