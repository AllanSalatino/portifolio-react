import React, { useContext } from "react";
import { ApiContext } from "../../contexts/apiContext";
import List, { Card } from "./style";

import { projectList } from "../../services/projects";


interface IChildrenContext{
  children: React.ReactNode;
}

const ProjectList = ({children}: IChildrenContext) => {
  const {projectsList} = useContext(ApiContext)
  const projectListArray = projectList?.slice(0, 3)
  return (<List>
    <h2>{children}</h2>
    {projectListArray?.map((project, index) => {
        return (
            <a key={index} href={project.url} target="_blank">
              <Card key={index} index={index}>
                  <img src={project.image} referrerPolicy="no-referrer"></img>
                  <h3>{project.name}</h3>
                  <span>{project.category}</span>
              </Card>
            </a>
        )
    })}
  </List>);
};

export default ProjectList;
