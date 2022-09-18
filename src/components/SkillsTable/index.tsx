import { useContext } from "react";
import { AnimationContext } from "../../contexts/AnimationContext";
import { ApiContext } from "../../contexts/apiContext";
import Container, { SkillBar, Table } from "./style";

const SkillsTable = () => {
  const { scrollPosition } = useContext(AnimationContext);
  const {skillsList} = useContext(ApiContext)
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
            {skillsList?.map((skill, index) => {
                return (
                <SkillBar key={index} level={skill.level} color={skill.color}>
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
