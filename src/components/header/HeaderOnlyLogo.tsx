import { useNavigate } from "react-router-dom";
import LOGO from "../../../public/images/logo2.svg"
export const HeaderOnlyLogo = () => {
  const navigate = useNavigate();
  const goTo = (path: string) => {
    navigate(path);
  };
  return (
    <header>
      {" "}
      <div className="logo-container">
        <img src={LOGO} alt="NASA Logo" width="100" className="logoIMG"  onClick={()=>{goTo("/")}}/>
        <h1 className="titlePage"  onClick={()=>{goTo("/")}}>AstroVoyage</h1>
   
      </div>
    </header>
  );
};
