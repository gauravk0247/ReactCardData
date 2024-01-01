import React from 'react'

export default function LogIn() {
  return (
    <>
       <div id="content">
        <div className="conta">
            <h1>Log In</h1>
            <form id="booking-form">
                <div className="form-group">
                    <label htmlFor="name">UserName :</label>
                    <input type="text" id="username" name="username" placeholder="Enter Your UserName" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="mobno">Password :</label>
                    <input type="password" id="pwd" name="pwd" placeholder="Enter Your Password" required/>
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    </div> 
    </>
  )
}
