import React, { useState } from 'react';
import styled from 'styled-components';

export default function SearchBar() {
  const [text, setText] = useState('');

  const handleTextChanged = (event) => {
    setText(event.target.value);
  };

  const handleTextSubmitted = (event) => {
    event.preventDefault();
    setText('');
  };

  return (
    <Wrapper onSubmit={handleTextSubmitted}>
      <Glass>🔍</Glass>
      <Search name="text" value={text} placeholder="이름으로 검색" onChange={handleTextChanged} />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  height: 70px;

  margin-top: 30px;

  //border: 2px solid white; 후순위 구현
  border-radius: 6px;

  background-color: #ededed;

  display: flex;
`;

const Glass = styled.span`
  margin-top: 20px;
  margin-left: 30px;
`;

const Search = styled.input`
  width: 95%;

  padding: 13px;
  margin: 0;
  margin-right: 5px;

  border: 0;

  background-color: #ededed;

  font-size: 20px;
  outline: none;
`;
