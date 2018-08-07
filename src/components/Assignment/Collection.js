import React from 'react'
import Assignment from './Assignment'

export const Collection = ({ student }) => (
  <Assignment
    name='Collection'
    student={student}
    course='Core Studio Interaction'
    school='Parsons School of Design'
    description='Following discussions regarding information architecture and modes of classification, you will start a collection of at least 30 items and develop a system of organization and presentation for it. After a process of research, wireframing, and prototyping, you will produce a multi page website showcasing your collection and the items in it.'
    goals={[
      'To practice articulating strategy, scope, and structure as part of a user experience design process.',
      'To explore and research precedents for a topic.',
      'To develop a large scale website using techniques such as sketching, wireframing, user flows, and prototyping.',
      'To experiment with the ways systems of ordering of data and metadata shift and make the meaning the content being presented.',
      'To utilize HTML and CSS in order to put together a visually cohesive website with intentional navigation and thought out user flows.'
    ]}
    considerations={[
      'How is the collection classified, organized, and ordered, and what does it say about it?',
      'How does the website reflect the contents of your collection?',
      'Who is the audience for your collection?',
      'How will your audience navigate your collection?',
      'Are elements in your collection related to each other? How? How should these relationships be represented and experienced by your audience?'
    ]}
  />
)

export default Collection
