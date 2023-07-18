import './App.css';
/* import {PanelTasks} from './components/PanelTasks/PanelTasks'*/
import {Layaout} from './components/Layout/Layaout' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PanelProducts } from './components/panelProducts/PanelProducts';
import { DataProvider } from './context/Context';
import { SingleProduct } from './components/SingleProduct/SingleProduct';


function App() {
  return (
  <>
    <DataProvider>

      <BrowserRouter>
        <Routes> 
          <Route path="/"  exact element={<PanelProducts/>} />
          <Route path="/products/:id"   element={<SingleProduct/>} />
          {/*   <Route path="/panel-tasks/:token" element={<PanelTasks/>}/>  */}
          <Route path="/login" element={<Layaout />} />    
          <Route path="*" element={<p>Not Found</p>} />    
          {/* <Route path="/chat-bot" element={<PanelChat />} />     */}
       </Routes> 
      </BrowserRouter>   
    </DataProvider>
  </>
  );
}

export default App;
