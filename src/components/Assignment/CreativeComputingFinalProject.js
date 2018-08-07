import React from 'react'
import Assignment from './Assignment'

export const CreativeComputingFinalProject = ({ student }) => (
  <Assignment
    name='Final Project'
    student={student}
    course='Creative Computing'
    school='Parsons School of Design'
    description='For the final project, each person will create an interactive poster documenting Washington Square Park at a specific hour of the day. Each student will research the site of Washington Sq Park at their designated time of day, observe the atmosphere, movements, sounds, colors, and the way it is being used. The research will be translated into an interactive animated graphic coupled with type and sound. The poster will use the entire screen and include the following elements: code-generated animated visuals as a background, text, sound, interaction.'
    goals={[
      'To demonstrate knowledge of HTML, CSS, and Javascript, and fundamental programming concepts.',
      'To conceptualize a project that uses code in a creative way.',
      'To integrate a variety of media elements into a single project.',
      'To design typography on and for the screen.',
      'To experiment with what an interface might mean and how it might behave.',
      'To translate on site research into an interactive design.'
    ]}
  />
)

export default CreativeComputingFinalProject
