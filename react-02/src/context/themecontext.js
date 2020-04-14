import React from 'react';

export const ThemeContext = React.createContext({
    headings: '#FFFFFF',
    setHeading: () => {},
});

export default ThemeContext