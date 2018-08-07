import React from 'react'
import Assignment from './Assignment'

export const ExpandedType = ({ student }) => (
  <Assignment
    name='Expanded Type'
    student={student}
    course='Core Studio Interaction'
    school='Parsons School of Design'
    description='As a way to explore, expand, and challenge the notion of reading on a screen, you will develop two systems: a system of writing, which assigns metadata about the content that is being written through code, and a system of reading, which presents this underlying layer of information in a meaningful way.'
    goals={[
      'To explore how typography can be applied to an interactive system and experiment with the underlying conceptual potential.',
      'To practice designing and developing a rich and meaningful screen based interaction.',
      'To create an aesthetic that remains consistent through the various states of an interaction.',
      'To take advantage of various media (image/animation/video/sound) to enrich the experience of a text.'
    ]}
    considerations={[
      'What emotional/contextual/historical/referential/conceptual information exists “behind” a piece of writing?',
      'How can this information be represented and communicated through interaction and visuals/sound?',
      'What makes an interaction emotional? How does it become meaningful?',
      'How do you design an experience?'
    ]}
  />
)

export default ExpandedType
