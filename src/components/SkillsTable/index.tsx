import { useContext } from "react";
import { AnimationContext } from "../../contexts";
import Container, { SkillBar, Table } from "./style";

const SkillsTable = () => {
  const { scrollPosition } = useContext(AnimationContext);
    
  const skillsList = [
    { name: "HTML5 - 70%", level: 70, color: "#FF4F04" },
    { name: "CSS3 - 73%", level: 73, color: "#3F5DFF" },
    { name: "Javascript - 68%", level: 68, color: "#D3E500" },
    { name: "Typescript - 50%", level: 50, color: "#6485E7" },
    { name: "React - 55%", level: 55, color: "#4169E1" },
    { name: "Puppeteer - 35%", level: 35, color: "#00FF85" },
    { name: "Three - 22%", level: 22, color: "#5A5A5A" },
  ];
  return (
    <Container>
      <h2>Habilidades desenvolvidas</h2>
      <p>
        Sou inquieto, então cada hora quero aprender algo diferente. Aqui vai um
        grafico com tudo que aprendi
      </p>
      <Table>
        <section>
          <h3>Iniciante</h3>
          <h3>Intermediario</h3>
          <h3>Avançado</h3>
        </section>
        {scrollPosition > 650 &&
            <div>
            {skillsList.map((skill) => {
                return (
                <SkillBar level={skill.level} color={skill.color}>
                    {skill.name}
                </SkillBar>
                );
            })}
            </div>
        }
      </Table>
    </Container>
  );
};

export default SkillsTable;
