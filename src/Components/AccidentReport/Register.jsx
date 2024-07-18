import React, { useEffect, useState } from 'react'
import './Register.css'
import { BackURL, checkAuth } from '../../Constrant/Constrant'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const [formData, setFormData] = useState({})
  const [image, setImage] = useState()
  const navigte = useNavigate()
  useEffect(() => {
    if (!checkAuth()) {
      navigte('/login')
    }
  }, [])

  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const imageUpload = (e) => {
    setImage(e.target.files[0])
  }

  const submitHandle = () => {
    const newData = new FormData()
    newData.append('name', formData.name)
    newData.append('email', formData.email)
    newData.append('location', formData.location)
    newData.append('image', image)
    axios.post(`${BackURL}registerReport`, newData ,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        if (res.data) {
          alert("report submitted successfully")
          navigte('/home')
        }
      })
      .catch((err) => {
        alert("something error")
        console.log(err);
      })

  }

  return (
    <section className="contact section report-bg" id="contact">
      <div className="container">
        <div className="row">
          <div className="ml-auto col-lg-5 col-md-12 col-12">
            <h2 className="mb-4 pb-2 text-center" data-aos="fade-down" data-aos-delay="200">Accident report </h2>
            <div className="contact-form webform border p-5" data-aos="fade-up" data-aos-delay="400" role="form">
              <input type="text" className="form-control" name="name" placeholder="Title" onChange={(e) => changeHandle(e)} />
              <input type="email" className="form-control" name="email" placeholder="Email" onChange={(e) => changeHandle(e)} />
              <textarea className="form-control" rows="5" name="location" placeholder="Location" onChange={(e) => changeHandle(e)}></textarea>
              <input type='file' className='form-control' name='image' placeholder='upload accident image' onChange={(e) => imageUpload(e)} />
              <button type="submit" className="form-control" id="submit-button" name="submit" onClick={() => submitHandle()}>Report Now</button>
            </div>
          </div>
          <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-12 col-12 text-center">
            <h2 className="mb-4" data-aos="fade-down" data-aos-delay="600">Where you can <span>find us</span></h2>
            <p data-aos="fade-up" data-aos-delay="800"><i className="fa fa-map-marker mr-1"></i> Willingdon Island, Kochi, Kerala</p>
            <div className="google-map" data-aos="fade-up" data-aos-delay="900">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.31471048231!2d76.13611890598834!3d9.982854195247093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1717308459607!5m2!1sen!2sin" width="600" height="450" style={{ border: "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register