import React from "react";

const FormComponent = (props) => {
  return (
    <div className="App">
      <h1>React Forms!</h1>

      <form onSubmit={props.handleSubmit}>

        {/* ******************FIRST NAME****************** */}
        <label>First Name: </label>
        <input 
          placeholder="First Name"
          type="text" 
          name="firstName"
          onChange={props.handleChange}
          value={props.data.firstName}
        /> <br/><br/>

        {/* ******************LAST NAME****************** */}
        <label>Last Name: </label>
        <input 
          placeholder="Last Name"
          type="text" 
          name="lastName"
          onChange={props.handleChange}
          value={props.data.lastName}
        /> <br/><br/>

        {/* ******************AGE****************** */}
        <label>Age: </label>
        <input 
        placeholder="Age"
          type="number" 
          name="age"
          onChange={props.handleChange}
          value={props.data.age}
        /> <br/><br/>

        {/* ******************GENDER****************** */}
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="Male"
            checked={props.data.gender === "Male"}
            onChange={props.handleChange}
          /> Male
        </label>

        <label>
          <input 
            type="radio" 
            name="gender" 
            value="Female"
            checked={props.data.gender === "Female"}
            onChange={props.handleChange}
          /> Female
        </label> <br/><br/>

        {/* ******************DESTINATION****************** */}
        <label>Destination: </label>
        <select
          value={props.data.destination}
          onChange={props.handleChange}
          name="destination"
        >
          <option value="" disabled>Select</option>
          <option value="California, USA">California, USA</option>
          <option value="Mexico">Mexico</option>
          <option value="China">China</option>
          <option value="Germany">Germany</option>
        </select> <br/><br/>

        {/* ******************DIETARY RESTRICTION****************** */}
        <label>Dietary Restrictions: </label> <br/><br />

        <label>
          <input 
            type="checkbox" 
            name="vegetarian"
            checked={props.data.vegetarian}
            onChange={props.handleChange}
          /> Vegetarian
        </label> <br/><br/>

        <label>
          <input 
            type="checkbox" 
            name="kosher"
            checked={props.data.kosher}
            onChange={props.handleChange}
          /> Kosher
        </label> <br/><br/>

        <label>
          <input 
            type="checkbox" 
            name="lactoseFree"
            checked={props.data.lactoseFree}
            onChange={props.handleChange}
          /> Lactose Free
        </label> <br/><br/><br/>

        <button type="submit">Submit</button> <br/><br/><br/>
      </form>
    </div>
  )
}

export default FormComponent