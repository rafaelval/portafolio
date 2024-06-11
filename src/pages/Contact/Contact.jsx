import styles from "./Contact.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { labels } from "../../helpers/labels";

export const Contact = () => {

  const lang  = useSelector((state) => state.lang);


  return (
    <div className={styles.contPrinc}>
      <h1 className={styles.patua}>{labels[lang].how_contact}</h1>
      <div className={styles.divLine} />
      <p className={styles.kode_mono}>
        {labels[lang].wish_contact}
      </p>
      <div className="flex w-3/4 justify-around h-60 ">
        <a
          href="https://github.com/rafaelval"
          target="blank"
          className={styles.contLinks}
        >
          <div className="flex flex-col items-center transition-colors duration-300 hover:text-white">
            <span className="group-hover:text-white">
              <FaGithub className={styles.github} />
            </span>
            <h2 className=" group-hover:text-white font-bold">Github</h2>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-valbuena-restrepo-ba3b242a0/"
          target="blank"
          className={styles.contLinks}
        >
          <div className="flex flex-col items-center transition-colors duration-300 hover:text-sky-700">
            <span className="group-hover:text-sky-700">
              <FaLinkedin className={styles.linkedin} />
            </span>
            <h2 className=" group-hover:text-sky-700 font-bold">Linkedin</h2>
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=573006703425"
          target="blank"
          className={styles.contLinks}
        >
          <div className="flex flex-col items-center transition-colors duration-300 hover:text-green-500">
            <span className="group-hover:text-green-500">
              <FaWhatsapp className={styles.whatsapp} />
            </span>
            <h2 className="group-hover:text-green-500 font-bold">WhatsApp</h2>
          </div>
        </a>
      </div>
     
      <div className={styles.contContact}>
        <div className={styles.contact}>
          <span className="color-primary">{labels[lang].mobile}</span>
          <br />
          <span>{labels[lang].phone_number}</span>
        </div>
        <div className={styles.contact}>
        <span className="color-primary">{labels[lang].email}</span>
          <br />
          <a href="mailto:rafael.valbuena.restrepo@gmail.com" className=" hover:text-white">{labels[lang].mail}</a>
        </div>
      </div>
    </div>
  );
};
