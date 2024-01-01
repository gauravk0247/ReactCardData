import React from 'react'
import Main from './Main'

export default function MainItem() {
  return (
    <div className='container my-3'>
        <div className="row mt-5">
            <div className="col-md-3">
                <Main/>
            </div>
            <div className="col-md-3">
                <Main/>
            </div>
            <div className="col-md-3">
                <Main/>
            </div>
            <div className="col-md-3">
                <Main/>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-3">
                <Main/>
            </div>
            <div className="col-md-3">
                <Main/>
            </div>
            <div className="col-md-3">
                <Main/>
            </div>
            <div className="col-md-3">
                <Main/>
            </div>
        </div>
    </div>
  )
}
