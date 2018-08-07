import React from 'react'
import Assignment from './Assignment'

export const Intervention = ({ student }) => (
  <Assignment
    name='Intervention'
    student={student}
    course='Integrative Studio 2: Systems & Strategies'
    school='Parsons School of Design'
    description='Thinking about leverage points in the system you are researching and strategies to bring about sustainable change, design an intervention that you can execute yourself or with a small group. The intervention can take the form of a public performance, installation, action, or series of events. You will create and iterate over multiple drafts of the intervention and document it and your process at its various stages.'
    goals={[
      'To map the landscape of your research. Start by putting your research question at the center. Add around it the information, resources, and insights you have gathered. As you work on your map, add new questions and hunches that come up.',
      'To explore different aspects of your system that you would like to see change or that you would like to point to / focus on.',
      'To develop a form of intervention that you can affect the system you are researching. Think back to discussions we had around power and leverage points in systems and draw inspiration from examples and strategies we look at in class.'
    ]}
  />
)

export default Intervention
