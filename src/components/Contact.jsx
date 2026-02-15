import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import SectionWrapper from '../hoc'
import { slideIn } from '../utils/motion'
import { div } from 'framer-motion/client'


//template_jpkzjnn
//service_ce3xsfe
//K_ctUi-z68saDBxJr

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
     setForm({...form, [name] : value})
  }

  const handleSubmit = (e) => {
   e.preventDefault();
   setLoading(true)


   emailjs.send('service_ce3xsfe','template_jpkzjnn',  {
      from_name: form.name,
      to_name: 'Henry',
      from_email: form.email,
      to_email: 'henry.tito.work@gmail.com',
      message:form.message,


   },
   'K_ctUi-z68saDBxJr'
  
  )
  .then(() => {
    setLoading(false)
    alert('Obrigado! Retornarei o mais breve possível.')

    setForm({
      name:'',
      email: '',
      message: '',
    })
  }, (error) => {
    setLoading(false)
    console.log(error)
    alert('Algo deu errado')
  }

)
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', "tween",  0.2, 1)}
          className='flex-[1.00] bg-black-100 p-8 rounded-2xl '
        >
          <p className={styles.sectionSubText}>Entre em contato</p>
          
          <h3 className={styles.sectionHeadText}>Contato.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >

              <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Seu nome</span>
                  <input type="text"
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Qual seu nome?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium '
                  
                  />


              </label>

              <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Seu email</span>
                  <input type="email"
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Qual seu email?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium '
                  
                  />


              </label>

              <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Sua mensagem</span>
                  <textarea
                  rows="7"
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='Assunto.'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium '
                  
                  />


              </label>
            <button
            
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            
            
            >
              {loading ? 'Enviando...' : 'Enviar'}

            </button>
          </form>
        </motion.div>


    </div>
    
  )
}

export default SectionWrapper(Contact, "contact")