import Menu from "./style";

const MenuSlide = ({ isHamburguerMenu }: any) => {
  return (
    <>
      <Menu isHamburguerMenu={isHamburguerMenu}>
        <a href="" target="_blank" className="home">Home</a>
        <a href="" target="_blank" className="projects">Projetos</a>
        <a href="" target="_blank" className="contact">Contato</a>
        <a href="https://www.linkedin.com/in/allan-salatino-22a073160/" target="_blank" className="linkedin">LinkedIn</a>
        <a href="https://github.com/AllanSalatino"  target="_blank" className="github">GitHub</a>
      </Menu>
    </>
  );
};

export default MenuSlide;
