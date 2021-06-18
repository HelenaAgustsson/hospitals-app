import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { pool } from './mysql-pool';

export class HospitalsNorth extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="North"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsEast extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="East"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsHC extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="Home Counties"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsLondon extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="London"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsMidlands extends Component {
  programs = [];
  hospitals = [];
  result = '';
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="Midlands"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsScotland extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="Scotland"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
  copy() {
    console.log(document.getElementsByTagName('TABLE').value());
  }
}

export class HospitalsSouth extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="South"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsSouthWest extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="South West"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsWales extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="Wales"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsNI extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th scope="col">Hospital</th>
                <th scope="col">City</th>
                <th scope="col">Postcode</th>
                <th scope="col">Region</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {this.hospitals.map((hospital) => (
                <tr key={hospital.Hospital}>
                  <td>{hospital.Hospital}</td>
                  <td>{hospital.City}</td>
                  <td>{hospital.Postcode}</td>
                  <td>{hospital.Region}</td>
                  <td>
                    <a target="_blank" href={hospital.Website}>
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="Northern Ireland"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}
