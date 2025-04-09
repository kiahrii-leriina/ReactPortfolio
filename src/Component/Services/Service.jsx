import React from 'react'
import './service.css'
import logo from '../../assets/logo.png'
import servicedata from '../../assets/servicedata'
import arrow from '../../assets/arrow.png'

const Service = () => {
  return (
    <>
      <div id = 'service' className="service">
        <div className="servicetitle">
          <h1>My Services</h1>
          <img src={logo} alt="" />
        </div>
        <div className="servicecontainer">
          {
            servicedata.map((service,index)=>{
              return <div key={index} className="serviceformat">
                <h3>{service.sno}</h3>
                <h2>{service.sname}</h2>
                <p>{service.sdesc}</p>
                <div className="servicereadmore">
                  <p>Read More</p>
                  <img src={arrow} alt="" />
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Service
