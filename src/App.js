
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TeaPage } from "./Containers/TeaPage/TeaPage";
import { OneTeaPage } from "./Containers/oneTeaPage/OneTeaPage";
import { routes } from "./helpers/routes";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.tea} element={<TeaPage />} />
        <Route path={routes.oneTea} element={<OneTeaPage />} />
      </Routes>
    </div>
  );
}

export default App;
