import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Header } from '../components/Header'
import { Alert } from '../components/Alert';
import { Medicine } from '../components/Medicine';

export const Main = () => {
  // ログイン後の画面
  return(
    <div>
      <Header />

        <Routes>
          <Route path="/alert" element={<Alert />} />
          <Route path="/medicine" element={<Medicine />} />
        </Routes>
    </div>
  );
}