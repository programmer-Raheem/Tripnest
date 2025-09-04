import React from "react";
import "../Tripnest.css";

const Booking = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="tripnest-booking-hero">
        <div className="tripnest-booking-hero-overlay">
          <h1 className="tripnest-hero-title text-primary">
            Plan Your Perfect Journey
          </h1>
          <p className="tripnest-heroline">
            Tell us about your dream destination and travel preferences.
          </p>
        </div>
      </section>

      {/* Travel Inquiry Form */}
      <section className="tripnest-form-section">
        <div className="tripnest-form-box shadow">
          <h2 className="text-center text-primary mb-3 fw-bold">
            Start your Journey <br /> with us
          </h2>
          <p className="text-center text-muted mb-4">
            <span className="text-warning">
              Fill out this form and start your dream journey
            </span>
          </p>

          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">
                  <i className="fa-solid fa-location-dot me-1"></i> Preferred
                  Destination
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Where would you like to go?"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">
                  <i className="fa-solid fa-calendar-days me-1"></i> Travel Dates
                </label>
                <input
                  type="date"
                  className="form-control"
                  title="Select your travel dates"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="groupSize" className="form-label">
                  <i className="fa-solid fa-users me-1"></i> Group Size
                </label>
                <select id="groupSize" className="form-select">
                  <option defaultValue>How many travelers?</option>
                  <option>1-2</option>
                  <option>3-5</option>
                  <option>6-10</option>
                  <option>10+</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="budgetRange" className="form-label">
                  <i className="fa-solid fa-money-bill-wave me-1"></i> Budget
                  Range
                </label>
                <select id="budgetRange" className="form-select">
                  <option defaultValue>Select your budget</option>
                  <option>$500 - $1000</option>
                  <option>$1000 - $2000</option>
                  <option>$2000 - $5000</option>
                  <option>$5000+</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded-pill"
              >
                <i className="fa-solid fa-paper-plane me-2"></i> Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Assistance */}
      <section className="tripnest-contact-assistance text-center my-5">
        <div className="container">
          <h2 className="fw-bold text-primary">
            Contact here for Immediate Assistance?
          </h2>
          <p className="text-muted mb-5">
            Our travel experts are available to help you plan your perfect
            journey
          </p>

          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="p-5 pt-lg-5 shadow rounded bg-white">
                <h5 className="fw-bold text-primary">
                  <a href="#" className="text-primary text-decoration-none">
                    Call us
                  </a>
                </h5>
                <p className="text-muted mb-0">
                  <a href="#" className="text-muted text-decoration-none">
                    +92 300 1234567
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-5 pt-lg-5 shadow rounded bg-white">
                <h5 className="fw-bold text-primary">
                  <a href="#" className="text-primary text-decoration-none">
                    Email Us
                  </a>
                </h5>
                <p className="text-muted mb-0">
                  <a href="#" className="text-muted text-decoration-none">
                    hello@tripnest.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
