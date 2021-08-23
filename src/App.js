import React  from 'react';
import 'tachyons';
import {robots} from './Robots'
import Cardlist from './components/Cardlist.js';
function App() {

 return(
   <div className="">
<Cardlist robots={robots}/>
   </div>
 )
}

export default App;
