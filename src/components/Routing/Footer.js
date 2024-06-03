import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">Quote</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
