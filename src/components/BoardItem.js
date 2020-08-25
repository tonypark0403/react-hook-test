import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.3rem;
`;

const Info = styled.div`
  font-size: 1rem;
  width: 200px;
  display: flex;
  justify-content: flex-end;
  margin-right: auto;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Button = styled.button`
  width: 40px;
  padding: 0.4rem;
  border-radius: 0.3rem;
  border: 1px solid ${(props) => props.theme.blackColor};
  background-color: transparent;
  font-weight: 600;
  margin-left: 0.8rem;
`;

const Score = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const BoardItem = ({ name, points, updateScore }) => {
  let [myPoint, setPoint] = useState(points);
  const handleClick = (e) => {
    const { innerText: action } = e.target;
    if (action === '+') {
      setPoint(++myPoint);
    } else {
      setPoint(myPoint > 0 ? --myPoint : myPoint);
    }
    updateScore(name, myPoint);
  };
  return (
    <Wrapper data-test='boardItem'>
      <Info>
        <Name>{name}</Name>
        <Button onClick={handleClick} data-test='increase'>
          +
        </Button>
        <Button onClick={handleClick} data-test='decrease'>
          -
        </Button>
      </Info>
      <Score data-test='score'>{myPoint} points</Score>
    </Wrapper>
  );
};

BoardItem.propTypes = {
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
};
export default BoardItem;
