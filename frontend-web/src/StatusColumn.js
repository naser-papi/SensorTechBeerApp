import React, { useMemo } from 'react';

const TempState = {
  NORMAL: 0,
  LOW: 1,
  HIGH: 2,
};

const StatusColumn = ({ status }) => {
  const [className, text] = useMemo(
    () =>
      status === TempState.HIGH
        ? ['tooHigh', 'too high']
        : status === TempState.LOW
        ? ['tooLow', 'too low']
        : ['normal', 'all good'],
    [status]
  );

  return (
    <div className={className} data-cy={'statusCol'}>
      <span>{text}</span>
    </div>
  );
};

export default StatusColumn;
