import React, { useEffect, useState } from 'react'
import img from '../../Assets/images/img/reportImage.jpg'
import axios from 'axios'
import { BackURL, checkAuth } from '../../Constrant/Constrant'
import { useNavigate } from 'react-router-dom'

const ViewReport = () => {
    const navigate = useNavigate()
    const [reportData, setReportData] = useState([])

    if (!checkAuth()) {
        navigate('/login')
    }

    useEffect(() => {
        document.title = "View Report"
        axios.get(`${BackURL}allreport`)
            .then((res) => {
                console.log(res.data)
                setReportData(res.data)
            })
            .catch((err) => {
                alert("fetching error")
                console.log(err);
            })
    }, [])
    return (
        <section className="feature" id="feature">
            <div className="container">
                <div className="row">
                    <section className="class section" id="class">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12 text-center mb-5">
                                    <h6 data-aos="fade-up">Accident Report near me</h6>
                                </div>
                                {
                                    reportData?.length ?
                                        reportData.map((item, index) => (
                                            <div className="col-lg-4 col-md-6 col-12 mb-5" data-aos="fade-up" data-aos-delay={`${400 * (100 * index % 3)}`}>
                                                <div className="class-thumb">
                                                    <img src={`${BackURL}uploads/${item.file}`} class="img-fluid" alt="Class" />
                                                    <div className="class-info">
                                                        <h3 className="mb-1">{item.name}</h3>
                                                        <p className="mt-3">{item.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section >
    )
}

export default ViewReport