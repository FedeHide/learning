import PropTypes from 'prop-types';
import React from 'react'

const val = 99;

export const Increment = React.memo(({ incrementar }) => {

    console.log('Rendering...')
    return (
        <button className='btn btn-primary' onClick={() => incrementar(val)}>+{val}</button>
    );
});

Increment.displayName = 'Increment';

Increment.propTypes = {
    incrementar: PropTypes.func.isRequired
};