import picture from "../../assets/foto-perfil-github.jpg";
import ProjectList from "../ProjectList";
import SkillsTable from "../SkillsTable";
import MainTag from "./style";

const Main = () => {
  const title = "Hi, I'm <Allan>";
  return (
    <MainTag>
      <div>
        <h1>{title}</h1>
        <div className="container">
          <img src={picture} />
          <p>
            Eu sou um desenvolvedor web do Brasil. Este é o meu site, onde eu
            compartilho algumas curiosidades e projetos em que tenho trabalhado.
          </p>
        </div>
        <ProjectList>
          Meus ultimos projetos
        </ProjectList>
        <SkillsTable />
      </div>
    </MainTag>
  );
};

export default Main;
