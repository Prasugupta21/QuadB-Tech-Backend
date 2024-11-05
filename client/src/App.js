import ConnectTelegram from "./components/ConnectTelegram";
import HodlInfo from "./components/HalloInfo";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={    <HodlInfo/> } />
<Route path='/connect' element={<ConnectTelegram/>} />
    </Routes>

    </>
  );
}

export default App;
