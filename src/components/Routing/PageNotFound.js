import React from "react";

export default function PageNotFound() {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-4">
          <div className="col-12">
            <div className="card  bg-danger text-light">
              <div className="card-header">ERROR !</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>This Page Is Not Found</p>
                  {/* <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer> */}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
