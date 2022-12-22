import React from 'react'
import { Data } from '../Data/Data'
import './DesBlocs.css'
// import DesImg from '../images/des.png'

const DesBlocs = () => {
  return (
    <div className='body-div'>
        {Data.map((items) => {
            return(
                <div className="items" key={items.id}>
                    <div className="desBlocs-details">
                        <h2>{items.topic}</h2>
                        <p className='p'>{items.title}</p>
                        <p className='p'>{items.blog}</p>
                        <hr />
                        <div className="div-pro">
                            <div>
                                <p className='p'>Role</p>
                            </div>
                            <div>
                                <p className='d'>UI/UX Designer</p>
                            </div>
                        </div>
                        <hr />
                        <div className="div-pro">
                            <div>
                                <p className='p'>Visit Website</p>
                            </div>
                            <div>
                                <p >{items.link}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="div-pro">
                            <div>
                                <p className='p'>Deliverables</p>
                            </div>
                            <div>
                                <p className='d'>{items.deliverables}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="desBlocs-img">
                        <img src={items.image} alt="" />
                    </div>
                </div>
            )
        })}
        <p className='f'>Feel Free to contact me here: <span>buharizakariya04@gmail.com</span></p>
    </div>
    
  )
}

export default DesBlocs