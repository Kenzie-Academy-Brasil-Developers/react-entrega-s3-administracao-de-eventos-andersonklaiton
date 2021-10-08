import styled from "styled-components";

export const ContainerDrinks = styled.div`
  display: flex;
  font-size: 12px;
  img {
    width: 40px;
    height: auto;
    margin: 0 auto;
  }
`;

export const ListDrinks = styled.div`
  display: flex;
  margin: 50px auto;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  li {
    display: flex;
    flex-direction: column;
    margin: 5px;
    list-style: none;
    border: 1px solid black;
    width: 200px;
    height: auto;
    justify-content: space-between;
    border-radius: 10px;
  }
  @media screen and (min-width: 600px) {
    margin: 50px auto;
    align-items: flex-start;
    width: 80%;
  }
`;

export const ButtonWed = styled.button`
  border-radius: 10px 10px 0 0;
  border: none;
  background-color: lightblue;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: lightgreen;
    border: 1px solid black;
  }
`;

export const ButtonConf = styled.button`
  border: none;
  background-color: lightblue;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: lightgreen;
    border: 1px solid black;
  }
`;

export const ButtonGra = styled.button`
  border: none;
  border-radius: 0 0 10px 10px;
  background-color: lightblue;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: lightgreen;
    border: 1px solid black;
  }
`;

export const ButtonRem = styled.button`
  border: none;
  border-radius: 0 0 10px 10px;
  background-color: lightblue;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: lightgreen;
    border: 1px solid black;
  }
`;
