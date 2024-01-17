import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const setName = async () => {
      const storedData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);

      // Check if storedData is not null
      if (storedData !== null) {
        // Parse the JSON and access the 'username' property
        const parsedData = JSON.parse(storedData);
        const username = parsedData.username;
  
        // Update the state with the username
        setUserName(username);
      } else {
        // Handle the case where the item is not found in localStorage
        console.error("Item not found in localStorage");
      }
  };
  setName();
}, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;