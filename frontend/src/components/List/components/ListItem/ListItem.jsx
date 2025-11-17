import React from 'react';

import * as SC from "./ListItem.styled";
// import { TestContext } from '../../../../context/TestProvider/TestProvider.jsx';

const ListItem = ({ children, className, completed }) => {
    return (
        <SC.StyledListItem className={className} isCompleted={completed}>
            {children}
        </SC.StyledListItem>
    );
}

export default ListItem;
