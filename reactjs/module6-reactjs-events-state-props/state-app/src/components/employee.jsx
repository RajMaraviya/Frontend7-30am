import { React, Component } from "react";

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1000',
            name: 'raj',
            salary: '98000',
            address: 'mavdi road, rajkot',
        }
    }

    test = () => {
        this.setState({
            id: '1001',
            name: 'rudra',
            salary: '120000',
            address: 'nana mova main road',
        });
    }
    next = () => {
        this.setState({
            id:'1002',
            name:'shiv',
            salary:'130000',
            address:'mota mova main road',
        })
    }

    render() {
        return (
            <>
                <h1>My employee id is:{this.state.id}</h1>
                <h2>my name is : {this.state.name}</h2>
                <h2>my salary is : {this.state.salary}</h2>
                <h2>my address is : {this.state.address}</h2>

                <button type="button" onClick={this.test}>Next</button>
                <button type="button" onClick={this.next}>next</button>
            </>
        )
    }
}

export default Employee;