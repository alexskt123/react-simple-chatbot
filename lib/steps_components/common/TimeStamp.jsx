import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';

const TimeStamp = ({ user }) => {
  const nowDate = useMemo(() => new Date().toLocaleTimeString(), []);

  const color = user ? '#FBA90A' : 'grey';

  return (
    <Fragment>
      <div style={{ width: '100%', marginTop: '3px' }}>
        <span style={{ float: 'right', fontSize: 'x-small', color }}>{nowDate}</span>
      </div>
    </Fragment>
  );
};

TimeStamp.propTypes = {
  user: PropTypes.bool.isRequired
};

export default TimeStamp;
