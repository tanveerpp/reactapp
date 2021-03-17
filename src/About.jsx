import React from 'react';
const About=()=>
{
    return(
        <>
        <div className="container-fluid mt-5">
            <h1 className="text-primary text-center">About Us</h1>
            <hr/>
            <div className="row">
                <div className="col-sm-8">
                    <h2 className="text-warning text-center">Ceo Message</h2>
                    <p className="text-primary text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="col-sm-4">
                    <img src="https://images.livemint.com/img/2021/03/09/600x338/Ranbir_Kapoor_1615273438826_1615273451323.jpg" height="100%" width="100%" alt="no" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <h2 className="text-warning text-center">Director Message</h2>
                    <p className="text-primary text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="col-sm-4">
                    <img src="https://images.livemint.com/img/2021/03/09/600x338/Ranbir_Kapoor_1615273438826_1615273451323.jpg" height="100%" width="100%" alt="no" />
                </div>
            </div>
        </div>
        </>
    )
}
export default About;