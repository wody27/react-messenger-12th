import React from 'react';
import styled from 'styled-components';

export default function Header({ user, profileImg, changeUser }) {
    const handleButtonClick = () => {
        changeUser();
    };
    return (
        <Wrapper>
            <button onClick={handleButtonClick}>
                <img src={profileImg} />
            </button>
            <Stack>
                <h2>{user}</h2>
                <div>현재 활동중</div>
            </Stack>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    // 상단에 고정
    position: fixed;
    top: 0;
    width: 100%;

    height: 80px;
    background-color: white;
    opacity: 0.9;

    display: flex;
    flex-direction: row;

    button {
        width: 80px;
        height: 80px;
        margin: 0;
        padding: 5px;
        margin-left: 15px;

        background-color: white;
        border: none;
    }

    img {
        width: 70px;
        height: 70px;

        opacity: 1;
        border-radius: 15px;
    }
`;

const Stack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 10px;
    h2 {
        margin: 0;
        margin-bottom: 5px;
    }
`;
