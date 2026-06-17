// src/App.jsx
import React from 'react';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">🚀 StartupSphere</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#login">Login</a>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a className="btn btn-primary" href="#register">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow-1">
        <div className="bg-light py-5 text-center">
          <div className="container py-5">
            <h1 className="display-4 fw-bold mb-3">
              Where Ideas Meet Mentors, Investors, and Opportunities.
            </h1>
            <p className="lead text-muted mb-5">
              An AI-Powered Startup Incubator & Innovation Management Platform.
            </p>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                Join as Founder
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Explore as Investor
              </button>
            </div>
          </div>
        </div>

        {/* Roles / Features Section */}
        <div className="container py-5" id="features">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            
            {/* Founder Card */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0 bg-light">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3 fw-bold text-primary">For Founders</h3>
                  <p className="card-text text-muted">
                    Pitch your startup, receive an AI-generated Innovation Score, apply for mentorship, and connect with active investors.
                  </p>
                </div>
              </div>
            </div>

            {/* Mentor Card */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0 bg-light">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3 fw-bold text-success">For Mentors</h3>
                  <p className="card-text text-muted">
                    View assigned startups, accept mentorship requests, provide valuable feedback, and rate incoming pitch decks.
                  </p>
                </div>
              </div>
            </div>

            {/* Investor Card */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0 bg-light">
                <div className="card-body p-4">
                  <h3 className="h4 mb-3 fw-bold text-warning">For Investors</h3>
                  <p className="card-text text-muted">
                    Browse top-rated startups, filter by domain and stage, and easily show investment interest with a single click.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      

    </div>
  );
}

export default App;