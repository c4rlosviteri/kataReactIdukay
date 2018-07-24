import React, { Component } from 'react'

export class Exercise1 extends Component {
  constructor (props) {
    super(props)
    this.solution = this.solution.bind(this)
    this.getStartCoords = this.getStartCoords.bind(this)
    this.findPath = this.findPath.bind(this)
    this.drawPath = this.drawPath.bind(this)
  }

  solution (matrix) {
    const [row, column] = this.getStartCoords(matrix)
    const resultantMatrix = this.drawPath(matrix, matrix, row, column)
    return resultantMatrix
  }

  getStartCoords (matrix) {
    let indexRow
    let indexColumn
    matrix.forEach((row, index) => {
      const column = row.indexOf('I')
      if (column !== -1) {
        indexRow = index
        indexColumn = column
      }
    })
    return [indexRow, indexColumn]
  }

  findPath (matrix, row, column) {
    if (
      row >= 0 &&
      row < matrix.length &&
      (column >= 0 && column < matrix[0].length) &&
      (matrix[row][column] === 0 ||
        matrix[row][column] === 'S' ||
        matrix[row][column] === 'I')
    ) {
      return true
    }
    return false
  }

  drawPath (matrix, matrixCopy, row, column) {
    if (
      row >= 0 &&
      row < matrix.length &&
      (column >= 0 && column < matrix[0].length) &&
      matrix[row][column] === 'S'
    ) {
      matrixCopy[row][column] = 'x'
      return matrixCopy
    }

    if (this.findPath(matrix, row, column)) {
      matrixCopy[row][column] = 'x'

      if (this.drawPath(matrix, matrixCopy, row + 1, column)) {
        return matrixCopy
      }
      if (this.drawPath(matrix, matrixCopy, row, column + 1)) {
        return matrixCopy
      }
      if (this.drawPath(matrix, matrixCopy, row - 1, column)) {
        return matrixCopy
      }
      if (this.drawPath(matrix, matrixCopy, row, column - 1)) {
        return matrixCopy
      }
      return false
    }
    return false
  }

  render () {
    return (
      <div className='container'>
        Exercise1 page
      </div>
    )
  }
}

export default Exercise1
