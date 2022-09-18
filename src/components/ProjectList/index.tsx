import React from "react";
import List, { Card } from "./style";

interface IChildrenContext{
  children: React.ReactNode;
}

const ProjectList = ({children}: IChildrenContext) => {
  const projects = [{ name: "E-commerce - Kenzie", category: "Em grupo" },
  { name: "E-commerce - Kenzie", category: "Em grupo" },
  { name: "E-commerce - Kenzie", category: "Em grupo" }];
  return (<List>
    <h2>{children}</h2>
    {projects.map((el, index) => {
        return (
            <Card index={index}>
                <div></div>
                <h3>{el.name}</h3>
                <span>{el.category}</span>
            </Card>
        )
    })}
  </List>);
};

export default ProjectList;
