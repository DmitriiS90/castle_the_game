import { Route } from 'react-router-dom';
import './App.css';
import Inventory from './components/inventory/inventory';
import StartLocation from './locations/01_dungeon/01_01_startLocation/StartLocation';
import StartLocationOpenDoor from './locations/01_dungeon/01_02_startLocationOpenDoor/StartLocationOpenDoor';
import Deadlock from './locations/01_dungeon/01_03_deadlock/Deadlock';
import PlaceWithCrowbar from './locations/01_dungeon/01_04_placeWithCrowbar/PlaceWithCrowbar';
import Prison from './locations/02_prison/02_01_prison/Prison';
import MenInPrison from './locations/02_prison/02_02_menInPrison/MenInPrison';
import Skeletons from './locations/02_prison/02_03_skeletons/Skeletons';
import RoomWithGuards from './locations/03_guardiens/03_01_roomWithGuards/RoomWithGuards';
import Room from './locations/03_guardiens/03_02_room/Room';
import Hall from './locations/04_main_hall/04_01_hall/Hall';
import Hallway from './locations/04_main_hall/04_02_hallway/Hallway';
import KingsRoom from './locations/04_main_hall/04_03_kings_room/KingsRoom';

const App = (props) => {
  return (
    <div className="App">
      <Inventory/>
      <Route exact path='/' render={() => <StartLocation/>} />
      <Route exact path='/startLocationOpenDoor' render={() => <StartLocationOpenDoor/>} />
      <Route exact path='/deadlock' render={() => <Deadlock/>} />
      <Route exact path='/placeWithCrowbar' render={() => <PlaceWithCrowbar/>} />
      <Route path='/prison' render={() => <Prison/>} />
      <Route path='/menInPrison' render={() => <MenInPrison/>} />
      <Route path='/skeletons' render={() => <Skeletons/>} />
      <Route path='/roomWithGuards' render={() => <RoomWithGuards/>} />
      <Route path='/room' render={() => <Room/>} />      
      <Route path='/hall' render={() => <Hall/>} />      
      <Route path='/hallway' render={() => <Hallway/>} />      
      <Route path='/kingsRoom' render={() => <KingsRoom/>} />      
    </div>
  );
}

export default App;
