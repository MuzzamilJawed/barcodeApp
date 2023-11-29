import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import QRScanner from "./components/QRScanner";
import FinalPage from "./components/FinalPage";

const App = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRScanner />} />
        <Route path="/:id" element={<FinalPage data={id} />} />
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
};
export default App;
