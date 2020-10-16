import React, { Fragment, useMemo } from 'react';

const CurrentDate = () => {
  const nowDate = useMemo(() => new Date().toLocaleDateString(), []);

  const color = 'grey';

  return (
    <Fragment>
      <div style={{ width: '100%', marginTop: '3px' }}>
        <span style={{ justifyContent: 'center', display: 'flex', fontSize: 'x-small', color }}>{nowDate}</span>
      </div>
    </Fragment>
  );
};

export default CurrentDate;
