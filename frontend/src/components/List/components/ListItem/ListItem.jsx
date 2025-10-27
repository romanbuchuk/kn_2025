import React from 'react';

import styles from './ListItem.module.css';

const ListItem = ({ children }) => {
    console.log('===================');
    console.dir(styles);
    console.log('===================');

    return (
        <li className={styles['list-item']}>
            {children}
        </li>
    );
}

export default ListItem;
