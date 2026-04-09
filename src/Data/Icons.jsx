import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiEclipseide,
  SiHibernate,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaLeaf, FaCogs, FaProjectDiagram, FaCodeBranch } from "react-icons/fa";

const iconsFront = [
  {
    id: 1,
    icons: <FaHtml5 className="text-orange-600" />,
    title: "HTML",
  },
  {
    id: 2,
    icons: <FaCss3 className="text-blue-600" />,
    title: "CSS",
  },
  {
    id: 3,
    icons: <FaJava className="text-yellow-600" />,
    title: "Java",
  },
];

const iconsLib = [
  {
    id: 1,
    icons: <SiHibernate className="text-green-700" />, // for Hibernate
    title: "Hibernate",
  },
  {
    id: 2,
    icons: <SiSpring className="text-green-600" />, // for Spring
    title: "Spring",
  },
  {
    id: 3,
    icons: <SiSpringboot className="text-green-500" />, // for Spring Boot
    title: "Spring Boot",
  },
  {
    id: 4,
    icons: <FaCodeBranch className="text-green-400" />, // for Spring MVC
    title: "Spring MVC",
  },
];

const iconsTech = [
  {
    id: 1,
    icons: <VscVscode className="text-blue-600" />,
    title: "VS Code",
  },
  {
    id: 2,
    icons: <SiEclipseide className="text-blue-600" />,
    title: "Eclipse",
  },
  {
    id: 3,
    icons: <FaGitAlt className="text-orange-500" />,
    title: "Git",
  },
  {
    id: 4,
    icons: <FaGithub />,
    title: "GitHub",
  },
];
export { iconsTech, iconsFront, iconsLib };
