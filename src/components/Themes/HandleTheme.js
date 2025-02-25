//HandleTheme.js
import React from 'react';
import { useTheme } from './Theme';
import App from '../../App';
import { Link } from 'react-router-dom';

const HandleTheme = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div style={{
            backgroundColor: isDarkMode ? '#333' : '#FFF',
            color: isDarkMode ? '#FFF' : '#000',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1>{isDarkMode ? 'تم شب' : 'تم روز'}</h1>
            <button onClick={toggleTheme}>
                {isDarkMode ? 'انتقال به روز' : 'انتقال به شب'}
            </button>
        </div>
    );
};

export default HandleTheme;
