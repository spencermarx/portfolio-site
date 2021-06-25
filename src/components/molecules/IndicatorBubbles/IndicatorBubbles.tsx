import React, { Component, useState } from "react";
import "./indicatorbubbles.scss";

interface Props {
  number: number;
  activeIndicator: number;
  themeColor: string;
}

const IndicatorBubbles: React.FC<Props> = ({ number, activeIndicator, themeColor }: Props) => {
  const indicatorBubbles = [];
  const circleRadius = 4;
  const paddingSpace = 5.75;
  const circleSpacing = 20;
  const viewWidth = 2 * paddingSpace + (number - 1) * circleSpacing;

  for (let i = 0; i < number; i++) {
    if (i === activeIndicator) {
      indicatorBubbles.push(
        <circle
          className="Indicator-Active"
          cx={5.75 + 20 * i}
          cy="6.5"
          r={circleRadius}
          stroke={themeColor}
          fill={themeColor}
          strokeWidth="2"
          key={`Indicator ${i}`}
        />
      );
    } else {
      indicatorBubbles.push(
        <circle
          cx={5.75 + 20 * i}
          cy="6.5"
          r={circleRadius}
          stroke={themeColor}
          strokeWidth="2"
          key={`Indicator ${i}`}
        />
      );
    }
  }
  return (
    <div className="Indicators">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewWidth} 13`} width={viewWidth} height="13" fill="none">
        {indicatorBubbles}
      </svg>
    </div>
  );
};

export default IndicatorBubbles;
