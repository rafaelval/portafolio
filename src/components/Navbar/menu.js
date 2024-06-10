import { routes } from "../../routes/routes";
import { labels } from "../../helpers/labels";
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";

export const getMenu = (lang) => [
      {
            route: routes.home,
            name: labels[lang]?.home_text,
            icon: <FaHome/>
      },
      {
            route: routes.areas,
            name: labels[lang]?.skills_text,
            icon: <FaCode/>
      },
      {
            route: routes.proyectos,
            name: labels[lang]?.projects_text,
            icon: <PiProjectorScreenChartFill/>
      },
      {
            route: routes.contacto,
            name: labels[lang]?.contact_text,
            icon: <MdContactMail/>
      },
]