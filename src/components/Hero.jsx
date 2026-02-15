import React from 'react'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center">
  
      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full flex items-center justify-between`}>

        {/* TEXTO */}
        <div className="flex flex-row items-start gap-5">

          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-4 h-4 rounded-full bg-[#915eff]" />
            <div className="w-1 h-60 bg-gradient-to-b from-[#915eff] to-transparent" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Olá, sou <span className="text-[#915eff]">Henry</span>
            </h1>

            <p className={`${styles.heroSubText} mt-3 text-gray-300`}>
              Sou desenvolvedor de <br className="sm:block hidden"/>
              Software!
            </p>

            <a href="/files/Curriculo.pdf" download>
              <button
                className="
                  mt-6
                  border border-[#915eff]
                  text-white
                  px-6 py-3 rounded-xl
                  transition-all duration-300 ease-out
                  hover:bg-[#915eff]
                  hover:scale-95
                  active:scale-90
                "
              >
                Baixe meu CV!
              </button>
            </a>
          </div>

        </div>

        {/* FOTO */}
        <div className="flex items-center justify-center">

          <div className="
            w-[320px] h-[320px]
            rounded-full
            bg-[#7c4dff]
            backdrop-blur-sm
            flex items-center justify-center
          ">

            <img
              src="/iconNoBg.png"
              alt="Henry"
              className="
                w-[95%] h-[110%]
                object-cover
                rounded-full
                -translate-y-3
              "
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
