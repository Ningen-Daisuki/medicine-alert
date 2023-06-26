import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import { Lp } from './view/Lp';
import { MemberRegist } from './view/MemberRegist';
import { Login } from './view/Login';
import { NoMatch } from './view/NoMatch';
import { Main } from './view/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Lp />} />
          <Route path="/memberRegist" element={<MemberRegist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:userId" element={<Main />}/>
          <Route path="*" element={ <NoMatch /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
