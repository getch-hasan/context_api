
import './App.css';
import Useres from './Components/Useres';
import Createuser from './Components/Createuser';
import UsersProvider from './Contex/UsersContext';


function App() {

  return (

    <UsersProvider>
      <div className="App">
        <Createuser></Createuser>
        <Useres></Useres>
      </div>
    </UsersProvider>

  );
}

export default App;
