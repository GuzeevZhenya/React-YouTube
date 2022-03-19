import React from "react";
import { Main } from "../Components/Main/Main";
import { Navigation } from "../Components/Navigation/Navigation";

export const MainPages = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Main />
      </div>
    </>
  );
};
