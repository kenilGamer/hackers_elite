import React from "react";
import styled from "styled-components";

const Cardteam = ({ title, roll, imgs }) => {
  return (
    <StyledWrapper>
      <div className="cards">
        <div className="cards-border-top"></div>
        <div className="img overflow-hidden">
            <img src={`${imgs}`} alt="" />
        </div>
        <span> {title}</span>
        <p className="job"> {roll}</p>
        <button> Click</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
 
`;

export default Cardteam;
