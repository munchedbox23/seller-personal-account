import { Outlet } from "react-router-dom";
import Logo from "@/shared/assets/images/avito.png";
import classes from "./MainLayout.module.css";
import { FC } from "react";

export const MainLayout: FC = () => {
  return (
    <>
      <header className={classes.header}>
        <img src={Logo} alt="Avito logo" />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
