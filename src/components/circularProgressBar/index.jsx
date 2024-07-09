import React from 'react';
import styles from './CircularProgressBar.module.scss';

const CircularProgressBar = ({
  percentage,
  color,
  size,
  label,
  innerHeight,
  innerWidth,
}) => {
  const strokeWidth = 3; // You can adjust this value as needed
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={styles.progressCircle}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        <circle
          className={styles.backgroundCircle}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={styles.progressCircle}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div
        className={styles.innerCircle}
        style={{
          width: innerWidth,
          height: innerHeight,
          backgroundColor: color,
          color: 'white',
        }}
      >
        <div className={styles.progressText} style={{ color: 'white' }}>
          <span>{percentage}%</span>
          <p>{label}</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
