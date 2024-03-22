1. **static** : Normal position as per dom render. Default positioning; elements follow `normal document flow`. Properties like `top`, `bottom`, `left`, and `right` have no effect.

2. **relative** : relative to its normal position, it will be move from its normal positon when top:10px. If you want to move from original (old) positon then use "relative". "aafno original location jaha xa teha bata moove garaune". Positioned relative to its normal position; can be moved using `top`, `bottom`, `left`, or `right`.

3. **absolute** : It will move relative to its parents. Change position as per its first parent;

4. **fixed** `chatbox` : position relative to browser window (`chat with us`). remain at same place even it is scrolled. Positioned relative to the viewport; remains fixed even when scrolled; removed from normal flow. (`Normal Flow removed`)

5. **sticky** `navbar` : stick at it same positon (nav bar), positioned based on the user's scroll position. Initially behaves like `relative`, but switches to `fixed` once a specified threshold is reached during scrolling; temporarily removed from normal flow. (`Normal Flow removed`)

**Z-index**: Elements with `position` other than `static` create stacking contexts, affecting their overlap order.
