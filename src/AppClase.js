import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    n: false,
  };

  functionA = () => {
    this.setState({
      n: !this.state.n,
    });
  };

  functionB = () => {
    this.props.s(this.state);
    if (this.state.n) {
      alert("Se ha guardado la selecciòn de activar las notificaciones");
    } else {
      alert("Se ha guardado la selecciòn de desactivar las notificaciones");
    }
  };

  functionC = () => {
    if (this.state.n) {
      return "Activas";
    } else {
      return "Inactivas";
    }
  };

  functionD = () => {
    if (this.state.n) {
      return "Desactivar notificaciones";
    } else {
      return "Activar notificaciones";
    }
  };

  render() {
    return (
      <div className="teste">
        <h1>
          ¿Desesa recibir notificaciones sobre la serie Rick y Morty en su
          email?
        </h1>
        <p>
          Status: <b>{this.functionC()}</b>
        </p>
        <br />
        <button onClick={this.functionA}>{this.functionD()}</button>
        <br />
        <br />
        <br />
        <button onClick={this.functionB} className="sa">
          Guardar
        </button>
      </div>
    );
  }
}

const state = (state) => {
  return {
    n: state.n,
  };
};

const mdtp = (dispatch) => {
  return {
    s: (ss) => dispatch({ type: "SAVE_SETTINGS", ss }),
  };
};

export default connect(state, mdtp)(App);
