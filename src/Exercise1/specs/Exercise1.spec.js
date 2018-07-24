import React from 'react'
import { shallow } from 'enzyme'
import Exercise1 from '../Exercise1'

describe('Exercise1', () => {
  let component
  let instance

  beforeEach(() => {
    component = shallow(<Exercise1 />)
    instance = component.instance()
  })

  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({})
    })
  })

  describe('Ejemplo 1', () => {
    it('deberia retornarme una matriz con el camino', () => {
      const matriz3x3 = [['I', 0, 1], [1, 0, 1], [1, 0, 'S']]

      const salida = instance.solution(matriz3x3)

      expect(salida).toEqual([['x', 'x', 1], [1, 'x', 1], [1, 'x', 'x']])
    })

    it('deberia retornarme una matriz con el camino 2', () => {
      const matriz3x3 = [
        ['I', 0, 0, 1, 'S'],
        [1, 0, 1, 1, 0],
        [1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0]
      ]

      const solution = instance.solution(matriz3x3)

      expect(solution).toEqual([
        ['x', 'x', 0, 1, 'x'],
        [1, 'x', 1, 1, 'x'],
        [1, 'x', 0, 1, 'x'],
        [0, 'x', 1, 0, 'x'],
        [1, 'x', 'x', 'x', 'x']
      ])
    })
  })
})
