import React, { useEffect, useRef } from 'react';

const Button = ({ children, onClick, styles }) => {
    const buttonRef = useRef(null);

    const handleClick = () => {
        console.log('---- INNER BUTTON CLICK ------');

        if (typeof onClick === 'function') {
            onClick();
        }

        // onClick?.();
    };

    useEffect(() => {
        console.log('---- BUTTON RENDER ------');

    }, [onClick, styles]);

    console.log(buttonRef.current);

    return (
        <button onClick={handleClick} style={styles} ref={buttonRef}>
            {children}
        </button>
    );
}

export default Button;
