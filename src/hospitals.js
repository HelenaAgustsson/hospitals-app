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
      <table>
        <tbody>
          {this.hospitals.map((hospital) => (
            <tr key={hospital.Hospital}>
              <td>{hospital.Hospital}</td>
              <td>{hospital.City}</td>
              <td>{hospital.Postcode}</td>
              <td>{hospital.Region}</td>
              <td>
                <a href={hospital.Region}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <table>
        <tbody>
          {this.hospitals.map((hospital) => (
            <tr key={hospital.Hospital}>
              <td>{hospital.Hospital}</td>
              <td>{hospital.City}</td>
              <td>{hospital.Postcode}</td>
              <td>{hospital.Region}</td>
              <td>
                <a href={hospital.Region}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <table>
        <tbody>
          {this.hospitals.map((hospital) => (
            <tr key={hospital.Hospital}>
              <td>{hospital.Hospital}</td>
              <td>{hospital.City}</td>
              <td>{hospital.Postcode}</td>
              <td>{hospital.Region}</td>
              <td>
                <a href={hospital.Region}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <table>
        <tbody>
          {this.hospitals.map((hospital) => (
            <tr key={hospital.Hospital}>
              <td>{hospital.Hospital}</td>
              <td>{hospital.City}</td>
              <td>{hospital.Postcode}</td>
              <td>{hospital.Region}</td>
              <td>
                <a href={hospital.Region}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  render() {
    return (
      <table>
        <tbody>
          {this.hospitals.map((hospital) => (
            <tr key={hospital.Hospital}>
              <td>{hospital.Hospital}</td>
              <td>{hospital.City}</td>
              <td>{hospital.Postcode}</td>
              <td>{hospital.Region}</td>
              <td>
                <a href={hospital.Region}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <table>
        <tbody>
          {this.hospitals.map((hospital) => (
            <tr key={hospital.Hospital}>
              <td>{hospital.Hospital}</td>
              <td>{hospital.City}</td>
              <td>{hospital.Postcode}</td>
              <td>{hospital.Region}</td>
              <td>
                <a href={hospital.Region}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="Scotland"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}

export class HospitalsSouth extends Component {
  programs = [];
  hospitals = [];
  render() {
    return (
      <div>
        <p> </p>
        <table>
          <tbody>
            {this.hospitals.map((hospital) => (
              <tr key={hospital.Hospital}>
                <td>{hospital.Hospital}</td>
                <td>{hospital.City}</td>
                <td>{hospital.Postcode}</td>
                <td>{hospital.Region}</td>
                <td>
                  <a href={hospital.Region}>Link</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      <table>
        <tbody>
          {this.hospitals.map((hospital) => (
            <tr key={hospital.Hospital}>
              <td>{hospital.Hospital}</td>
              <td>{hospital.City}</td>
              <td>{hospital.Postcode}</td>
              <td>{hospital.Region}</td>
              <td>
                <a href={hospital.Region}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <table>
        <tbody>
          {this.hospitals.map((hospital) => (
            <tr key={hospital.Hospital}>
              <td>{hospital.Hospital}</td>
              <td>{hospital.City}</td>
              <td>{hospital.Postcode}</td>
              <td>{hospital.Region}</td>
              <td>
                <a href={hospital.Region}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  mounted() {
    pool.query('SELECT * FROM Hospitals WHERE Region="Wales"', [], (error, results) => {
      if (error) return console.log('error');
      this.hospitals = results;
    });
  }
}
