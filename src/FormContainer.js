import React, {Component} from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component {
    constructor() {
      super()
      this.state= {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        vegetarian: false,
        kosher: false,
        lactoseFree: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
      const {name, value, type, checked} = event.target
  
      type === "checkbox" ? 
        this.setState({ [name] : checked }) : this.setState({ [name]: value })
    }
  
    handleSubmit() {
      alert(
        "First Name: " + this.state.firstName + 
        "\nLast Name: " + this.state.lastName + 
        "\nAge: " +this.state.age + "\nGender: " + this.state.gender + 
        "\nDestination: " + this.state.destination + 
        "\nDiet Restrictions: " 
          + (this.state.vegetarian ? "Vegetarian" : "")
          + (this.state.kosher ? ", Kosher" : "")
          + (this.state.lactoseFree ? ", Lactose Free" : "")
      )
    }
  
  
    
    
  
    render() {

        return (
            <FormComponent 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}
            />
        )
    }
  }

export default FormContainer