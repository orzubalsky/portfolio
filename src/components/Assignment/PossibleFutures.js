import React from 'react'
import Assignment from './Assignment'

export const PossibleFutures = ({ student }) => (
  <Assignment
    name='Possible Futures'
    student={student}
    course='Integrative Studio 2: Systems & Strategies'
    school='Parsons School of Design'
    description='Adapted from The Extrapolation Factory Operators Manual: Through a series of exercises, you will envision different potential futures for the subculture or space you are researching. Some are more likely than others but all can be imagined. Each of these possibilities, were it to become a reality, would result in new designed objects and services being created and existing ones being modified. After documenting several possible futures in terms of their likelihood and their respective technological, ecological, social, political, and economical aspects, you will design an object, service, or space, which materially manifests the conditions of one of the possible futures you imagined!'
    goals={[
      'To map the technological, ecological, social, political, and economic qualities from different possible futures onto a grid of probability: probable, plausible, possible, and impossible.',
      'To envision different possible futures for the space/subculture you are researching.',
      'To write a description of one scenario that encompasses a future that you are interested in investigating.',
      'Tp extrapolate the material conditions that might emerge based on the system paradigm in the scenario you selected.',
      'To design and make an object / service / space that would exist in the particular future you envisioned.'
    ]}
  />
)

export default PossibleFutures
