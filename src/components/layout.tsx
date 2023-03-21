import React from 'react';
import Navigation from './navigation';

function Layout({
  children,
}: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  );
}

export default Layout;
