import { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <header>
        <h1>ini layout admin</h1>
      </header>
      <div className="container">
        <aside>
          <p>admin</p>
        </aside>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
