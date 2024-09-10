
1. ramro sanga kunai elemnet list haru render vayena vane key check garne react ma.
2. ani material ui ra aru kunai theme le garda custom properties lagadua kaam garena vane custom css diyera important ! lagauni

3. import React, { useState } from 'react';

```
const HoverComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: isHovered ? 'lightblue' : 'lightcoral',
        transition: 'background-color 0.3s'
      }}
    >
      {isHovered ? 'Hovering!' : 'Not Hovering!'}
    </div>
  );
};

export default HoverComponent;
```

```
import React, { useState } from 'react';
import './HoverComponent.css'; // Assuming you have a CSS file for styles

const HoverComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`hover-box ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? 'Hovering!' : 'Not Hovering!'}
    </div>
  );
};

export default HoverComponent;
```
