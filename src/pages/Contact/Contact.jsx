import styles from "./Contact.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { labels } from "../../helpers/labels";
import pdfFile from "../../helpers/curriculum-rafael-valbuena.pdf"
import pdfFileI from "../../helpers/curriculum-rafael-valbuena-I.pdf"

export const Contact = () => {
  const lang = useSelector((state) => state.lang);
  const selectedPDF = lang === "en" ? pdfFileI : pdfFile;

  return (
    <div className={styles.contPrinc}>
      <h1 className={styles.patua}>{labels[lang].how_contact}</h1>
      <div className={styles.divLine} />
      <p className={styles.kode_mono}>{labels[lang].wish_contact}</p>
      <div className="flex justify-around w-3/4 h-40 ">
        <a
        onClick={() => window.open('https://github.com/rafaelval', '_blank')}
        className={styles.contLinks}
        style={{ cursor: 'pointer' }}
        >
          <div className="flex flex-col items-center transition-colors duration-300 hover:text-white">
            <span className="group-hover:text-white">
              <FaGithub />
            </span>
            <h2 className="font-bold group-hover:text-white">Github</h2>
          </div>
        </a>
        <a
        onClick={() => window.open('https://www.linkedin.com/in/rafael-valbuena-restrepo-ba3b242a0/', '_blank')}
        className={styles.contLinks}
        style={{ cursor: 'pointer' }}
        >
          <div className="flex flex-col items-center transition-colors duration-300 hover:text-sky-500">
            <span className="group-hover:text-sky-500">
              <FaLinkedin />
            </span>
            <h2 className="font-bold group-hover:text-sky-700">Linkedin</h2>
          </div>
        </a>
        <a
          onClick={() => window.open('https://api.whatsapp.com/send/?phone=573006703425', '_blank')}
          className={styles.contLinks}
          style={{ cursor: 'pointer' }}
        >
          <div className="flex flex-col items-center transition-colors duration-300 hover:text-green-500">
            <span className="group-hover:text-green-500">
              <FaWhatsapp />
            </span>
            <h2 className="font-bold group-hover:text-green-500">WhatsApp</h2>
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
          <a
            href="mailto:rafael.valbuena.restrepo@gmail.com"
            className=" hover:text-white"
          >
            {labels[lang].mail}
          </a>
        </div>
        <div className={styles.contact}>
          <span className="color-primary">{labels[lang].download_cv}</span>
          <br />
          <a href={selectedPDF} download className=" hover:text-white">
            {labels[lang].download}
          </a>
        </div>
      </div>
    </div>
  );
};
