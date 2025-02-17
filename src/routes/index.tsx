/* eslint-disable prettier/prettier */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@screens/Home";
import NotFound from "@screens/NotFound";
import About from "@components/About";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"*"} element={<NotFound />} />
                <Route path={"/About"} element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
