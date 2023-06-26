import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const params = useParams();
  useEffect(() => {
    actions.getContactInfo(params.theid);
  }, []);

  const contact = store.contactDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = params?.theid;
    actions.editContact(id, name, email, address, phone);
    console.log(id, name, email, address, phone);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName" className="form-label mt-4">
            Full Name
          </label>
          <input
            name="fullName"
            type="text"
            className="form-control"
            id="fullName"
            aria-describedby="nameHelp"
            placeholder="Enter your full name"
            defaultValue={contact?.full_name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            defaultValue={contact?.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label mt-4">
            Address
          </label>
          <input
            name="address"
            type="text"
            className="form-control"
            id="address"
            aria-describedby="addresHelp"
            placeholder="Enter your address"
            defaultValue={contact?.address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label mt-4">
            Phone Number
          </label>
          <input
            name="phone"
            type="phone"
            className="form-control"
            id="phoneNumber"
            aria-describedby="phoneHelp"
            placeholder="Enter your phone number"
            defaultValue={contact?.phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <small id="phoneHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="d-flex gap-3 justify-content-center m-4">
          <button type="submit" className="btn btn-outline-light px-5">
            Update contact
          </button>
          <Link to="/">
            <span className="btn btn-primary btn-lg" href="#" role="button">
              Back home
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
