import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '../../components/Form';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/requestPasswordReset', { email });
            setMessage(response.data);
        } catch (error) {
            setMessage(error.response.data);
        }
    };

    return (
        <div className="card login-sign-Card">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <br/>
                    <label className="form-label">Email</label>
                    <Input
                        id="email"
                        labelText="Email"
                        placeholder="name@email.com"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Request Reset Link</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default ForgotPassword;
