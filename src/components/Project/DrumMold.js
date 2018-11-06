import React from 'react'
import Highlight from 'react-highlight'
import { Link } from 'react-router-dom'
import image01 from 'static/coalitions/drum_mold_01.jpg'
import image02 from 'static/coalitions/drum_mold_02.jpg'
import image03 from 'static/coalitions/drum_mold_03.jpg'
import image04 from 'static/coalitions/drum_mold_04.jpg'
import Project from './Project'

export const DrumMold = () => (
  <Project className='drum-mold'>
    <section>
      <h2>Mold for Marching Drum</h2>
      <p className='meta'>
        2017<br />
      </p>
      <p>
        The code below is a part of an executable program that generates a vector shape. The generated shape is read by a laser cutter. Multiple shapes are cut and assembled in order to make cylindrical molds of different sizes. The molds are used in the production of light, loud, and affordable marching drums. The code is written for both people and computers.
      </p>      
      <ul className='add-margin-bottom related'>
        <li><span>Related project: </span><Link to='coalitions'>Coalitions</Link></li>
      </ul>         
      <Highlight className='javascript'>
      {`
      /*
          A Piece
          To construct a mold
          To make a drum
          To be used outside
          In movement
      */
  
      class MoldPiece                                           {constructor(
  
      piece                                                     ){
      this.pile                                                 =
      piece.by.another
      this.sound                                                =
      piece.repeating.itself                                    }
  
      move                                                      (){var
      carry                                                     =0;var
      wait                                                      =360/16*3;var{
      inwards                                                   ,
      outwards                                                  }=
  
      this.pile                                                 ;var
      standing_still                                            =
  
      this.sound.of.steps                                       (
      carry                                                     );var
      moving_sideways                                           =
  
      this.sound.of.steps                                       (
      wait                                                      );var
      looking_back                                              =
  
      this.sound.of.past.steps                                  (
      carry                                                     );var
      moving_closer                                             =
  
      this.sound.of.past.steps                                  (
      wait                                                      );var
      repeat                                                    ='';
  
      repeat += \`M\${standing_still.x},\${standing_still.y} \`     ;
      repeat += \`A \${outwards},\${outwards},0 0 1 \`              ;
      repeat += \`\${moving_sideways.x},\${moving_sideways.y} \`    ;
      repeat += \`L \${moving_closer.x},\${moving_closer.y} \`      ;
      repeat += \`A \${inwards},\${inwards},1 0 0 \`                ;
      repeat += \`\${looking_back.x},\${looking_back.y} \`          ;
      repeat += \`L \${standing_still.x},\${standing_still.y} Z\`   ;
  
      return repeat                                             ;}}module.exports=MoldPiece
      `}
      </Highlight>
      <img className='drum-mold-03' src={image03} />      
      <img className='drum-mold-01' src={image01} />
      <img className='drum-mold-02' src={image02} />
      <img className='drum-mold-04' src={image04} />      
    </section>
  </Project>
)

export default DrumMold
