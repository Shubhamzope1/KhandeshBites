import React from 'react';

import '../Style/admin.css';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    handleLogout = () => {
        // Clear authentication data
        localStorage.removeItem('isAuthenticated');
        // Redirect to the login page (Admin page)
        window.location.href = '/admin'; // You can also use `this.props.history.push('/admin')` if using `react-router-dom` v5.
    };

    render() {
        console.log("Dashboard Component Rendered"); // Debugging log
        return (
            <div className='rect-admin'>
                <div className='cart-center container'>
                    Hello, Welcome to the Dashboard! 
                </div>
                <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
            </div>
        );
    }
}

export default Dashboard;
