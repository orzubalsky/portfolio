import React from 'react'
import Assignment from './Assignment'

export const EverydaySystems = ({ student }) => (
  <Assignment
    name='Everyday Systems'
    student={student}
    course='Integrative Studio 2: Systems & Strategies'
    school='Parsons School of Design'
    description='Everyday, we participate in a multitude of systems and environments. These systems exist on multiple scales, from the microscopic to the cosmic. They affect us and we affect them. For this assignment, you will identify a system that you are a part of and investigate it.'
    goals={[
      'To Identify a system that you’re a part of everyday and document how it is changing, failing, succeeding, affecting other systems or relationships.',
      'To produce a piece that represents a part of the system that you think is interesting and you feel personally invested in.',
      'To experiment with an iterative making process: make a draft of the piece, document it, note what it does and doesn’t communicate & what meaning it conveys, and revise.'
    ]}
    considerations={[
      'How do nodes, flows, feedback loops, boundaries, and interfaces fit into your observation of the sytem?',
      'What materials and forms are suitable to communicate the system as you understand it?',
      'What form would best suit the part of the system you are representing? (a poster, sculpture, quilt, performance, something else)?',
      'How does the system changes when presented from a different perspective (MTA system organized as human VS rat, hospital system organized by empathy VS law, meat consumption system organized by supply/demand chains VS hormone regulation)?'
    ]}
  />
)

export default EverydaySystems
