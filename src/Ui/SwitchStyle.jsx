import { styled } from "styled-components";

// export const Toggle = styled.div`
//   position: relative;
//   width: calc(var(--sz) * 4);
//   height: calc(var(--sz) * 2);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
export const SwitchContainer = styled.div`
  display: grid;
  place-items: center;
  height: 70px;
  width: 100%;
  padding: 10px 0;
`;

export const BulbSwitch = styled.div`
  display: grid;
  place-items: center;
  color: ${(props) => props.handleBulb ? '#ffffff' : '#0c0c0c'};
  font-size: 22px;
  height: 50px;
  width: 70px;
  border-radius: 8px;
  /* background-color: var(--on); */
  background-color:${(props) => props.handleBulb ? 'var(--on)' : 'var(--off)'} ;
  cursor : pointer;
  box-shadow: inset -3px -3px 6px rgba(0, 0, 0, 0.3),
    inset 3px 3px 6px rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease-in-out;
`;
