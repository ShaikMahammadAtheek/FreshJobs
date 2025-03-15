import React from 'react';
import './Biisp.css';

const Biisp = () => {
  return (
    <div className="biisp-container">
      <div className="grid-container">
        {/* First column for 1 and 2 */}
        <div className="points-column">
          <div className="point point1">1</div>
          <div className="point point2">2</div>
        </div>

        {/* Second column for 3, 4, 5 */}
        <div className="points-column scrollable">
          <div className="point point3">3</div>
          <div className="point point4">4</div>
          <div className="point point5">5</div>
        </div>
      </div>
    </div>
  );
};

export default Biisp;
