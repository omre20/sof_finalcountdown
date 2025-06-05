import { useRef, useState } from 'react';

export default function Player() {

  const playerName = useRef();
  const [name, setName] = useState('');

  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : ""}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}> Set Name</button>
      </p>
    </section>
  );
}
