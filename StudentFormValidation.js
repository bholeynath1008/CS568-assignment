import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from "uuid";

const initialData = {
  id:"001",
  firstName: 'Bholey',
  lastName: 'Nath',
  dob: '2000-01-01',
  phone: '123-12-123',
  color: '#000000',
  range: '27',
  education: 'master',
  hobbies: ['pool'],
  gender: 'male',
  luckyno: '123',
  about: 'Hi i am Bholey',
};

function App() {
  // initial form state on main database
  const [form, setForm] = useState(initialData);

  // add new student data in form
  function updateForm(studentData) {
    // create a new object with the new studentData, including a generated ID
    const newStudentData = {
      ...studentData,
      id: uuidv4().slice(0, 3),
    };
    // update form with the new object
    setForm({ ...form, ...newStudentData });
    console.log(form);
  }
  return (
    <div className="App">
      <h1>Student Form</h1>
      <RegisterForm updateForm={updateForm} />
    </div>
  );
}

// Register component
function RegisterForm({ updateForm }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    color: '',
    range: '',
    education: '',
    hobbies: [],
    gender: '',
    luckyno: '',
    about: '',
  });

  //Initalizes for the color changes store colors in hexadecimal
  const [colorHex, setColorHex] = useState('');

  // Handle for the checkboxes for the color and includes conditions to handle color picker
  function handleCheckboxChange(e) {
    // color picker to handle which color is selected
    const name = e.target.value;
    const value = e.target.value;
    if (name === 'color') {
      setFormData({
        ...formData,
        color: value
      });
      setColorHex(value);
    }

    //Checkbox handler for selectd hobbies in the checkbox
    const selectedHobby = e.target.value;
    if (e.target.checked) {
      setFormData({
        ...formData,
        hobbies: [...formData.hobbies, selectedHobby]
      });
    } else {
      setFormData({
        ...formData,
        hobbies: formData.hobbies.filter((hobby) => hobby !== selectedHobby)
      });
    }
  }


  // handle input change, this will works for different value name
  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // handle the submit button

  function handleFormSubmit(e) {
    e.preventDefault();
    // check if firstname and lastname and age are not empty
    if (formData.firstName.trim() === '' || formData.lastName.trim() === '' || formData.dob.trim() === '') {
      alert('Please fill in the required fields.');
    } else {
      const today = new Date();
      const birthDate = new Date(formData.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      // check if age is less than 18 years old
      if (age < 18) {
        alert('Age must be at least 18 years old.');
      }
      updateForm(formData);
    }
  }
  return (
    // onsubmit button handler for form
    <form onSubmit={handleFormSubmit}>
      <label>
        First Name
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Last Name
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        DOB
        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
      </label>
      <br />
      {/* Above is okay */}
      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        value={formData.phone}
        id="phone"
        name="phone"
        placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        onChange={handleInputChange}
      // required
      />
      <br />
      {/* Color */}

      <label>
        Favorite Color
        <input
          type="color"
          value={formData.color}
          name="color"
          onChange={handleInputChange}
        />
        Hexadecimal Value: {colorHex}
      </label>
      <br />

      <label>
        Range
        <input type="range"
          value={formData.range}
          name="range"
          min="0"
          max="50"
          onChange={handleInputChange}
        />
        value:{formData.range}
      </label>
      <br />
      {/* DropDown education */}
      <label htmlFor="education">Choose Education Degree:</label>
      <select id="education1" name="education" value={formData.education} onChange={handleInputChange}>
        <option value="highschool">High School</option>
        <option value="college">College</option>
        <option value="bachelor">Master</option>
        <option value="doctor">Doctor</option>
      </select>
      <br></br>
      {/* Checkbox */}

      <label htmlFor="hobbies">Hobbies</label><br />
      <input type="checkbox" id="motorcycle" name="hobbies" value="Bike" onChange={handleCheckboxChange} />
      <label htmlFor="motorcycle">Motorcycle</label><br />
      <input type="checkbox" id="pool" name="hobbies" value="Pool" onChange={handleCheckboxChange} />
      <label htmlFor="pool">Pool</label><br />
      <input type="checkbox" id="soccer" name="hobbies" value="Soccer" onChange={handleCheckboxChange} />
      <label htmlFor="soccer">Soccer</label><br />
      <input type="checkbox" id="swimming" name="hobbies" value="Swimming" onChange={handleCheckboxChange} />
      <label htmlFor="swimming">Swimming</label><br />


      {/* gender radio */}
      <label htmlFor="gender">Gender</label><br />
      <input type="radio" id="male" name="gender" value="male" onChange={handleInputChange} />
      <label htmlFor="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange} />
      <label htmlFor="female">Female</label>
      <input type="radio" id="others" name="gender" value="others" onChange={handleInputChange} />
      <label htmlFor="others">Others</label><br />
      {/* gender radio done */}

      <label htmlFor="html">Lucky Number</label><br />
      <input type='number' maxLength={4} placeholder='Lucky no' name='luckyno' value={formData.luckyno} onChange={handleInputChange} /><br />
      <label>Text Area</label><br />
      <textarea id="myTextArea" name='about' value={formData.about} onChange={handleInputChange} />
      <br /><br />


      {/* Submit here */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

