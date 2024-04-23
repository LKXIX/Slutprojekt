import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link href="/">Return Home</Link> {/* Use Link to navigate */}
        </div>
    );
}

export default NotFound;