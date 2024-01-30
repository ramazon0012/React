import React from "react";

class Life extends React.Component {
    constructor() {
        super();
        console.log("constructor ishalayapti")
    }

    componentDidMount() {
        console.log('Componenrmount')
    }
    componentWillMount() {
        console.log('Component will mount')
    }

    render() {
        console.log("Render shw")
      return (
        <>
        </>
      )
    }
}
export default Life;