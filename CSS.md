 **Note :** The parent element to **position: relative** is a common technique used in CSS layout to control the `positioning of child elements` within a specific context

1. **static** : Normal position as per dom render. Default positioning; elements follow `normal document flow`. Properties like `top`, `bottom`, `left`, and `right` have no effect.

2. **relative** : relative to its normal position, it will be move from its normal positon when top:10px. If you want to move from original (old) positon then use "relative". "aafno original location jaha xa teha bata moove garaune". Positioned relative to its normal position; can be moved using `top`, `bottom`, `left`, or `right`.

3. **absolute** : It will move relative to its parents. Change position as per its first parent;

4. **fixed** `chatbox` : position relative to browser window (`chat with us`). remain at same place even it is scrolled. Positioned relative to the viewport; remains fixed even when scrolled; removed from normal flow. (`Normal Flow removed`)

5. **sticky** `navbar` : stick at it same positon (nav bar), positioned based on the user's scroll position. Initially behaves like `relative`, but switches to `fixed` once a specified threshold is reached during scrolling; temporarily removed from normal flow. (`Normal Flow removed`)

**Z-index**: Elements with `position` other than `static` create stacking contexts, affecting their overlap order.


https://layout.bradwoods.io/customize

https://readme.so/

**An Interactive Guide to Flexbox**: https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Layout with East/West Cards</title>
    <style>
        /* Global styles */
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: 'Courier New', Courier, monospace;
        }

        /* Layout wrapper */
        .layout-wrapper {
            display: flex;
            flex-direction: column;
        }

        /* Header section */
        .header {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            background-color: yellow;
        }

        .nav-group {
            display: flex;
        }

        .nav-link {
            background-color: green;
            color: white;
            padding: 10px;
            font-size: 20px;
            transition: background-color 0.3s ease;
            cursor: pointer;
        }

        .nav-link:hover {
            background-color: rgb(151, 103, 44);
        }

        /* Content wrapper */
        .content-wrapper {
            background-color: rgb(236, 227, 214);
            margin-top: 20px;
            padding: 10px;
        }

        /* Card section */
        .card-section-wrapper {
            display: flex;
            justify-content: center;
        }

        .card-container {
            background-color: bisque;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 20px;
            padding: 20px;
        }

        .card {
            width: 150px;
            height: 150px;
            border: 1px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Odd-numbered cards (west) */
        .card-west {
            background-color: lightcoral;
        }

        /* Even-numbered cards (east) */
        .card-east {
            background-color: lightseagreen;
        }

        /* Responsive styles for small screens */
        @media screen and (max-width: 600px) {
            .layout-wrapper {
                flex-direction: row;
                align-items: flex-start;
                gap: 10px;
            }

            .header {
                flex-direction: column;
                width: 150px;
                gap: 0;
            }

            .nav-group {
                flex-direction: column;
                width: 100%;
            }

            .nav-link {
                width: 100%;
                border-bottom: 1px solid #ccc;
            }

            .main-content {
                flex: 1;
                overflow: auto;
                height: 100vh;
            }

            .content-wrapper {
                margin-top: 0;
            }
        }
    </style>
</head>

<body>
    <!-- Layout container -->
    <div class="layout-wrapper">

        <!-- Header navigation -->
        <header class="header">
            <nav class="nav-group">
                <div class="nav-link">Home</div>
                <div class="nav-link">News</div>
                <div class="nav-link">Contact</div>
            </nav>
            <div class="nav-link">About</div>
        </header>

        <!-- Main content -->
        <main class="main-content">
            <!-- Text content section -->
            <section class="content-wrapper">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, id quos molestiae assumenda
                    maxime tenetur sint placeat corrupti dolorum quas quaerat reiciendis impedit praesentium nihil fugit
                    voluptate possimus suscipit atque.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem temporibus officia possimus
                    aut delectus reprehenderit nostrum voluptatem ullam animi magni quos velit sint natus dignissimos,
                    doloribus odit quam assumenda eligendi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit aliquam temporibus molestias quis
                    dolor! Recusandae, illo ea fugiat, tempora accusamus ad esse distinctio quibusdam, ipsa eveniet
                    dicta voluptas fuga?
                </p>
            </section>

            <!-- Cards section -->
            <section class="card-section-wrapper">
                <div class="card-container">
                    <div class="card card-west">Box1</div>
                    <div class="card card-east">Box2</div>
                    <div class="card card-west">Box3</div>
                    <div class="card card-east">Box4</div>
                    <div class="card card-west">Box5</div>
                    <div class="card card-east">Box6</div>
                    <div class="card card-west">Box7</div>
                    <div class="card card-east">Box8</div>
                    <div class="card card-west">Box9</div>
                </div>
            </section>
        </main>
    </div>
</body>

</html>

```
