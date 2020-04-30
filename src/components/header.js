import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHeader: this.props.dataHeader,
    };
  }
  render() {
    const { dataHeader } = this.state;
    console.log(dataHeader);
    return (
      <div className="Header">
        <h1>Hola mundo</h1>
      </div>
    );
  }
}

export default Header;
