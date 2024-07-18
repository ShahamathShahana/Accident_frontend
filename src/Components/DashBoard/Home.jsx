import React, { useEffect, useState } from 'react'
import { BackURL, checkAuth } from '../../Constrant/Constrant'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    if (!checkAuth()) {
        navigate('/login')
      }
    const [reportData, setReportData] = useState([]);
    useEffect(() => {
        axios.get(`${BackURL}allreport`)
            .then((res) => {
                if (res.data) {
                    setReportData(res.data);
                }
            })
            .catch((err) => {
                alert("something wrong while fetching");
                console.log(err);
            })
    }, [])

    const dateRender = (date)=>{
        return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    } 
    return (
        <>
            <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">
                <div class="bg-overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto col-12">
                            <div class="hero-text mt-5 text-center">
                                <h6 data-aos="fade-down" data-aos-delay="300">STAY SAFE ON THE ROAD!</h6>
                                <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">NAVIGATE ACCIDENTS WITH EXPERTISE
                                    LEARN MORE AT ACCIDENT AWARENESS HUB</h1>
                                <a href="#feature" class="btn custom-btn mt-3 border" data-aos="fade-up" data-aos-delay="600">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="feature" id="feature">
                <div class="container">
                    <div class="row">
                        <div class="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                            <h2 class="mb-3 text-white" data-aos="fade-up">NEW TO ACCIDENTS?</h2>
                            <a href="./reportregister" class="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#membershipForm">Report Accident Near You </a>
                        </div>
                        <div class="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
                            <div class="about-working-hours">
                                <div>
                                    <h2 class="mb-4 text-white" data-aos="fade-up" data-aos-delay="500">Recently Report</h2>
                                    {
                                        reportData?.length ?
                                            reportData.map((item, index) => (
                                                <>
                                                    <strong class="d-block" data-aos="fade-up" data-aos-delay={`${600 * (100 * (index / 3))}`}>{item.title}</strong>
                                                    <p className='fs-5 fw-5' data-aos="fade-up" data-aos-delay={`${600 * (100 * (index / 3))}`}>{item.location}</p>
                                                    <p data-aos="fade-up" data-aos-delay={`${600 * (100 * (index / 3))}`}>{dateRender(item.date)}</p>
                                                </>
                                            ))
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Home