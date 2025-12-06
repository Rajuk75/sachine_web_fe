import React from "react";

const PaperTornFrame = ({ style = {} }) => (
  <svg
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    style={{
      width: "100%",
      height: 74,
      display: "block",
      ...style,
      pointerEvents: "none",
      userSelect: "none"
    }}
  >
    <defs>
      <filter id="super-real-shadow" x="-16%" y="-25%" width="140%" height="150%">
        <feDropShadow dx="0" dy="8" stdDeviation="11" floodColor="#000" floodOpacity="0.18" />
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.09" />
      </filter>
    </defs>
    <path
      d="
        M0,40
        Q15,70 36,61
        Q50,56 62,62
        Q90,76 112,45
        Q130,28 146,55
        Q170,80 174,61
        Q181,51 208,73
        Q220,84 243,54
        Q269,20 280,59
        Q290,89 310,62
        Q330,33 345,54
        Q355,71 381,57
        Q401,47 414,69
        Q428,95 460,51
        Q490,8 498,59
        Q502,89 528,62
        Q543,44 561,65
        Q583,91 607,55
        Q624,36 645,60
        Q667,86 703,37
        Q733,-5 752,66
        Q764,107 787,49
        Q803,9 813,55
        Q820,81 851,58
        Q875,36 889,68
        Q903,99 939,37
        Q964,-8 981,63
        Q993,107 1020,56
        Q1040,12 1053,62
        Q1061,91 1097,61
        Q1111,50 1136,62
        Q1169,78 1199,42
        L1200,120 L0,120 Z
      "
      fill="#fff"
      filter="url(#super-real-shadow)"
    />
    {/* Slight rough gray outline for depth */}
    <path
      d="
        M0,40
        Q15,70 36,61
        Q50,56 62,62
        Q90,76 112,45
        Q130,28 146,55
        Q170,80 174,61
        Q181,51 208,73
        Q220,84 243,54
        Q269,20 280,59
        Q290,89 310,62
        Q330,33 345,54
        Q355,71 381,57
        Q401,47 414,69
        Q428,95 460,51
        Q490,8 498,59
        Q502,89 528,62
        Q543,44 561,65
        Q583,91 607,55
        Q624,36 645,60
        Q667,86 703,37
        Q733,-5 752,66
        Q764,107 787,49
        Q803,9 813,55
        Q820,81 851,58
        Q875,36 889,68
        Q903,99 939,37
        Q964,-8 981,63
        Q993,107 1020,56
        Q1040,12 1053,62
        Q1061,91 1097,61
        Q1111,50 1136,62
        Q1169,78 1199,42
      "
      fill="none"
      stroke="#d1d5db"
      strokeWidth="3"
      opacity=".83"
    />
  </svg>
);

export default PaperTornFrame;
