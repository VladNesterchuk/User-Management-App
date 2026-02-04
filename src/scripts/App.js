import React from "react";
import Header from "./Header";
import Users from "./Users";
import Form from "./Form";
import LoginForm from "./LoginForm";
import UserCard from "./UserCard";

class App extends React.Component {

    usersStorageKey = "users";


    constructor(props){
        super(props)

        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Vladyslav',
                    lastname: 'Nesterchuk',
                    position: 'Frontend Developer',
                    bio: `Front-end developer eager to grow professionally. Highly motivated, with practical experience in
                            website layout and front-end development. Strong communication skills, responsible work attitude, quick
                            learner, and able to work both independently and in a team.`,
                    age: 19,
                    email: 'vlad.nesterchuk0906@gmail.com',
                    workExp: false
                },
                {
                    id: 2,
                    firstname: 'Maison ',
                    lastname: 'Franklin',
                    position: 'Backend Developer',
                    bio: `Backend developer focused on building reliable server-side applications and RESTful APIs. 
                        Has experience working with databases, authentication systems, and server logic optimization.
                        Enjoys solving complex problems, improving application performance, and writing clean, maintainable code. 
                        Interested in scalable architectures and backend security best practices.`,
                    age: 25,
                    email: 'm.franklin92@gmail.com',
                    workExp: false
                },
                {
                    id: 3,
                    firstname: 'Ellis ',
                    lastname: 'Harris',
                    position: 'Client Manager',
                    bio: `Backend developer focused on building reliable server-side applications and RESTful APIs. 
                        Has experience working with databases, authentication systems, and server logic optimization. 
                        Experienced client manager with strong communication and organizational skills. 
                        Works closely with clients to understand their needs and ensure high-quality project delivery. 
                        Skilled in managing workflows, coordinating between teams, and maintaining long-term client relationships. 
                        Focused on customer satisfaction and effective problem solving.Enjoys solving complex problems, improving application performance, and writing clean, maintainable code. 
                        Interested in scalable architectures and backend security best practices.`,
                    age: 33,
                    email: 'e.harris.dev@gmail.com',
                    workExp: true
                },
                {
                    id: 4,
                    firstname: 'Michael',
                    lastname: 'Anderson',
                    position: 'Senior Software Engineer',
                    bio: `Senior Software Engineer with extensive experience in designing, developing, and maintaining complex web applications.
                        Has been working in the IT industry for over 8 years, participating in both small startup projects and large enterprise systems.

                        Strong background in JavaScript, TypeScript, React, and Node.js, with a deep understanding of frontend architecture,
                        component-based design, and performance optimization. Experienced in building scalable REST APIs, integrating
                        third-party services, and working with SQL and NoSQL databases.

                        Actively involved in code reviews, mentoring junior developers, and improving development workflows.
                        Pays great attention to clean code principles, documentation, and long-term maintainability of projects.

                        Comfortable working in Agile and Scrum environments, collaborating closely with designers, product managers,
                        and QA engineers. Has experience in breaking down complex requirements into clear technical tasks and delivering
                        features on time.

                        Passionate about learning new technologies, experimenting with modern tools, and staying up to date with
                        industry trends. Regularly reads technical documentation, participates in developer communities,
                        and improves personal skills through pet projects and open-source contributions.

                        Strong problem-solving mindset, good communication skills, and ability to work both independently
                        and as part of a distributed team. Focused on building high-quality software that provides real value to users.`,
                    age: 32,
                    email: 'michael.anderson.dev@gmail.com',
                    workExp: true
                },
            ],
            
            admin: [{login: "admin",password: "admin"}],
            showLogin: false,
            isAdmin: false,
            loginError: "",
            selectedUser: null,
        }

        this.Form = this.Form.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
        this.logoutAdmin = this.logoutAdmin.bind(this)

        
        
    }
    

    render () {
        return(
            <div>
                <Header onAdminClick={this.toggleLogin} isAdmin={this.state.isAdmin} onLogout={this.logoutAdmin}/>
                {this.state.showLogin &&(
                    <LoginForm onClose={this.toggleLogin} onAdminClick={this.toggleLogin} onLogin={this.getAdminLogin} error={this.state.loginError}/>
                )}

                <main> {this.state.isAdmin ? (
                    <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser} onOpen={this.openUserCard}/>
                ) : (
                   <Form onAdd={this.Form}/> 
                )}

                        {this.state.selectedUser && (
                            <UserCard user={this.state.selectedUser} onClose={this.closeUserCard}/>
                        )}
                    </main>
            </div>
        )
}

    componentDidMount() {

        //admin
        const saved = localStorage.getItem("isAdmin");
        
        if (saved === "true") {
            this.setState({ isAdmin: true });
        }

        //users
        const savedUsers = localStorage.getItem(this.usersStorageKey);
        if (savedUsers) {
            try{
                const parsed = JSON.parse(savedUsers);
                if (Array.isArray(parsed)) {
                    this.setState({users: parsed});
                }
                } catch (e) {
                    console.log("Bad user JSON");
                }
            }
        }

    openUserCard = (user) =>{
        this.setState({selectedUser: user});
    }

    closeUserCard = () =>{
        this.setState({selectedUser: null});
    }

    saveUsersToStorage= (users) => {
        localStorage.setItem(this.usersStorageKey, JSON.stringify(users));
    }

    getAdminLogin =(login, password) =>{
        const correct = this.state.admin.some((e) => e.login === login && e.password === password);

        if(correct) {
                localStorage.setItem("isAdmin", "true");
                this.setState({isAdmin: true ,showLogin: false, loginError: ""});
            }
        else {
            this.setState({loginError: "Невірний логін або пароль"});
        }
    }

    logoutAdmin = () =>{
        localStorage.removeItem("isAdmin");
            this.setState({isAdmin: false ,showLogin: false, loginError: ""});
    }

    toggleLogin = () => {
            this.setState(prev => ({showLogin: !prev.showLogin}))
        }

    editUser(user){
        const updatedUsers = this.state.users.map((u) => u.id === user.id ? {...u, ...user} : u);
        
        this.setState({users: updatedUsers});
        this.saveUsersToStorage(updatedUsers);
    }

    deleteUser(id){
        const updatedUsers = this.state.users.filter((el) => el.id !== id);

        this.setState({users: updatedUsers});
        this.saveUsersToStorage(updatedUsers);
    }

    Form(user){
        const id = this.state.users.length > 0
        ? Math.max(...this.state.users.map(u => u.id)) + 1
        : 1 ;

        const updatedUsers = [...this.state.users, {id, ...user}]
        this.setState({users: updatedUsers});
        this.saveUsersToStorage(updatedUsers);
    }

}

export default App