import Image from "next/image";
import "./RotatingDiv.css";

const RotatingDiv = () => {
  return (
    <div className="rot-outer">
      <div className="rotator">


        <div className="rot-row row22">
          <div className="rot-rowin">
            <div className="icon-rotateer">
            <Image src="/icons/icon4.svg" alt="img" width={35} height={35} />
          </div>
          <h6>
            Immigration
            <span>Law Firms</span>
          </h6>
          </div>




        </div>

        <div className="rot-row row33">
                    <div className="rot-rowin">
                      <div className="icon-rotateer">
            <Image src="/icons/icon1.svg" alt="img" width={35} height={35} />
          </div>
          <h6>
            Compliance &<span>Mobility Teams</span>
          </h6>
                    </div>


        </div>

        <div className="rot-row row44">
                    <div className="rot-rowin">
                      <div className="icon-rotateer">
            <Image src="/icons/icon4.svg" alt="img" width={35} height={35} />
          </div>
          <h6>
            Financial
            <span>Institutions</span>
          </h6>
                    </div>


        </div>

        <div className="rot-row row55">
                    <div className="rot-rowin">
                       <div className="icon-rotateer">
            <Image src="/icons/icon2.svg" alt="img" width={35} height={35} />
          </div>

          <h6>
            HR & Recruitment
            <span>Firms</span>
          </h6>

                    </div>


        </div>
        <div className="rot-row row66">
                    <div className="rot-rowin">
                       <div className="icon-rotateer">
            <Image src="/icons/icon3.svg" alt="img" width={35} height={35} />
          </div>

          <h6>
            Universities & Training
            <span>Institutes</span>
          </h6>

                    </div>


        </div>



      </div>

      <div className="rot-div33">
        <div className="rot-div22">
          <div className="rot-div11">
            <div className="logo-22">
              <Image src="/icons/logo.png" alt="Arrow" width={35} height={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingDiv;
