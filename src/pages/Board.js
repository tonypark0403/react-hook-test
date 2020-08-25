import React, { useState, useEffect } from 'react';
import BoardItem from '../components/BoardItem';

const data = [
  {
    id: 1,
    name: 'Emma',
    points: 0,
  },
  {
    id: 2,
    name: 'Noah',
    points: 0,
  },
  {
    id: 3,
    name: 'James',
    points: 0,
  },
  {
    id: 4,
    name: 'William',
    points: 0,
  },
  {
    id: 5,
    name: 'Olivia',
    points: 0,
  },
];

const Board = () => {
  const [players, setPlayers] = useState([]);

  const sortData = (arr) => {
    arr.sort((a, b) => {
      if (b.points === a.points) {
        return a.name.localeCompare(b.name);
      }
      return b.points - a.points;
    });
  };

  useEffect(() => {
    sortData(data);
    setPlayers(data);
  }, []);

  const updateScore = (name, score) => {
    console.log(name, score);
    const updatedPlayer = players.find((e) => e.name === name);
    updatedPlayer.points = score;
    sortData(players);
    setPlayers([...players]);
  };

  return players.map((user) => (
    <BoardItem
      key={user.id}
      name={user.name}
      points={user.points}
      updateScore={updateScore}
    />
  ));
};

export default Board;
