import React from 'react';
import PropTypes from 'prop-types';

class Student extends React.Component{

    static defaultProps = {
        sid:101122624,
        nm: "Steven Nguyen",
        school: "George Brown College"
    }

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <h1>Welcome to Full Stack Development</h1>
                <h2>React JS Programming week 7 Lab exercise</h2>
                <p>{this.props.sid}</p>
                <p>{this.props.nm}</p>
                <p>{this.props.school}</p>
            </>
        )
    }
}

Student.propTypes = {
    sid:PropTypes.number,
    nm: PropTypes.string.isRequired,
    school: PropTypes.string,
}

export default Student;