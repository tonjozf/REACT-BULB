import { styled } from "styled-components";

export const BulbContainer = styled.div`
  width : 100%;
  height: 100px;
  display: grid;
  place-items: center;
  padding : 20px 0;
`;
export const Bulb = styled.img`
  width: ${(props) => props.size || "100px"};
  height: 100%;
`;
