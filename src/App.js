import { Route } from 'react-router-dom';
import './App.css';
import Inventory from './components/inventory/inventory';
import StartLocation from './locations/01_dungeon/01_01_startLocation/StartLocation';
import StartLocationOpenDoor from './locations/01_dungeon/01_02_startLocationOpenDoor/StartLocationOpenDoor';
import Deadlock from './locations/01_dungeon/01_03_deadlock/Deadlock';
import PlaceWithCrowbar from './locations/01_dungeon/01_04_placeWithCrowbar/PlaceWithCrowbar';
import Prison from './locations/02_prison/02_01_prison/Prison';
import Location2 from './locations/location2/Location2';
import MenInPrison from './locations/02_prison/02_02_menInPrison/MenInPrison';
import Skeletons from './locations/02_prison/02_03_skeletons/Skeletons';
import RoomWithGuards from './locations/03_guardiens/03_01_roomWithGuards/RoomWithGuards';
import Room from './locations/03_guardiens/03_02_room/Room';

const App = (props) => {
  return (
    <div className="App">
      <Route exact path='/' render={() => <StartLocation/>} />
      <Route exact path='/startLocationOpenDoor' render={() => <StartLocationOpenDoor/>} />
      <Route exact path='/deadlock' render={() => <Deadlock/>} />
      <Route exact path='/placeWithCrowbar' render={() => <PlaceWithCrowbar/>} />
      <Route path='/prison' render={() => <Prison/>} />
      <Route path='/menInPrison' render={() => <MenInPrison/>} />
      <Route path='/skeletons' render={() => <Skeletons/>} />
      <Route path='/roomWithGuards' render={() => <RoomWithGuards/>} />
      <Route path='/room' render={() => <Room/>} />
      <Route path='/location2' render={() => <Location2/>} />
      <Inventory/>
    </div>
  );
}

export default App;
