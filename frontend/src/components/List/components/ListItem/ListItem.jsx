import React from 'react';

import * as SC from "./ListItem.styled";

const ListItem = ({ children, className }) => {
    return (
        <SC.StyledListItem className={className}>
            <SC.StyledPrefix> - </SC.StyledPrefix>
            {children}
        </SC.StyledListItem>
    );
}

export default ListItem;
