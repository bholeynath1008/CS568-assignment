 **Note :** The parent element to **position: relative** is a common technique used in CSS layout to control the `positioning of child elements` within a specific context

1. **static** : Normal position as per dom render. Default positioning; elements follow `normal document flow`. Properties like `top`, `bottom`, `left`, and `right` have no effect.

2. **relative** : relative to its normal position, it will be move from its normal positon when top:10px. If you want to move from original (old) positon then use "relative". "aafno original location jaha xa teha bata moove garaune". Positioned relative to its normal position; can be moved using `top`, `bottom`, `left`, or `right`.

3. **absolute** : It will move relative to its parents. Change position as per its first parent;

4. **fixed** `chatbox` : position relative to browser window (`chat with us`). remain at same place even it is scrolled. Positioned relative to the viewport; remains fixed even when scrolled; removed from normal flow. (`Normal Flow removed`)

5. **sticky** `navbar` : stick at it same positon (nav bar), positioned based on the user's scroll position. Initially behaves like `relative`, but switches to `fixed` once a specified threshold is reached during scrolling; temporarily removed from normal flow. (`Normal Flow removed`)

**Z-index**: Elements with `position` other than `static` create stacking contexts, affecting their overlap order.


https://layout.bradwoods.io/customize
https://readme.so/



const CustomLinearProgressBar = ({ barValue }) => {
  return (
    <Box display="flex" alignItems="center" p={3} width="500px" height="100%">
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 20,
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 40%, rgba(255,205,0,1) 60%, rgba(242,3,16,1) 100%)',
          borderRadius: 5,
          overflow: 'hidden',
        }}
      >
        {/* Transparent background up to the barValue */}
        <LinearProgress
          variant="determinate"
          value={100}
          sx={{
            height: '100%',
            backgroundColor: 'transparent',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'transparent',
            },
          }}
        />

        {/* Green part that starts from barValue to 100 */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: `${barValue}%`, // Start the green color at the barValue position
            width: `${100 - barValue}%`, // The green color fills from barValue to 100%
            height: '100%',
            backgroundColor: 'green',
          }}
        />

        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            position: 'absolute',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          {`${Math.round(barValue)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomLinearProgressBar;

