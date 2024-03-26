import Header from './Components/Header_Component/Header';
import Acca from './Components/ACCA_Component/Acca'
import AccaLearn from './Components/ACCA_Learn_Component/AccaLearn'
import PlacementAssistance from './Components/Placement_Assistance_Component/PlacementAssistance';
import JourneyComponent from './Components/ACCA_Prep_Journey_Component/JourneyComponent';
import ChooseUsComponent from './Components/Choose_Us_Component/ChooseUsComponent'
import EligibilityComponent from './Components/ACCA_Eligibility_Component/EligibilityComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Acca/>
      <ChooseUsComponent/>
      <EligibilityComponent/>
      <AccaLearn/>
      <PlacementAssistance/>
      <JourneyComponent/>
    </div>
  );
}

export default App;
