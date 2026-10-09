import "../App.css";
import Money from "../assets/Money.png";
import Exchange from "../assets/Exchange.png";
import Support from "../assets/Support.png";

function Benifits() {
  return (
    <section id="about" className="BenifitsSection">
      <div className="container-fluid backgroundsection">
        <div className="BenifitsHeading">
          <h1 className="category-heading">Benefits for your expediency</h1>
        </div>
        <div className="container mt-4 mt-md-5">
          <div className="row g-4 justify-content-center">
            {/* Benefit 1 */}
            <div className="col-12 col-md-4">
              <div className="benefit-card-box">
                <div
                  className="benefit-icon-wrap"
                  style={{ backgroundColor: "#EEEBFF" }}
                >
                  <img
                    className="benefit-icon-img"
                    src={Money}
                    alt="Payment Method"
                  />
                </div>
                <h2 className="benefit-title">Payment Method</h2>
                <p className="benefit-desc">
                  We offer flexible payment options to make buying easier.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="col-12 col-md-4">
              <div className="benefit-card-box">
                <div
                  className="benefit-icon-wrap"
                  style={{ backgroundColor: "rgb(255, 244, 231)" }}
                >
                  <img
                    className="benefit-icon-img"
                    src={Exchange}
                    alt="Return Policy"
                  />
                </div>
                <h2 className="benefit-title">Return Policy</h2>
                <p className="benefit-desc">
                  You can return any product within 30 days hassle-free.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="col-12 col-md-4">
              <div className="benefit-card-box">
                <div
                  className="benefit-icon-wrap"
                  style={{ backgroundColor: "rgb(202, 243, 229)" }}
                >
                  <img
                    className="benefit-icon-img"
                    src={Support}
                    alt="Customer Support"
                  />
                </div>
                <h2 className="benefit-title">Customer Support</h2>
                <p className="benefit-desc">
                  Our dedicated customer support team is available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benifits;
