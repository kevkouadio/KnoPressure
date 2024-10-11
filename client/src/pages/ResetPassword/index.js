import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Form, Input } from "../../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/Sipnner";

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const query = new URLSearchParams(useLocation().search);
    const token = query.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords don't match.");
            return;
        }
        setLoading(true); // Start loading
        try {
            const response = await axios.post('/resetPassword', { token, newPassword: password });
            setMessage(
                <>
                    {response.data}
                    <br />
                    <a id="reset-password-login-link" href="/#/login">Click here to login</a>
                </>
            );
            setIsPasswordReset(true);
        } catch (error) {
            setMessage(error.response?.data || "An error occurred. Please try again.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="card login-sign-Card">
            <h2>Reset Password</h2>
            <Form onSubmit={handleSubmit}>
                {!isPasswordReset && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <Input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <FontAwesomeIcon
                                id="icon-resetPassword"
                                icon={showPassword ? faEye : faEyeSlash}
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm New Password</label>
                            <Input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </>
                )}
                <button type="submit" className="btn btn-primary" disabled={isLoading || isPasswordReset}>
                    {isLoading ? 'Loading...' : 'Reset Password'}
                </button>
            </Form>
            {isLoading && <Spinner />} {/* Display Spinner while loading */}
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default ResetPassword;
