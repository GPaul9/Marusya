import styles from './MainLayout.module.scss';

import { Outlet } from 'react-router-dom';
import { Footer, Header } from "@/components";

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
