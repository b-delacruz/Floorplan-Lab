import './App.css';
import Bath1 from './Bath1';
import Bath2 from './Bath2';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom1 from './Bedroom1';
import Bedroom2 from './Bedroom2';
import Bedroom3 from './Bedroom3';

function FloorPlan() {
  return (
    <>
      <Bedroom1 bedNum={1} />
      <Kitchen />
      <Bath1 size={'Full'}/>
      <Bedroom2 bedNum={2} />
      <LivingRoom />
      <Bath2 size={'Half'}/>
      <Bedroom3 bedNum={3} />
    </>
  );
}

export default FloorPlan