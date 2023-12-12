import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Home } from "../pages";
import { Homes } from "../components/Main/Homes";
import { Wrapper } from "./Wrapper";
import TodoList from "../pages/TodoList";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
