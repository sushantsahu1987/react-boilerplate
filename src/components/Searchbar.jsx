import React, { Component } from 'react';

class Searchbar extends Component {

  render() {


    const handleSubmit = () => {

    }


    return (
      <div className="w-100">
        <form className="form-inline">
          <div className="form-group">
            <input type="search" className="form-control" id="email"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )

  }
}

export default Searchbar;
