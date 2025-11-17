import React, { useCallback } from 'react';
import ListItem from './components/ListItem';
import useFetch from '../../hooks/useFetch.js';

import * as SC from './List.styled.js';
import Button from '../Button';

const List = () => {
    const { items: toDoList, fetchData } = useFetch('todos');

    const handleClick = useCallback(() => {
        fetchData();
    }, []);

    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('success');
    //     }, 5_000);
    //
    //     // setTimeout(() => {
    //     //     reject('error');
    //     // }, 6_000);
    // });
    //
    // promise
    //     .then((res) => {
    //         console.log(res);
    //
    //         return Promise.resolve(200);
    //     })
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //
    //     })
    //     .finally(() => {
    //         console.log('done');
    //     })

    // async function myFunc() {
    //     try {
    //         const result = await promise;
    //     } catch (err) {
    //
    //     }
    // }
    // => Promise.resolve()


    const items =  toDoList.map(toDo => (
        <ListItem key={toDo.id} {...toDo}>
            {toDo.title}
        </ListItem>
    ));

    return (
        <SC.StyledWrapper>
            <Button onClick={handleClick}>
                Fetch posts
            </Button>
            <SC.StyledContainer>
                {items}
            </SC.StyledContainer>
        </SC.StyledWrapper>
    );
}

export default List;
