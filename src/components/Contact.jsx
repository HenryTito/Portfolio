import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import SectionWrapper from "../hoc";
import { slideIn } from "../utils/motion";
import { underNav } from "../constants";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);



  const Icon = ({ icon, name, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 flex items-center justify-center bg-tertiary rounded-xl cursor-pointer transition transform hover:scale-110 hover:bg-[#050816]"
    >
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain"
      />
    </a>
  );



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ce3xsfe",
        "template_jpkzjnn",
        {
          from_name: form.name,
          to_name: "Henry",
          from_email: form.email,
          to_email: "henry.tito.work@gmail.com",
          message: form.message,
        },
        "K_ctUi-z68saDBxJr"
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado! Retornarei o mais breve possível.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Algo deu errado");
        }
      );
  };



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1.00] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual seu nome?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual seu email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Sua mensagem</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Assunto."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition transform hover:scale-110 hover:bg-[#050816] "
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

       

        <div className="mt-10 flex flex-wrap gap-6">
          {underNav.map((item, index) => (
            <Icon key={index} {...item} />
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
