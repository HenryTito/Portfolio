import React from 'react'
import { BallCanvas } from "./canvas"
import SectionWrapper from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      
      
      <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
        Tecnologias
      </h2>
      <h3 className={`${styles.sectionSubText} text-center mb-10`}>(rotacione as esferas!)</h3>

      
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Tech, "")
