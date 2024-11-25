 **Note :** The parent element to **position: relative** is a common technique used in CSS layout to control the `positioning of child elements` within a specific context

1. **static** : Normal position as per dom render. Default positioning; elements follow `normal document flow`. Properties like `top`, `bottom`, `left`, and `right` have no effect.

2. **relative** : relative to its normal position, it will be move from its normal positon when top:10px. If you want to move from original (old) positon then use "relative". "aafno original location jaha xa teha bata moove garaune". Positioned relative to its normal position; can be moved using `top`, `bottom`, `left`, or `right`.

3. **absolute** : It will move relative to its parents. Change position as per its first parent;

4. **fixed** `chatbox` : position relative to browser window (`chat with us`). remain at same place even it is scrolled. Positioned relative to the viewport; remains fixed even when scrolled; removed from normal flow. (`Normal Flow removed`)

5. **sticky** `navbar` : stick at it same positon (nav bar), positioned based on the user's scroll position. Initially behaves like `relative`, but switches to `fixed` once a specified threshold is reached during scrolling; temporarily removed from normal flow. (`Normal Flow removed`)

**Z-index**: Elements with `position` other than `static` create stacking contexts, affecting their overlap order.


https://layout.bradwoods.io/customize
https://readme.so/

```
.progressBarContainer {
  position: relative;
  width: 100%;
  height: 20px;
  background: linear-gradient(90deg, rgba(2,0,36,1) 40%, rgba(255,205,0,1) 60%, rgba(242,3,16,1) 100%);
  border-radius: 5px;
  overflow: hidden;
}

.transparentProgressBar {
  height: 100%;
  background-color: transparent;
}

.greenOverlay {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: green;
}

.percentageText {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
  color: #ffffff; /* Adjust text color for better visibility */
}

```

```
import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import styles from './CustomLinearProgressBar.module.css';

const CustomLinearProgressBar = ({ barValue }) => {
  return (
    <Box className={styles.progressBarContainer}>
      {/* Transparent background up to the barValue */}
      <LinearProgress
        variant="determinate"
        value={100}
        sx={{
          height: '100%',
          backgroundColor: 'transparent',
          '& .MuiLinearProgress-bar': { backgroundColor: 'transparent' },
        }}
      />
      
      {/* Green part that starts from barValue to 100 */}
      <Box
        className={styles.greenOverlay}
        sx={{
          left: `${barValue}%`, // Start the green color at the barValue position
          width: `${100 - barValue}%`, // The green color fills from barValue to 100%
        }}
      />
      
      {/* Percentage text in the center */}
      <Typography variant="body2" className={styles.percentageText}>
        {`${Math.round(barValue)}%`}
      </Typography>
    </Box>
  );
};

export default CustomLinearProgressBar;

```
