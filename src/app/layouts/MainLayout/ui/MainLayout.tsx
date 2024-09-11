import { Outlet } from "react-router-dom";
import { FC } from "react";
import { AppHeader } from "@/widgets/Header";
import styles from "./MainLayout.module.css";

export const MainLayout: FC = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
