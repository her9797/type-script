import React from "react";
import { BrowserRouter, Route, Routes }  from "react-router-dom"

import Main from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Main} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;