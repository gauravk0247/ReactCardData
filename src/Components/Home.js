import React from 'react'

export default function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Img/p1.jpg" height='700' width='800' className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Img/p2.jpg" height='700' width='800' className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Img/p3.jpg" height='700' width='800' className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="container">
                <h1><center>Our Services</center></h1>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div class="card" style={{ width: '18rem' }}>
                            <img src="./Img/s1.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5>Food Catering</h5>
                                <p class="card-text">Order some food here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" style={{ width: '18rem' }}>
                            <img src="./Img/s2.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5>Bulk Ordering</h5>
                                <p class="card-text">Order some food here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" style={{ width: '18rem' }}>
                            <img src="./Img/s3.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className='center'>Food Ordering</h5>
                                <p class="card-text">Order some food here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card" style={{ width: '18rem' }}>
                            <img src="./Img/s4.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5>Western Food Ordering</h5>
                                <p class="card-text">Order some food here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
