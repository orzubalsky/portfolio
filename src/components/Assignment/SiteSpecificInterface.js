import React from 'react'
import Assignment from './Assignment'

export const SiteSpecificInterface = ({ student }) => (
  <Assignment
    name='Site Specific Interface'
    student={student}
    course='Core Studio Interaction'
    school='Parsons School of Design'
    description='With consideration of the interface as a fluid threshold between human and machine, physical and non-physical, you will research and develop a mobile-first website that adds to or changes the meaning of specific physical location.'
    goals={[
      'To utilize the various skills we covered over the course of the semester to create a rich and consistent interface.',
      'To enrich the experience of a physical location by digital means.',
      'To practice the clear communication of a point of view.',
      'To evaluate the limitations in different kind of devices and create appropriate responsive design.'
    ]}
    considerations={[
      'How do you mediate various meanings of a particular place?',
      'What forms of cultural/historical/personal knowledge is invisible in a physical location? How can it be communicated?',
      'Can interactive media negotiate the experience of public space?',
      'How do you take advantage of the ubiquity of smart phones and the way they are used?',
      'What design patterns are effective on a mobile phone?'
    ]}
  />
)

export default SiteSpecificInterface
