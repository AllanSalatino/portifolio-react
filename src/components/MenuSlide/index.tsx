import Menu from "./style";

const MenuSlide = ({isHamburguerMenu}: any) => {
    return (
        <>
            <Menu isHamburguerMenu={isHamburguerMenu}>
                <button className="home">
                    Home
                </button>
                <button className="projects">
                    Projetos
                </button>
                <button className="contact">
                    Contato
                </button>
            </Menu>
        </>
    )
}

export default MenuSlide; 