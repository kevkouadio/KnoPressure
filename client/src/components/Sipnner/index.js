import React, { useState } from "react";
import './style.css'

function Spinner() {
    return (
        <div className="loading-container">
            <div className="spinner-border" role="status">
                <div class="loader"></div>
            </div>
        </div>
    );
}

export default Spinner;
