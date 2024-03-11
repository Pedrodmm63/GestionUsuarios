import { UserList } from "./UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserCreate } from "./UserCreate";
import { UserUpdate } from "./UserUpdate";
import  { NavBar } from "./NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/create" element={<UserCreate />}></Route>
        <Route path="/update/:id" element={<UserUpdate />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
