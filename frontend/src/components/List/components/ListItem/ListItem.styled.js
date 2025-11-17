import styled, { css } from 'styled-components';

export const StyledListItem = styled.li`
    list-style: none;
    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.color};

    display: flex;
    box-sizing: border-box;
    border: 1px solid #949494;
    border-radius: 5px;
    height: 100px;
    width: 48%;
    padding: 10px;
    
    justify-content: space-between;
    align-items: center;
    
    ${({ isCompleted }) => isCompleted && css`
        background: ${({ theme }) => theme.colors.secondary};
    `};
`;

