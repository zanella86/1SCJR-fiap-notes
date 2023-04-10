import styled, { keyframes } from "styled-components";

interface PropsPriority {
  urgent: boolean;
}

const fadeIn = keyframes`
  from {
    transform: scale(0.2) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

export const Container = styled.article<PropsPriority>`
  width: 200px;
  height: 200px;
  padding: 10px;
  position: relative;

  color: var(--white);
  background-color: ${(props) => (props.urgent ? "#EE0000;" : "var(--primary);")};
  box-shadow: 2px 2px 10px #00000099;

  animation: ${fadeIn} ease-in .5s;

  p:first-child {
    font-size: 13px;
    margin-bottom: 10px;
    color: var(--gray);
  }

  .material-icons {
    position: absolute;
    bottom: 5px;
    right: 5px;

    font-size: 32px;
    cursor: pointer;
    transition: 0.3s;
  }

  .material-icons:not(#priority):hover  {
    color: #333;
    transform: scale(1.1);
    transform: rotate(360deg);
  }

  #priority {
    position: absolute;
    bottom: 5px;
    left: 0%;
    width: fit-content;
  }

  #delete {
    position: absolute;
    left: 85%;
    bottom: 5px;
    width: fit-content;    
  }

  #edit {
    position: absolute;
    left: 65%;
    bottom: 5px;
    width: fit-content;    
  }

  @media (max-width: 425px){
    width: 100%;
  }
`;
