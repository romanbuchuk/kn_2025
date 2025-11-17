import React, { createContext } from 'react';

export const TestContext = createContext({});

export const TestProvider = ({ children }) => {
    return (
        <TestContext.Provider value={{
            myTestKey: 'myTestValue'
        }}>
            {children}
        </TestContext.Provider>
    );
}
