import React, { useState } from "react";
import 'bootstrap';
import { useNavigate } from "react-router-dom";
import http from "../../services/http";

function ShortenUrl() {
    const [inputs, setInputs] = useState({});

    let history = useNavigate();

    const handle_change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handle_submit = (e) => {
        e.preventDefault();

        http.post('create/shorten-url', inputs).then(res => {
            console.log(res)
            document.getElementById("shorten_url").textContent = "Shorten url is: " + res.data.shorten_url;
            history('/')
        })
    }

    return (
        <div>
            <div className="container m-3" >
                <div className="card">
                    <div className="card-header">
                        <h3>Get A Shorten URL</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="" id="employee_create_form">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="title">Title <code>*</code></label>
                                            <input type="text" 
                                            placeholder="Enter title" className="form-control" required
                                            name="title"
                                            value={inputs.title || ''}
                                            onChange={handle_change} 
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="original_url">Original URL <code>*</code></label>
                                            <input type="text"
                                            placeholder="Enter original url" 
                                            className="form-control" required
                                            name="original_url"
                                            value={inputs.original_url || ''}
                                            onChange={handle_change}
                                            />
                                        </div>
                                        <div className="div">
                                            <h6 id="shorten_url"></h6>
                                        </div>
                                    </div>
                                    <br />
                                    <button type="submit" onClick={handle_submit} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortenUrl;