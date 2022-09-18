import { createContext, useEffect, useState } from "react";
import api from "../services/api";

interface IChildrenContext {
  children: React.ReactNode;
}

interface IApiContext {
  skillsList: ISkill[] | null;
  setSkillsList: React.Dispatch<React.SetStateAction<ISkill[] | null>>;
  projectsList: IProject[] | null;
  setProjectsList: React.Dispatch<React.SetStateAction<IProject[] | null>>;
}

interface ISkill {
  name: string;
  level: number;
  color: string;
}

interface IProject{
    url: string;
    name: string;
    category: string;
    data: string;
}

export const ApiContext = createContext({} as IApiContext);

const ApiProvider = ({ children }: IChildrenContext) => {
  const [skillsList, setSkillsList] = useState<ISkill[] | null>(null);
  const [projectsList, setProjectsList] = useState<IProject[] | null>(null)

  useEffect(() => {
    try {
      api.get("skills").then(async (response) => {
        const skills = await response.data;
        setSkillsList(skills)
      });
    } catch (error) {
        console.error(error)
    }
  }, []);

  useEffect(() => {
    try {
      api.get("projects").then(async (response) => {
        const projects = await response.data;
        
        setProjectsList(projects)
      });
    } catch (error) {
        console.error(error)
    }
  }, []);

  return <ApiContext.Provider value={{skillsList, setSkillsList, projectsList, setProjectsList}}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
