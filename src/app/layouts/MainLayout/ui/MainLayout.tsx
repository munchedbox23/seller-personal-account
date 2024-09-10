import { Outlet } from "react-router-dom";
import Logo from "@/shared/assets/images/avito.png";
import { FC } from "react";

export const MainLayout: FC = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="Avito logo" />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
