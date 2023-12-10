import React, { createContext, useState } from 'react';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

interface PhonesContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const PhonesContext = createContext<PhonesContextProps | undefined>(undefined);

export const PhonesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(Theme.Light);

  const contextValue: PhonesContextProps = {
    theme,
    setTheme,
  };

  return (
    <PhonesContext.Provider value={contextValue}>
      {children}
    </PhonesContext.Provider>
  );
};
