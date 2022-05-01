const HeaderSection = () => {
  return (
    <div>
      <header>
        <div id="mains">
          <div id="headerSection">
            <div id="logo">EDYODA</div>
            <p id="stories">Stories</p>
          </div>

          <div id="exploreCate">
            <div>
              Explore Categories
              <i class={`fa-solid fa-chevron-down ${"icon2"}`}></i>
            </div>
          </div>
          <div id="freeLearning">
            EdYoda is free learning and knowledge <br></br> sharing platform for
            techies
          </div>
          <button id="gotoBtn">Go To Main Website</button>
        </div>
      </header>
    </div>
  );
};
export default HeaderSection;
