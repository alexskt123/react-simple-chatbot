import React, { Fragment, useMemo } from 'react';

const CurrentDate = () => {
  const nowDate = useMemo(() => new Date().toLocaleDateString(), []);

  const currentDateConfig = {
    fontSize: 'x-small',
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: '5px 5px 5px 5px',
    paddingLeft: '5px',
    paddingRight: '5px'
  };

  return (
    <Fragment>
      <div
        style={{
          width: '100%',
          marginTop: '3px',
          justifyContent: 'center',
          display: 'flex',
          marginBottom: '10px'
        }}
      >
        <span style={{ ...currentDateConfig }}>{nowDate}</span>
      </div>
    </Fragment>
  );
};

export default CurrentDate;
