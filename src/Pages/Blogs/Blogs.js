import React from 'react';

const Blogs = () => {
    return (
        <div className='p-12 m-12'>
            <div className='mb-10'>
                <h2 className=' bg-yellow-200 text-black font-bold text-center text-lg mb-5 p-2'>Difference between SQL and NoSQL?</h2>
                <p className='text-lg'>Both SQL and NoSQL have their place in modern software development. They each have their strengths and weaknesses. NoSQL databases can incorporate SQL elements, while SQL databases can offer some of the benefits of NoSQL through new features and full-fledged NewSQL databases. <br />
                    When choosing your database, consider your needs and what makes the most sense for your team, be it SQL or NoSQL.
                    SQL is usually a good choice and a pretty strong all-arounder for most projects. However, for more specialized work, a NoSQL database may be the better choice and if for a fast and scalable database and have no problems sacrificing some robustness, MongoDB may be just what you need.
                    Avoid pursuing the latest and greatest just for the sake of newness. Programmers may like the idea of new tech, but what's hot today may be discontinued five years from now. It's challenging to find people or support for a discontinued product, and replacing a database mid-project is usually costly. <br />
                    Ultimately, the answer to what database you should use for your next project is: it depends. Luckily, with modern architecture, like microservices, the choice between SQL and NoSQL isn't an either-or option. They can exist side-by-side in the same application landscape.</p>

            </div>
            <div className='mb-10'>
                <h2 className=' bg-yellow-200 text-black font-bold text-center text-lg mb-5 p-2'>What is JWT, and how does it work?</h2>
                <p className='text-lg'>JSON Web Token  is an open standard  that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair using RSA or ECDSA. <br />

                    Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
                    In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required. <br />

                    You also should not store sensitive session data in browser storage due to lack of security.

                    Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.</p>
            </div>
            <div className='mb-10'>
                <h2 className=' bg-yellow-200 text-black font-bold text-center text-lg mb-5 p-2'>What is the difference between javascript and NodeJS?</h2>
                <p className='text-lg'> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                    Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                    A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.</p>
            </div>
            <div className='mb-10'>
                <h2 className=' bg-yellow-200 text-black font-bold text-center text-lg mb-5 p-2' >How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-lg'>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or workerthreads module.</p>
            </div>
        </div>
    );
};

export default Blogs;