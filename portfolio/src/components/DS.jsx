import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import LoadingHOC from './Hoc';

// const AppLink = (props) => ({
//     render: () => (
//         <Link {...props} activeClassName="active" />
//     )
// })

// class Ds extends Component {
//     render() {
//         return (
//             <Router>
//                 <nav>
//                     <App Link to="/">Home</AppLink>
//                     <AppLink to="/portfolio">Portfolio</AppLink>
//                     <AppLink to="/contacts">Contacts</AppLink>
//                 </nav>
//             </Router>
//         )
//     }
// }
class AppComponentUI extends Component {
    render () {
        return (
            <div>{this.props.data.title}</div>
        );
    }
}

const AppComponent = LoadingHOC('data')(AppComponentUI);

class Ds extends Component {
    state ={
        data: {},
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => this.udateState(data))
    }

    udateState = (data) => {
        window.setTimeout(() => {
            this.setState({ data })
        }, 3000);
    }


    render() {
        return (
            <AppComponent data={this.state.data} />
        );
    }
}



export default Ds;