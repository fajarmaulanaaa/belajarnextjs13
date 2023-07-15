import { ReactNode } from 'react';
import Footer from '../components/Footer';

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div>
      <header>
        <h1>ini layout User</h1>
      </header>
      <div className="container">
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default UserLayout;
