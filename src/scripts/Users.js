import React from "react";
import User from "./User";

class Users extends React.Component {
    
    render () {

        if (this.props.users.length > 0)
    return(<div className="users-list">
        {this.props.users.map((el) => 
            ( <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} onOpen={this.props.onOpen} key={el.id} user={el} /> ))}
    </div>)
    else
        return (<div className="user">No users found</div>)
}
    
}

export default Users