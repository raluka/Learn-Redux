import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return <div>
      <h1>
        <Link to='/'>Reduxstragram</Link>
      </h1>
      { /*TODO: How did he do it? routing part using children*/ }
      { React.cloneElement(this.props.children, this.props) }
    </div>
  }
});

export default Main;
