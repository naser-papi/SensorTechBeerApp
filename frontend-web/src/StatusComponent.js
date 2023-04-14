import React from 'react';

const statuses = ["all good", "too low", "too high"];
const classes = ["normal", "tooLow", "tooHigh"];
const StatusComponent = ({item}) => {
    return !item.error ? (
        <span data-cy={`product${item.id}status`} className={classes[item.status]}>
            {statuses[item.status]}
        </span>
    ) : (<h2 data-cy={"statusError"}>Server Error</h2>);
};

export default StatusComponent;