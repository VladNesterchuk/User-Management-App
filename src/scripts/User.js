import React from "react";
import Form from "./Form";
import { MdModeEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

class User extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            editForm: false
        }
    }

    render () {
    const user = this.props.user

    return( 
        <div className="user" onClick={() => this.props.onOpen(user)}>
            
                <IoMdClose className="close" onClick={(e) => { e.stopPropagation(); this.props.onDelete(user.id)}} />
                <MdModeEdit className="edit" onClick={(e) => { e.stopPropagation(); this.setState({ editForm: !this.state.editForm }) }} />     
                
                <h3>{user.firstname} {user.lastname}</h3>
                <p className="position">{user.position}</p>

                <div className="meta">
                    <span className="chip">Age: {user.age}</span>
                    <span className="chip">{user.workExp ? 'With work experience' : 'Without work experience' }</span>
                </div>

                    <p className="email">{user.email}</p>
                    <p className="bio">Bio: {user.bio}</p>
                    
                
                {this.state.editForm && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <Form user={user} onAdd={this.props.onEdit}/>
                    </div>
                )}
            </div>
    )
}
}

export default User