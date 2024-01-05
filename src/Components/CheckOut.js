import React from 'react'

export default function CheckOut() {
    return (
        <>
            <div className="container-sm mt-5">
                <form className="row g-3">
                    <h2>Biiling Details</h2>
                    <div className="col-md-3">
                        <label htmlFor="validationServer01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationServer01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationServer02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationServer02" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                  
                    <div className="col-md-6">
                        <label htmlFor="validationServer03" className="form-label">Address</label>
                        <input type="text" className="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                        <div id="validationServer03Feedback" className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                   
                    <div className="col-md-3">
                        <label htmlFor="validationServer04" className="form-label">State</label>
                        <select className="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Maharashtra</option>
                            <option>Goa</option>
                        </select>
                        <div id="validationServer04Feedback" className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationServer05" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationServer05" aria-describedby="validationServer05Feedback" required />
                        <div id="validationServer05Feedback" className="valid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                        <label htmlFor="validationServer03" className="form-label">Phonr Number</label>
                        <input type="text" className="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                        <div id="validationServer03Feedback" className="valid-feedback">
                            Please provide a valid address.
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Proceed</button>
                    </div>
                </form>
            </div>
        </>
    )
}
