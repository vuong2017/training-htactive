import React from 'react';

function Content({ children }) {
    return (
        <div style={{color:'red'}}>
            {children}
        </div>
    );
}

export default Content;
