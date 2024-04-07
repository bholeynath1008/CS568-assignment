## **Notes on Figma:**

(Adjust **Image Properties in Figma**) [https://help.figma.com/hc/en-us/articles/360041098433-Adjust-the-properties-of-an-image]
(Adjust **Text Properties in Figma**) [https://help.figma.com/hc/en-us/articles/360039956634-Explore-text-properties#line-height]
(Adjust **Text Properties in Figma summary**)[https://help.figma.com/hc/en-us/articles/360039956634-Explore-text-properties]




**Shortcut Keys:**

1. **Zoom In/Out:** `Ctrl + Mouse Scroll`
2. **Move:** `Space + Left Click`
3. **Hover to See All Dimensions:** `Ctrl + Alt`
4. **Copy:** `Ctrl + Alt + C`
5. **Paste:** `Ctrl + Alt + V`
6. **Drag to Create Direct Copy:** `Alt + Left Click`

**Common Properties of Figma Components:**

1. **Size:** Dimensions (Width and Height)
2. **Position:** X and Y Coordinates
3. **Opacity:** Transparency Level (0% to 100%)
4. **Fill:** Background Color, Gradient, or Image
5. **Stroke:** Border Color, Width, and Style
6. **Corner Radius:** Degree of Rounded Corners
7. **Constraints:** Rules for Resizing or Repositioning
8. **Variants:** Different Versions with Shared Base Properties

**Properties of Figma Images:**

1. **Fill:** Color or Image

**Additional Figma Terminology:**

1. **Align Left:** Aligns an Element Relative to Its Parent Container to the Left.
2. **Auto Width:** Text Property that Makes the Layer Grow to Fit Its Contents.
3. **Fixed Width:** Set Width or Height of Design Elements or Layouts.
4. **Line Height Auto:** Adjusts Based on Font Size.

**Auto Layout in Figma:**

Auto layout in Figma is a powerful feature that allows for the dynamic arrangement and resizing of components within frames. Here are some key aspects:

- **Padding:** Space between the content of a component and its border.
- **Margin:** Space outside the border of a component.
- **Child Components:** Elements within an auto layout frame can be automatically arranged and resized based on defined rules.
- **Dynamic Sizing:** Auto layout frames can adjust their size based on the content and resizing of child components.
- **Alignment:** Child components can be aligned horizontally and vertically within the auto layout frame.
- **Spacing:** Controls for spacing between child components.
- **Direction:** Determines the flow of child components within the frame (horizontal or vertical).
- **Distribution:** Specifies how space is distributed between child components within the frame.
- **Nesting:** Auto layout frames can be nested within each other to create complex layouts.

**Notes:** Auto layout properties are primarily displayed and managed at the parent component level, providing a convenient way to organize and structure designs efficiently.

**Explanation:**

- **Fixed Width:** Ensures a set pixel width, maintaining consistency regardless of screen resolution.
- **Align Left:** Positions an element to the left within its container.
- **Align Top:** Positions an element at the top within its container.
- **Auto Width:** Allows a text layer to expand or shrink to fit its content horizontally.
- **Hug:** "hug" refers to an auto layout property that controls how an element behaves within its auto layout frame.
  
These properties, shortcuts, and terminologies enhance the efficiency and precision of designing in Figma, providing designers with a comprehensive toolkit for creating visually appealing and functional interfaces.

### Common Properties of Figma Components:

| Figma Property          | CSS Equivalent                | Viewport Constraints & Examples                                   |
|-------------------------|-------------------------------|-------------------------------------------------------------------|
| **Size (Width & Height)** | `width`, `height`          | Use percentages for fluid layout or pixels for fixed size. <br> Example: `width: 100%; height: 200px;` |
| **Position (X & Y)**     | `position`, `left`, `top`  | Use `position: relative;` or `absolute;` for positioning. <br> Example: `position: absolute; left: 20px; top: 50px;` |
| **Opacity**              | `opacity`                   | Range from 0 to 1, controls transparency. <br> Example: `opacity: 0.7;` |
| **Fill**                 | `background`, `background-color`, `background-image` | Customize background with color or image. <br> Example: `background-color: #ff0000;` |
| **Stroke**               | `border`                    | Set border width, style, and color. <br> Example: `border: 2px solid #000;` |
| **Corner Radius**        | `border-radius`             | Round corners with a specified radius. <br> Example: `border-radius: 10px;` |
| **Constraints**          | Flexbox, Grid, Positioning  | Use CSS layout techniques for responsiveness. <br> Example: `display: flex;` |
| **Variants**             | CSS Classes, Data Attributes| Apply different styles to components. <br> Example: `.variant1 { ... }` |

### Properties of Figma Images:

| Figma Property          | CSS Equivalent                | Viewport Constraints & Examples                                   |
|-------------------------|-------------------------------|-------------------------------------------------------------------|
| **Fill**                 | `background`, `background-color`, `background-image` | Customize background with color or image. <br> Example: `background-image: url('example.jpg');` |

### Additional Figma Terminology:

| Figma Property          | CSS Equivalent                | Viewport Constraints & Examples                                   |
|-------------------------|-------------------------------|-------------------------------------------------------------------|
| **Align Left**          | `align-self: flex-start;`    | Aligns an element relative to its parent container to the left. <br> Example: `align-self: flex-start;` |
| **Auto Width**          | `width: auto;`               | Allows elements to grow or shrink to fit content. <br> Example: `width: auto;` |
| **Fixed Width**         | `width: <value>;`            | Set fixed width for elements. <br> Example: `width: 300px;` |
| **Line Height Auto**    | `line-height: normal;`       | Adjusts line height based on font size. <br> Example: `line-height: normal;` |
| **Hug**                 | N/A                           | Auto layout property controlling element behavior. <br> Example: N/A |

### Auto Layout in Figma:

| Figma Property          | CSS Equivalent                | Viewport Constraints & Examples                                   |
|-------------------------|-------------------------------|-------------------------------------------------------------------|
| **Padding**             | `padding`                    | Add space between content and border. <br> Example: `padding: 10px;` |
| **Margin**              | `margin`                     | Add space outside the border. <br> Example: `margin: 20px;` |
| **Dynamic Sizing**      | `flex-grow: 1;`              | Allow elements to dynamically resize. <br> Example: `flex-grow: 1;` |
| **Alignment**           | `justify-content`, `align-items` | Align elements horizontally and vertically. <br> Example: `justify-content: center; align-items: center;` |
| **Spacing**             | `gap`                        | Define spacing between child elements. <br> Example: `gap: 10px;` |
| **Direction**           | `flex-direction`             | Define the flow of child elements. <br> Example: `flex-direction: row;` |
| **Distribution**        | `justify-content`            | Specify space distribution between child elements. <br> Example: `justify-content: space-between;` |
| **Wrap**                | `flex-wrap`                  | Allow child elements to wrap to the next line. <br> Example: `flex-wrap: wrap;` |
| **Nesting**             | Nested Flex Containers       | Nest auto layout frames for complex layouts. <br> Example: `.parent { display: flex; } .child { display: flex; }` |

### Scroll and Overflow:

| Figma Property          | CSS Equivalent                | Viewport Constraints & Examples                                   |
|-------------------------|-------------------------------|-------------------------------------------------------------------|
| **Scroll**              | `overflow: auto;`            | Enable scrolling for overflowing content. <br> Example: `overflow: auto;` |

### Color Management:

| Figma Property          | CSS Equivalent                | Viewport Constraints & Examples                                   |
|-------------------------|-------------------------------|-------------------------------------------------------------------|
| **Color**               | `color`                       | Set text color or foreground color. <br> Example: `color: #333;` |
| **Background Color**    | `background-color`            | Set background color of an element. <br> Example: `background-color: #fff;` |

### Typography:

| Figma Property          | CSS Equivalent                | Viewport Constraints & Examples                                   |
|-------------------------|-------------------------------|-------------------------------------------------------------------|
| **Font Family**         | `font-family`                 | Specify the font family for text. <br> Example: `font-family: Arial, sans-serif;` |
| **Font Size**           | `font-size`                   | Set the size of the font. <br> Example: `font-size: 16px;` |
| **Font Weight**         | `font-weight`                 | Set the weight (boldness) of the font. <br> Example: `font-weight: bold;` |
| **Text Decoration**     | `text-decoration`             | Add decoration to text (e.g., underline). <br> Example: `text-decoration: underline;` |
| **Text Transform**      | `text-transform`              | Transform text to uppercase, lowercase, or capitalize. <br> Example: `text-transform: uppercase;` |

### Vector Editing:

| Figma Property          | CSS Equivalent                | Viewport Constraints & Examples                                   |
|-------------------------|-------------------------------|-------------------------------------------------------------------|
| **Vector Fill**         | `fill`                        | Set the fill color of vector graphics. <br> Example: `fill: #ff0000;` |
| **Vector Stroke**

**Responsive Design Properties**
| Figma Property        | CSS Equivalent                        | Viewport Constraints                                                                                   |
|-----------------------|---------------------------------------|--------------------------------------------------------------------------------------------------------|
| Viewport Constraints | CSS viewport units (`vw`, `vh`, `vmin`, `vmax`) | Define how elements behave when the viewport size changes.                                             |
| Grids                 | CSS Grid Layout (`display: grid;`) or Flexbox (`display: flex;`) | Establish consistent spacing and alignment across elements.                                             |
| Layout Frames         | Utilize CSS positioning (`position: relative/absolute/fixed;`) and CSS Box Model properties (`margin`, `padding`, `width`, `height`, etc.) | Organize elements within frames to maintain structure and alignment.                                    |
| Component Variants    | Media queries (`@media`) in CSS        | Create variations of components tailored for different screen sizes or orientations.                   |
| Auto Layout           | Flexbox (`display: flex;`) or CSS Grid (`display: grid;`) | Automatically adjust the size and spacing of elements within a frame based on its content.              |
| Vertical Auto Layout  | Flexbox (`flex-direction: column;`)    | Elements adjust vertically based on content and spacing.                                               |
| Horizontal Auto Layout| Flexbox (`flex-direction: row;`)       | Elements adjust horizontally based on content and spacing.                                             |
| Space Between         | Flexbox (`justify-content: space-between;`) | Automatically distribute space evenly between elements.                                                 |
| Space Around          | Flexbox (`justify-content: space-around;`)  | Automatically distribute space evenly around elements.                                                  |
| Fixed Size            | Specify fixed dimensions (`width`, `height`) in CSS | Maintain fixed size for specific elements within an auto layout frame.                                  |
| Fill Container        | Flexbox (`flex: 1;`)                     | Allow elements to fill available space within an auto layout frame.                                     |
| Padding               | CSS `padding` property                  | Define padding around elements within an auto layout frame.                                             |

**Sample Examples:**

1. **Viewport Constraints:**
   - Figma: Set an element's width to `50vw` to make it take up half of the viewport's width.
   - CSS: `width: 50vw;`

2. **Grids:**
   - Figma: Create a grid layout with even spacing between elements.
   - CSS: 
     ```css
     .grid-container {
       display: grid;
       grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
       gap: 20px; /* Spacing between grid items */
     }
     ```

3. **Layout Frames:**
   - Figma: Use a frame to group and align elements together.
   - CSS: 
     ```css
     .frame {
       position: relative;
       width: 100%;
       height: 300px;
       padding: 20px;
       margin: 0 auto;
     }
     ```

4. **Component Variants:**
   - Figma: Create different styles for a button component based on screen size.
   - CSS: 
     ```css
     @media (max-width: 600px) {
       .button {
         font-size: 14px;
       }
     }
     ```

5. **Auto Layout:**
   - Figma: Use auto layout to automatically adjust the size of elements within a container.
   - CSS:
     ```css
     .container {
       display: flex;
       justify-content: space-between;
     }
     ```

And so on for each property. These examples demonstrate how you might apply Figma properties and their CSS equivalents in practice.



### Figma Cheat Sheet for Responsive Design

#### Viewport:

- **Viewport Constraints:**
  - Figma Property: Define how elements behave when the viewport size changes.
  - CSS Equivalent: CSS viewport units (`vw`, `vh`, `vmin`, `vmax`) can be used to specify dimensions relative to the viewport size.

#### Grids and Layouts:

- **Grids:**
  - Figma Property: Establish consistent spacing and alignment across elements.
  - CSS Equivalent: CSS Grid Layout (`display: grid;`) or Flexbox (`display: flex;`) for creating grids and aligning elements.

- **Layout Frames:**
  - Figma Property: Organize elements within frames to maintain structure and alignment.
  - CSS Equivalent: Utilize CSS positioning (`position: relative/absolute/fixed;`) and CSS Box Model properties (`margin`, `padding`, `width`, `height`, etc.) for layout organization.

#### Variants:

- **Component Variants:**
  - Figma Property: Create variations of components tailored for different screen sizes or orientations.
  - CSS Equivalent: Media queries (`@media`) in CSS can be used to define styles for different screen sizes or orientations.

#### Auto Layout:

- **Auto Layout:**
  - Figma Property: Automatically adjust the size and spacing of elements within a frame based on its content.
  - CSS Equivalent: Flexbox (`display: flex;`) or CSS Grid (`display: grid;`) can be used for automatic adjustment of size and spacing.

- **Vertical Auto Layout:**
  - Figma Property: Elements adjust vertically based on content and spacing.
  - CSS Equivalent: Flexbox (`flex-direction: column;`) for vertical layout.

- **Horizontal Auto Layout:**
  - Figma Property: Elements adjust horizontally based on content and spacing.
  - CSS Equivalent: Flexbox (`flex-direction: row;`) for horizontal layout.

- **Space Between:**
  - Figma Property: Automatically distribute space evenly between elements.
  - CSS Equivalent: Flexbox (`justify-content: space-between;`) for distributing space between elements.

- **Space Around:**
  - Figma Property: Automatically distribute space evenly around elements.
  - CSS Equivalent: Flexbox (`justify-content: space-around;`) for distributing space around elements.

- **Fixed Size:**
  - Figma Property: Maintain fixed size for specific elements within an auto layout frame.
  - CSS Equivalent: Specify fixed dimensions (`width`, `height`) in CSS.

- **Fill Container:**
  - Figma Property: Allow elements to fill available space within an auto layout frame.
  - CSS Equivalent: Flexbox (`flex: 1;`) to make an element fill available space.

- **Padding:**
  - Figma Property: Define padding around elements within an auto layout frame.
  - CSS Equivalent: CSS `padding` property to define padding around elements.
