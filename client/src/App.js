import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import MyNav from './components/MyNav/MyNav';
import {
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import Post from './components/Post/Post';
import ShockContent from './components/ShockContent/ShockContent';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';

function App() {
  return (
    <Container>
      <MyNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post/:id" element={<Post />} />
        <Route 
          path='/shock' 
          element={(
          <PrivateRouter>
            <ShockContent />
          </PrivateRouter>
        )} 
        />
      </Routes>
    </Container>
  );
}

export default App;
