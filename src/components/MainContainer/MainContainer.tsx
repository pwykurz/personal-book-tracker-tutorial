import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <main className="flex-grow mx-auto px-4 pt-20 w-full">
      {children}
    </main>
  );
};

export default MainContainer;
