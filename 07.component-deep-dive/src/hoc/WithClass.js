import React from 'react';

/**
 * First way to create a Higher Order Component as a wrapper element
 */
// const withClass = props => {
//    return <div className={props.classes}>{props.children}</div>;
// }

/**
 * First way to create a Higher Order Component as a function that wraps the export
 * of the component, in which it is used
 */
const withClass = (WrappedComponent, className) => {
   return props => 
    (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
};

export default withClass;