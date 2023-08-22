import React from 'react';

const Switch = ({ children }) => {
    const defaultCase = React.Children.toArray(children).find(
        child => child.type === Default
    );

    const cases = React.Children.toArray(children).filter(
        child => child.type === Case
    );

    const matchedCase = cases.find(({ props }) => props.condition);

    if (matchedCase) {
        return matchedCase.props.children;
    } else if (defaultCase) {
        return defaultCase.props.children;
    } else {
        return null;
    }
};

const Case = ({ condition, children }) => ({ condition, children });

const Default = ({ children }) => ({ children });

const ConditionalRendering = ({ num }) => {
    return (
        <Switch>
            <Case condition={num < 30}>There is still some work to do</Case>
            <Case condition={num > 30}>Some work happened</Case>
            <Default>Make sure to set a goal</Default>
        </Switch>
    );
};

export default ConditionalRendering;
