import './App.css';
import Bath from './Bath';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';


function FloorPlan() {
  return (
    <>
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size={'Full'}/>
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size={'Half'}/>
      <Bedroom bedNum={3} />
    </>
  );
}

export default FloorPlan