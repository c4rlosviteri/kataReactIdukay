import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.calculo = this.calculo.bind(this)
    this.getStart = this.getStart.bind(this)
    this.buscarCamino = this.buscarCamino.bind(this)
  }

  calculo(matriz) {
    const [columna, fila] = this.getStart(matriz)
    const resultado = this.buscarCamino(matriz, columna, fila)
    return resultado
  }

  buscarCamino(matriz, columna, fila) {
    const matrizCopy = [...matriz]

    if (matrizCopy[columna][fila] === 'S') {
      matrizCopy[columna][fila] = 'x'

    } else if (matrizCopy[columna][fila] === 0 || matrizCopy[columna][fila] === 'I') {
      matrizCopy[columna][fila] = 'x'
      if (columna < matrizCopy.length - 1) {
        this.buscarCamino(matrizCopy, columna + 1, fila);
      }
      if (fila < matrizCopy[columna].length - 1) {
        this.buscarCamino(matrizCopy, columna, fila + 1);
      }
      if (columna > 0) {
        this.buscarCamino(matrizCopy, columna - 1, fila);
      }
      if (fila > 0) {
        this.buscarCamino(matrizCopy, columna, fila - 1);
      }
    }

    return matrizCopy
  }

  getStart(matriz) {
    let indexFila;
    let indexColumna;
    const entrada = matriz.forEach((columna, index) => {
      const column = columna.indexOf('I')
      if (column !== -1) {
        indexColumna = column
        indexFila = index
      }
    })
    return [indexColumna, indexFila]
  }

  render() {
    return (
      <div className="container">
        Exercise1 page
      </div>
    );
  }
}

export default Exercise1;
