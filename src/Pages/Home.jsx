import { useState } from "react";
import { Bulb, BulbContainer } from "../Ui/Bulb";
import { Container, SubContainer } from "../Ui/Container";
import { BulbSwitch, SwitchContainer } from "../Ui/SwitchStyle";

export const Home = () => {
  const [handleBulb, setHandleBulb] = useState(false);
  return (
    <>
      <Container>
        <SubContainer>
          <BulbContainer>
            {handleBulb ? (
              <Bulb
                src="https://cdn-icons-png.flaticon.com/512/419/419954.png"
                alt="A bulb with a light on"
              />
            ) : (
              <Bulb
                src="https://icons.veryicon.com/png/o/business/my-library/light-bulb-14.png"
                alt="A bulb with a light off"
              />
            )}
          </BulbContainer>
          <SwitchContainer>
            <BulbSwitch handleBulb = {handleBulb} onClick = {()=> setHandleBulb(!handleBulb)}>
                {
                    handleBulb ? 'OFF': 'ON'
                }
            </BulbSwitch>
          </SwitchContainer>
        </SubContainer>
      </Container>
    </>
  );
};
