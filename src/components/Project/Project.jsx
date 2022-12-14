import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiChakraui } from "react-icons/si";

import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";
const projects = [
  {
    name: "ShopdressUp.com",
    img: "shopdress.JPG",
    link: "https://shopdressup.netlify.app/",
    git: "https://github.com/chetantidgam123/shopdress",
    about:
      " This is E-commerce website which provide Womens Clothing. This was a team project where I with my teammates had created.My task was to do Login and Signup functionality, helped in the css part and some js functionality part.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      // <SiChakraui className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiReact />React Js</p>,
      <p className={styles.stackIcon}><SiChakraui/>Chakra UI</p>,
      

    ],
  },
  {
    name: "Blinkit.com",
    img: "Blinkit.JPG",
    link: "https://idyllic-mousse-802a72.netlify.app",
    git: "https://github.com/CartikKG/Blinkit",
    about:
      "It is an e-commerce website for Grocery. This was a team project where I with my teammates had created.My task was to do HomePage and Payment functionality, helped in the css part and some js functionality part",
    stacks: [
      ,
      <p className={styles.stackIcon}><SiHtml5/>HTML</p>,
      <p className={styles.stackIcon}><SiCss3/>CSS</p>,
      <p className={styles.stackIcon}><SiJavascript/>JAVASCRIPT</p>,
    ],
  },
  {
    name: "Swiggy.com",
    img: "swiggy.JPG",
    link: "https://cute-semolina-7190cc.netlify.app/",
    git: "https://github.com/nagendrachoudhary/swiggy",
    about:
      "This is online food delivery website.This was a team project where I with my teammates had created.My task was to do add to cart and payment functionality and help in the css part. ",
    stacks: [
      // <SiHtml5 className={styles.stackIcon} />,
      // <SiJavascript className={styles.stackIcon} />,
      // <SiCss3 className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiHtml5/>HTML</p>,
      <p className={styles.stackIcon}><SiCss3/>CSS</p>,
      <p className={styles.stackIcon}><SiJavascript/>JAVASCRIPT</p>,
    ],
  },
 
];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <Text as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
          Projects
        </Text>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
