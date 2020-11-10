import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function SearchBar({ sendText, placeholderName }) {
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    sendText(messageText);
  }, [messageText]);

  const handleTextChanged = (event) => {
    setMessageText(event.target.value);
  };

  const handleTextSubmitted = (event) => {
    event.preventDefault();
    setMessageText('');
  };

  return (
    <Wrapper onSubmit={handleTextSubmitted}>
      <Glass>🔍</Glass>
      <Search name="text" value={messageText} placeholder={placeholderName} onChange={handleTextChanged} />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  height: 30px;

  margin-top: 20px;

  //border: 2px solid white; 후순위 구현
  border-radius: 6px;

  background-color: #ededed;

  display: flex;
`;

const Glass = styled.span`
  margin-left: 12px;
  margin-right: 6px;
`;

const Search = styled.input`
  width: 95%;

  margin: 0;
  margin-right: 5px;

  border: 0;

  background-color: #ededed;

  font-size: 12px;
  outline: none;
`;
