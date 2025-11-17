import React, { useCallback, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import Button from './components/Button';

const getTheme = (themeName = 'light') => {
    const lightTheme = {
        background: 'white',
        color: '#789a4a',
        name: 'light',
        colors: {
            primary: '#74be00',
            secondary: '#835a5a',
        }
    };
    const darkTheme = {
        background: 'black',
        color: 'white',
        name: 'dark',
        colors: {
            primary: '#789A4AFF',
            secondary: '#4B4B4BFF',
        }
    };

    // return themeName === 'light' ? lightTheme : themeName === 'dark' ? darkTheme : lightTheme;

    // if (themeName === 'light') {
    //     return lightTheme;
    // }
    //
    // if (themeName === 'dark') {
    //     return darkTheme;
    // }
    //
    // return lightTheme;

    switch (themeName) {
        case 'light': {
            return lightTheme;
        }
        case 'dark': {
            return darkTheme;
        }
        default: {
            return lightTheme;
        }
    }
}

const Integrator = ({ children, theme }) => {
    const [themeObject, setThemeObject] = useState(getTheme(theme));

    const handleThemeChange = useCallback(() => {
        setThemeObject((currentThemeObject) => {
            const newThemeName = currentThemeObject.name === 'light' ? 'dark' : 'light';

            return getTheme(newThemeName);
        });
    }, []);

    return (
        <ThemeProvider theme={themeObject}>
            <Button onClick={handleThemeChange}>ToggleThem</Button>
            {children}
        </ThemeProvider>
    );
}

export default Integrator;