import React from 'react'
import { useAuth } from '../../../context/AuthContext'

function Loading() {


    const {loading, setLoading} = useAuth();


    if (setLoading) {
        return <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
}

export default Loading