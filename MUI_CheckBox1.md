## Case 1: Only one checkbox
### Screen:

- [x] Play
- [x] Sing
- [ ] Dance

### Output (console log):

```Console: 
Selected Hobbies: { hobbies: ["play", "sing"] }
```

```
import React, { useState } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

function App() {
  // State to hold the selected hobbies
  const [selectedHobbies, setSelectedHobbies] = useState({ hobbies: [] });

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // If checkbox is checked, add the hobby to selectedHobbies
      setSelectedHobbies((prevSelectedHobbies) => ({
        ...prevSelectedHobbies,
        hobbies: [...prevSelectedHobbies.hobbies, value]
      }));
    } else {
      // If checkbox is unchecked, remove the hobby from selectedHobbies
      setSelectedHobbies((prevSelectedHobbies) => ({
        ...prevSelectedHobbies,
        hobbies: prevSelectedHobbies.hobbies.filter((hobby) => hobby !== value)
      }));
    }
  };

  // Log the selected hobbies to console for testing purposes
  console.log("Selected Hobbies:", selectedHobbies);

  return (
    <div className="App">
      {/* Checkbox for 'Play' hobby */}
      <FormControlLabel
        control={<Checkbox name="play" value={"play"} onChange={handleCheckboxChange} />}
        label="Play"
      />
      {/* Checkbox for 'Sing' hobby */}
      <FormControlLabel
        control={<Checkbox name="sing" value={"sing"} onChange={handleCheckboxChange} />}
        label="Sing"
      />
      {/* Checkbox for 'Dance' hobby */}
      <FormControlLabel
        control={<Checkbox name="dance" value={"dance"} onChange={handleCheckboxChange} />}
        label="Dance"
      />
    </div>
  );
}

export default App;

```
## Case 2 : Two categories of Checkbox

### Selected Hobbies:
- [x] Play
- [x] Sing
- [ ] Dance

### Selected Sports:
- [x] Cricket
- [x] Badminton
- [ ] Football
- [ ] Basketball

```
Output:
Selected Hobbies: { hobbies: ["play", "sing"] }
Selected Sports: { sports: ["cricket", "badminton"] }
```
```
import React, { useState } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

function App() {
  const [selectedHobbies, setSelectedHobbies] = useState({ hobbies: [] });
  const [selectedSports, setSelectedSports] = useState({ sports: [] });

  const handleCheckboxChange = (category) => (e) => {
    const { value, checked } = e.target;
    if (checked) {
      // Depending on the category, update the respective state
      if (category === "hobbies") {
        setSelectedHobbies((prevSelectedHobbies) => ({
          ...prevSelectedHobbies,
          hobbies: [...prevSelectedHobbies.hobbies, value]
        }));
      } else if (category === "sports") {
        setSelectedSports((prevSelectedSports) => ({
          ...prevSelectedSports,
          sports: [...prevSelectedSports.sports, value]
        }));
      }
    } else {
      // Depending on the category, remove the respective value from state
      if (category === "hobbies") {
        setSelectedHobbies((prevSelectedHobbies) => ({
          ...prevSelectedHobbies,
          hobbies: prevSelectedHobbies.hobbies.filter((hobby) => hobby !== value)
        }));
      } else if (category === "sports") {
        setSelectedSports((prevSelectedSports) => ({
          ...prevSelectedSports,
          sports: prevSelectedSports.sports.filter((sport) => sport !== value)
        }));
      }
    }
  };

  console.log("Selected Hobbies:", selectedHobbies);
  console.log("Selected Sports:", selectedSports);

  return (
    <div className="App">
      <h2>Hobbies:</h2>
      <FormControlLabel
        control={<Checkbox name="play" value={"play"} onChange={handleCheckboxChange("hobbies")} />}
        label="Play"
      />
      <FormControlLabel
        control={<Checkbox name="sing" value={"sing"} onChange={handleCheckboxChange("hobbies")} />}
        label="Sing"
      />
      <FormControlLabel
        control={<Checkbox name="dance" value={"dance"} onChange={handleCheckboxChange("hobbies")} />}
        label="Dance"
      />

      <h2>Sports:</h2>
      <FormControlLabel
        control={<Checkbox name="football" value={"football"} onChange={handleCheckboxChange("sports")} />}
        label="Football"
      />
      <FormControlLabel
        control={<Checkbox name="basketball" value={"basketball"} onChange={handleCheckboxChange("sports")} />}
        label="Basketball"
      />
      <FormControlLabel
        control={<Checkbox name="badminton" value={"badminton"} onChange={handleCheckboxChange("sports")} />}
        label="Badminton"
      />
      <FormControlLabel
        control={<Checkbox name="cricket" value={"cricket"} onChange={handleCheckboxChange("sports")} />}
        label="Cricket"
      />
    </div>
  );
}

export default App;

```
