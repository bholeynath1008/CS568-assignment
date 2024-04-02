**Responsive Website using HTML and CSS Cheatsheet**

**1. Understanding Units:**
   - **px:** Pixel units, fixed-size units commonly used for precise designs.
   - **%:** Percentage units, relative to the parent container's size.
   - **vw, vh:** Viewport width and viewport height units, relative to the size of the browser window.
   - **vmax, vmin:** Relative to the maximum or minimum viewport dimension.
   - **em, rem:** Font-relative length units, where 'em' is relative to the font size of the element and 'rem' is relative to the root element.

**2. Layout of Website:**
   - **Absolute vs Flex:** 
     - **Absolute:** Elements are positioned relative to the nearest positioned ancestor.
     - **Flex:** Provides a flexible layout model for creating dynamic and responsive layouts.

**3. Flexbox:**
   - **Display flex:** Establishes a flex container.
   - **Aligning items in x and y axis:** Using properties like `justify-content` and `align-items`.
   - **Flex direction:** Determines the direction of the main axis.
   - **Flex wrap:** Specifies whether the flex items should wrap or not.

**4. CSS Media Queries:**
   - **Min height, min width:** Define styles based on minimum height or width of the viewport.
   - **Min width, max width:** Define styles based on minimum or maximum width of the viewport.

**Key Points for Responsive Websites:**
1. **CSS Flexbox:** Utilize flexbox for flexible and responsive layouts.
2. **CSS Units:** Choose appropriate units like percentages, viewport units, and font-relative units.
3. **Responsive Typography:** Use relative units for font sizes to ensure scalability across devices.
4. **Mobile-First Approach:** Start designing for mobile devices and then progressively enhance for larger screens.
5. **Flexible Images and Media:** Ensure images and media elements adjust fluidly to different screen sizes using CSS or HTML attributes.

**Examples:**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Example</title>
    <style>
        .container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .box {
            width: 200px;
            height: 200px;
            background-color: #f0f0f0;
            margin: 10px;
        }
        @media only screen and (max-width: 600px) {
            .box {
                width: 150px;
                height: 150px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</body>
</html>
```


By focusing on these key aspects, you can create responsive websites that adapt well to various devices and screen sizes.
