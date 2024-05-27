"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "React Portfolio 3D Website",
    description: "Spectacular 3D portfolio website using ThreeJS for object rendering and animations",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://landing-david3022.vercel.app/",
    previewUrl: "https://landing-david3022.vercel.app/",
  },
  {
    id: 2,
    title: "Restaurant",
    description: "User friendly project where the user can find the recipe he needs very fast ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://restorant-nine.vercel.app/",
    previewUrl: "https://restorant-nine.vercel.app/",
  },
  {
    id: 3,
    title: "Amazon Clone",
    description: "E-commerce website where the user can chek article description,and add it to either favorites or the shopping cart",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://amazon-nxt-js.vercel.app/",
    previewUrl: "https://amazon-nxt-js.vercel.app/",
  },
  {
    id: 4,
    title: "DentCare",
    description: "Appointment website,let the costumer choose the date and the doctor of his preference",
    image: "/images/projects/dentCare.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/david3022/dental2/",
    previewUrl: "https://dental2.vercel.app/",
  },
  {
    id: 5,
    title: "Api CRUD",
    description: "Using Spring boot created an APi Rest which allows to create,read,update and delete data",
    image: "/images/projects/RESTAPIJava.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/david3022/Api14",
    previewUrl: "https://github.com/david3022/Api14",
  },
  {
    id: 6,
    title: "ApiRest Java Spring",
    description: "Api created with MySQL,JPA, and Spring  ",
    image: "/images/projects/SpringApiRest.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/david3022/spring-jpa-main",
    previewUrl: "https://github.com/david3022/spring-jpa-main",
  },
  {
    id: 7,
    title: "Real State site",
    description: "Elegant listings of various apartment rentals with interactive navigation in the navbar leading to different routes, including the Contact Us section.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://real-statedavid3022.vercel.app",
    previewUrl: "https://real-statedavid3022.vercel.app",
  },
  {
    id: 8,
    title: "Car Dealer website",
    description: "Car dealership with nav bar allowing the user to move fastthroughthe sections and also a credit aplication form",
    image: "/images/projects/carDealer.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/david3022/cardeal5",
    previewUrl: "https://cardeal5.vercel.app/",
    },
    {
      id: 9,
      title: "Tetris Videogame",
      description: "Classic tetris videogame where drawing and programming logic skills are put into practice for piece rotation and collision",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://tetris02-david3022s-projects.vercel.app/",
      previewUrl: "https://tetris02-david3022s-projects.vercel.app/",
    },
    {
      id: 10,
      title: "Visual Novel Website",
      description: "Created on Renpy using Python sintax,is a short game just made for test porpuses,also was compilated for Android OS",
      image: "/images/projects/visualNovel.jpg",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/david3022/VisualNovel2",
      previewUrl: "https://visual-novel2.vercel.app/",
    },
    {
      id: 11,
      title: "Cars website",
      description: "Inspired by some Tesla.com components but with public assets found online,Photoshop to retouch and Css for some cool effects",
      image: "/images/projects/carsite.jpg",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/david3022/One-Drive2/",
      previewUrl: "https://tetris02-david3022s-projects.vercel.app/",
      },
  
// const projectsData = [
//   {
//     id: 1,
//     title: "React Portfolio 3D Website",
//     description: "Spectacular 3D portfolio website using ThreeJS for object rendering and animations",
//     image: "/images/projects/1.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/https://landing-david3022.vercel.app/",
//   },
//   {
//     id: 2,
//     title: "Restourant",
//     description: "User friendly project where the user can find the recipe he needs very fast ",
//     image: "/images/projects/2.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 3,
//     title: "Amazon Clone",
//     description: "E-commerce website where the user can chek article description,and add it to either favorites or the shopping cart",
//     image: "/images/projects/3.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 4,
//     title: "Tetris Videogame",
//     description: "Classic tetris videogame where drawing and programming logic skills are put into practice for piece rotation and collision",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
 ];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
