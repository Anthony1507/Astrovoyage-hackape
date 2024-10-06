import LOGO from "../../../images/logo2.svg"
export const HeaderOnlyLogo = () => {
  return (
    <header>
      {" "}
      <div className="logo-container">
        <img src={LOGO} alt="NASA Logo" width="100" className="logoIMG" />
        <h1 className="titlePage">AstroVoyage</h1>
   
      </div>
    </header>
  );
};
