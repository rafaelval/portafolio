import { routes } from "../../routes/routes";
import { labels } from "./navbar.labels";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";

export const menu = [
      {
            route: routes.home,
            name: labels.home_text,
            icon: <BiHomeAlt/>
      },
      {
            route: routes.areas,
            name: labels.skills_text,
            icon: <MdOutlineDeveloperMode/>
      },
      {
            route: routes.proyectos,
            name: labels.projects_text,
            icon: <RiSlideshowLine/>
      },
      {
            route: routes.contacto,
            name: labels.contact_text,
            icon: <GrContact/>
      },
]