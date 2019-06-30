import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boxes from "./Boxes";

export default class Home extends Component {
  state = {
    rowValue: '',
    columnValue: '',
    rowSpace: '',
    boxSpace: '',
    printbox: false
  }
  onRowChange = (e) => {
    this.setState({ rowValue: e.target.value })
  }
  onRowSpaceChange = (e) => {
    this.setState({ rowSpace: e.target.value })
  }
  onBoxSpaceChange = (e) => {
    this.setState({ boxSpace: e.target.value })
  }
  onColumnChange = (e) => {
    this.setState({ columnValue: e.target.value })
  }
  onSubmit = () => {
    if (this.state.rowValue == "") {
      alert("Enter number of rows");
    }
    else if (this.state.columnValue == "") {
      alert("Enter number of columns");
    }
    else if (this.state.rowSpace == "") {
      alert("Enter space between rows");
    }
    else if (this.state.boxSpace == "") {
      alert("Enter space between column");
    }
    else {
      this.setState({ printbox: true });
    }

  }
  render() {
    return (
      <div className=" pt-5">
        <div className="card card-body ml-2" style={{ width: "1000px" }} >
          <div className="row" >
            <div className="col-md-6">
              <div className="form-group">
                <label htmlfor="value">Enter Number of Rows</label>
                <div className="form-group">
                  <input type="text" className="form-control" onChange={this.onRowChange} placeholder="Enter" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlfor="value">Enter Number of Columns For Each Row Like (2,3) </label>
                <div className="form-group">
                  <input type="text" className="form-control" onChange={this.onColumnChange} placeholder="Enter" />
                </div>
              </div>
            </div>
          </div >
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlfor="value">Space Between Rows</label>
                <div className="form-group">
                  <input type="text" className="form-control" onChange={this.onRowSpaceChange} placeholder="Enter" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlfor="value">Space Between Boxes</label>
                <div className="form-group">
                  <input type="text" className="form-control" onChange={this.onBoxSpaceChange} placeholder="Enter" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlfor="value"></label>
                <div className="form-group">
                  <button type="button" className="btn btn-primary mt-2" onClick={this.onSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          {this.state.printbox && <Boxes rowSpace={this.state.rowSpace} rowValue={this.state.rowValue} columnValue={this.state.columnValue} columnSpace={this.state.boxSpace} />}
        </div>
      </div>
    )
  }
}

