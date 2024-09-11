import { Outlet } from "react-router-dom";
import Logo from "@/shared/assets/images/avito.png";
import { FC } from "react";
import { Modal } from "@/shared/ui/Modal/ui/Modal";

export const MainLayout: FC = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="Avito logo" />
      </header>
      <Modal onClose={() => console.log(1)} />
    </>
  );
};
