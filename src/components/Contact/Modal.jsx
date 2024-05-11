import React, { useEffect } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'

function Modal() {
    useEffect(() => {
        var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
            }).then(
                response => response.json()
            ).then((html) => {
                 window.location.href = 'ContactUs';
            });
        });
    }, []); // [] menandakan efek hanya dijalankan sekali setelah komponen dipasang

    return (
        <div className="container-fluid containerModal">
            {/*Button trigger modal*/}
            <div className="oteweModal">
                <div className="deskripsiModal">
                    <h2>Have any feedback?</h2>
                    <p>To make requests for further information, contact us with fill this form below and we will get back to you.</p>
                    <p>We welcome your feedback on our project results.</p>

                    {/* Button Modal */}
                    <button id="ButtonModal" type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Button
                    </button>
                </div>
                <div className="iniModal">
                    {/*Modal*/}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Feedback</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* Form */}
                                    <form action="https://sheetdb.io/api/v1/v1udy8ldwhtjy" method="post" id="sheetdb-form">
                                        <div className="container">
                                            <div className="mb-3 inputModal">
                                                <label htmlFor="name" className="form-label label">Name*</label>
                                                <input type="text" className="form-control iniInput" name="nama" required></input>
                                            </div>

                                            <div className="mb-3 inputModal">
                                                <label htmlFor="email" className="form-label label">Email*</label>
                                                <input type="text" className="form-control iniInput" name="email" required></input>
                                            </div>

                                            <div className="mb-3 inputModal">
                                                <label htmlFor="msg" className="form-label label">Messages*</label>
                                                <textarea className="form-control iniTA" name="pesan" required></textarea>
                                            </div>

                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-dark SubmitButton">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
