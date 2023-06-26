import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Header } from '../components/Header'
import { Alert } from '../components/Alert';
import { Medicine } from '../components/Medicine';

export const Main = () => {
  return(
    <div>
      <Header />

        <Routes>
          <Route path="/" element={<Alert />} />
          <Route path="/:userId/medicine" element={<Medicine />} />
        </Routes>
    </div>
  );
}