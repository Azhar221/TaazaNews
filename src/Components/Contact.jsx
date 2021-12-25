import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="contact">
                <h1>Get in touch with us</h1>
                <div className="container">
                    <form id="form" action="#">
                        <input type="text" placeholder="enter your name " />
                        <input type="text" placeholder="enter your email " />
                        <textarea name="massage" id="" cols="30" rows="10" placeholder="Massage"></textarea>
                        <input type="button" value="submit" />
                    </form>
                </div>
            </div>
        </>
    )
}
