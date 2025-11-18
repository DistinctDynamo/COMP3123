import React from 'react';
import axios from 'axios';

export default class Persons extends React.Component 
{

    state = {
        persons: []
    }
    
     //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        });
    }

    render() {
        return (
            <div>
                <h3>Person List</h3>
            <table border="1" cellPadding="5">
                <thead>
                    <th>Image</th>
                    <th>Id</th>
                    <th>Timezone</th>
                    <th>Street</th>
                </thead>
                <tbody>
                    {this.state.persons.map(person => (
                        <tr>
                            <td><img src={person.picture.thumbnail}/></td>
                            <td>{person.id}</td>
                            <td>{person.timezone}</td>
                            <td>{person.location.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}
