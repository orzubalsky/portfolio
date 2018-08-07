import React from 'react'
import Section from 'components/Section/Section'
import Gallery from 'components/Gallery/Gallery'
import GalleryItem from 'components/Gallery/GalleryItem'
import SyllabusItem from './SyllabusItem'
import ExpandedType from 'components/Assignment/ExpandedType'
import SiteSpecificInterface from 'components/Assignment/SiteSpecificInterface'
import CreativeComputingFinalProject from 'components/Assignment/CreativeComputingFinalProject'
import Intervention from 'components/Assignment/Intervention'
import expandedtype01 from 'static/student-work/core-interaction-studio/expanded-type-jiapei.gif'
import expandedtype02 from 'static/student-work/core-interaction-studio/expanded-type-tiffany.gif'
import expandedtype03 from 'static/student-work/core-interaction-studio/expanded-type-sanha.gif'
import sitespecific01 from 'static/student-work/core-interaction-studio/site-specific-krish.gif'
import sitespecific02 from 'static/student-work/core-interaction-studio/site-specific-natalie.gif'
import ccfinal01 from 'static/student-work/creative-computing/final-kiana.gif'
import ccfinal02 from 'static/student-work/creative-computing/final-esra.gif'
import intervention01 from 'static/student-work/integrative-studio-2/intervention-sunny-2.jpg'
import intervention02 from 'static/student-work/integrative-studio-2/intervention-annabelle.jpg'
import './TeachingPortfolio.scss'

export const TeachingPortfolio = () => (
  <div className='TeachingPortfolio'>
    <Section title={`Students' Work`} className='StudentWork'>
      <Gallery>
        <GalleryItem source={sitespecific01} assignment={SiteSpecificInterface} course='Core Studio Interaction' year='2018' student='Krish Chandiramani' />
        <GalleryItem source={sitespecific02} assignment={SiteSpecificInterface} course='Core Studio Interaction' year='2018' student='Natalie Callahan' />
        <GalleryItem source={expandedtype02} assignment={ExpandedType} course='Core Studio Interaction' year='2018' student='Tiffany Leung' />
        <GalleryItem source={expandedtype03} assignment={ExpandedType} course='Core Studio Interaction' year='2018' student='Sanha Park' />
        <GalleryItem source={expandedtype01} assignment={ExpandedType} course='Core Studio Interaction' year='2018' student='Jiapei Wu' />
        <GalleryItem source={intervention01} assignment={Intervention} course='Integrative Studio 2' year='2018' student='Sunny Li' />
        <GalleryItem source={ccfinal01} assignment={CreativeComputingFinalProject} course='Creative Computing' year='2017' student='Kiana Toossi' />
      </Gallery>
    </Section>
    <Section title='Syllabi' className='Syllabi'>
      <SyllabusItem title='Creative Computing' link='http://orzubalsky.com/static/syllabi/PUCD_2035_D_ZUBALSKY_FA17.pdf' />
      <SyllabusItem title='Core Studio Interaction' link='http://orzubalsky.com/static/syllabi/PUCD_2035_D_ZUBALSKY_FA17.pdf' />
      <SyllabusItem title='Integrated Studio 1: Avatar' isActive={false} />
      <SyllabusItem title='Integrated Studio 2: Systems and Strategies' link='http://orzubalsky.com/static/syllabi/PUCD_2035_D_ZUBALSKY_FA17.pdf' />
    </Section>
  </div>
)

export default TeachingPortfolio
