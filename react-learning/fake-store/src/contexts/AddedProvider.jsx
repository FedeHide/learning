import PropTypes from 'prop-types';
import { useState } from 'react';
import { AddedContext } from './AddedContext';

export const AddedProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    const addCard = (card) => {
        setCards([...cards, card]);
    };

    const removeCard = (index) => {
        const updatedCards = [...cards];
        updatedCards.splice(index, 1);
        setCards(updatedCards);
    };

    return (
        <AddedContext.Provider value={{ cards, addCard, removeCard }}>
            {children}
        </AddedContext.Provider>
    );
};

AddedProvider.propTypes = {
    children: PropTypes.node.isRequired
}