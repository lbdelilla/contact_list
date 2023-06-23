import React from "react";

const ContactCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card border-primary mb-3">
            <div className="card-header">Contact Number</div>
            <div className="card-body d-flex flex-row gap-4 justify-content-around">
              <div>
                <span className="d-flex align-item-center">
                  <i
                    className="fa-solid fa-id-card-clip text-body"
                    style={{ fontSize: "4rem", color: "white" }}
                  ></i>{" "}
                </span>
              </div>
              <div className="d-flex flex-column justify-content-start">
                <div className="card-title d-flex justify-content-between gap-4">
                  <i className="fa-solid fa-user mx-3"></i>
                  <h6 className="me-3">Contact Name</h6>
                </div>
                <div className="card-text d-flex justify-content-between gap-4 w-100">
                  <i className="fa-solid fa-location-dot mx-3"></i>
                  <h6 className="me-3">Contact Address</h6>
                </div>
                <div className="card-text d-flex justify-content-between gap-4 w-100">
                  <i className="fa-solid fa-envelope mx-3"></i>
                  <h6 className="me-3">Contact Email</h6>
                </div>
                <div className="card-text d-flex justify-content-between gap-4">
                  <i className="fa-solid fa-phone mx-3"></i>
                  <h6 className="me-3">Contact Phone</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
