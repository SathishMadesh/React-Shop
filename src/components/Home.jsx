import React from 'react'

export default function Home() {
    return (
        <div className="hero" >
            <div class="card text-bg-dark text-white border-0" >
                <img src="/assets/bg.jpg" class="card-img" alt="Background" height="700px"/>
                <div class="card-img-overlay d-flex flex-column justify-content-around">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
