import React from 'react';
import styled from 'styled-components';

export default function Cell({ name, img, message }) {
  return (
    <Wrapper>
      {/* <Button> */}
      <Img src={img} alt={name} />
      <VStack>
        <Name>{name}</Name>
        {message && <Message>{message}</Message>}
      </VStack>
      {/* </Button> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;

  padding: 0;

  border: none;

  display: flex;
  align-items: center;

  background-color: white;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-around;
`;

const Img = styled.img`
  width: 46px;
  height: 46px;

  margin: 16px 10px;
  border-radius: 15px;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

const Message = styled.div`
  margin-top: 8px;
  font-size: 10px;
  font-weight: lighter;
`;
