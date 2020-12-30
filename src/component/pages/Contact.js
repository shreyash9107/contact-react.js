import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Page</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder="name@example.com"
                            aria-describedby="emailHelp"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone else.
                         </small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Enter Passward"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div class="form-group form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                            <p style={{ position: 'relative', left: '-500px' }}>Check me out</p>
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary  w-50">
                        Submit
                     </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
