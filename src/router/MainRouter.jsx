import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Home } from "../pages";
import { Homes } from "../components/Main/Homes";
import { Wrapper } from "./Wrapper";
import Todos from "../pages/Todos";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          {/* <Route path="/" element={<Homes />} /> */}
          <Route path="/" element={<Todos />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
