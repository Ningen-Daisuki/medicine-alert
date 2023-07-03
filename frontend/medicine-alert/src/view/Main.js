import { Routes,Route,useParams } from 'react-router-dom';
import { Header } from '../components/Header'
import { Alert } from '../components/Alert';
import { Medicine } from '../components/Medicine';

export const Main = () => {
  const {userId} = useParams();
  // ログイン後の画面
  return(
    <div>
      <Header />

        <Routes>
          <Route path="/" element={<Alert />} />
          <Route path="/medicine" element={<Medicine />} />
        </Routes>
    </div>
  );
}