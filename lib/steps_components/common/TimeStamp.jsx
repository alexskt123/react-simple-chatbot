import React, { Fragment, useMemo } from 'react';

const TimeStamp = () => {
  const nowDate = useMemo(() => new Date().toLocaleTimeString(), []);

  return (
    <Fragment>
      <div style={{ width: '100%', marginTop: '3px' }}>
        <span style={{ float: 'right', fontSize: '1px', color: 'grey' }}>{nowDate}</span>
      </div>
    </Fragment>
  );
};

export default TimeStamp;
