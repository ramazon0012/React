import React from "react";

class Lesson1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'Ford',
            age: 13,
            job: 'Fullstack dasturchisi', 
            date: new Date()
        };
    }

    render() {
        return(
            <>
                <h1>Mening ismim {this.state.name}, yoshim {this.state.age}, men {this.state.job}man</h1>
                <h2>Bugun {this.state.date.toLocaleDateString()}</h2>
            </>
        )
    }
}
export default Lesson1;
