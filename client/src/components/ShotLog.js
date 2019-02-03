import React, { Component } from 'react';

import Log from './Log';

class ShotLog extends Component {

  render() {
    return (
      <div className="div-shotLog">
        {this.props.shotLog.map((log, index) => 
          <Log
            key={index}
            log={log} />
        )}
      </div>
    )
  }
}

export default ShotLog;