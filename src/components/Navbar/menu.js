import { routes } from "../../routes/routes";
import { labels } from "../../helpers/navbar.labels";
import { FaHome } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";

export const menu = [
      {
            route: routes.home,
            name: labels.home_text,
            icon: <FaHome/>
      },
      {
            route: routes.areas,
            name: labels.skills_text,
            icon: <FaCode/>
      },
      {
            route: routes.proyectos,
            name: labels.projects_text,
            icon: <PiProjectorScreenChartFill/>
      },
      {
            route: routes.contacto,
            name: labels.contact_text,
            icon: <MdContactMail/>
      },
]