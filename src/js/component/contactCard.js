import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ id, name, address, email, phone }) => {
  const { store, actions } = useContext(Context);

  const deleteContact = (id)=> {
    actions.deleteContact(id)
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card border-primary mb-3">
            <div className="card-header">N°{id}</div>
            <div className="card-body d-flex flex-row gap-4 justify-content-around">
              <div>
                <span className="d-flex justify-content-center">
                  <i
                    className="fa-solid fa-id-card-clip text-body"
                    style={{ fontSize: "4rem", color: "white" }}
                  ></i>{" "}
                </span>
                <div className="card-footer d-flex gap-4 justify-content-center">
                  <Link to={`/edit-contact/${id}`}>
                  <i className="fa-regular fa-pen-to-square"></i>
                  </Link>
                  <i className="fa-regular fa-trash-can align-self-center" onClick={()=>deleteContact(id)}></i>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-start">
                <div className="card-title d-flex justify-content-between gap-4">
                  <i className="fa-solid fa-user mx-3"></i>
                  <h6 className="me-3">{name}</h6>
                </div>
                <div className="card-text d-flex justify-content-between gap-4 w-100">
                  <i className="fa-solid fa-location-dot mx-3"></i>
                  <h6 className="me-3">{address}</h6>
                </div>
                <div className="card-text d-flex justify-content-between gap-4 w-100">
                  <i className="fa-solid fa-envelope mx-3"></i>
                  <h6 className="me-3">{email}</h6>
                </div>
                <div className="card-text d-flex justify-content-between gap-4">
                  <i className="fa-solid fa-phone mx-3"></i>
                  <h6 className="me-3">{phone}</h6>
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
