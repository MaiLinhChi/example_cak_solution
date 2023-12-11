import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages";
import { Wrapper } from "./Wrapper";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
