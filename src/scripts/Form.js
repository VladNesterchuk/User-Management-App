import React from "react";

class Form extends React.Component {
    userAdd ={}
    constructor (props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            email: "",
            workExp: true,
        }   
    }
    render () {
    return(
        <form className="form" ref={(el) => this.myForm = el}>
            <input placeholder="Your Name" onChange={(e) => this.setState({firstname: e.target.value})}></input>
            <input placeholder="Your Last Name" onChange={(e) => this.setState({lastname: e.target.value})}></input>
            <input placeholder="Your Desiring Position" onChange={(e) => this.setState({position: e.target.value})}></input>
            <input placeholder="Your Age" onChange={(e) => this.setState({age: e.target.value})}></input>
            <input placeholder="Your Email" onChange={(e) => this.setState({email: e.target.value})}></input>
            <textarea placeholder="Your Bio" onChange={(e) => this.setState({bio: e.target.value})}></textarea>
            <div className="checkbox-container">
            <label htmlFor="workExp">Do you have work experience?</label>
            <input type="checkbox" id="workExp" onChange={(e) => this.setState({workExp: e.target.checked})}></input>
            </div>
            <button type="button" onClick={() => {
                this.myForm.reset()
                this.userAdd ={
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    position: this.state.position,
                    age: this.state.age,
                    email: this.state.email,
                    bio: this.state.bio,
                    workExp: this.state.workExp,
                }
                if(this.props.user)
                    this.userAdd.id = this.props.user.id
                this.props.onAdd(this.userAdd)}
            }>Add</button>
        </form>
    )
}
}

export default Form