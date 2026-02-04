import React from "react";

class Header extends React.Component {
    render () {
    return(
        <header className="header">
            <div>User Manager Dashboard</div>
            {this.props.isAdmin ? (
                <div className="admin-login" onClick={this.props.onLogout} >Logout </div>
            ) : (
                <div className="admin-login" onClick={this.props.onAdminClick}>Admin login</div>
            )
            }
            
        </header>
    )
}
}

export default Header