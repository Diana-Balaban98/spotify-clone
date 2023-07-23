import React from 'react';
import styled from "styled-components";

export const Login = () => {
    const handleClick = () => {
        alert("click")
    }

    return <Container>
        <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
            alt="spotify"/>
        <button onClick={handleClick}>Connect Spotify</button>
    </Container>
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 30vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
`
