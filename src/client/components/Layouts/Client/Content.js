import React from 'react';

function Content({ children }) {
    return (
        <div style={{color:'gray'}}>
            {children}
        </div>
    );
}

export default Content;
