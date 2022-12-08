import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Login = () => {
    const { login, signInWithGoogle, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const handleUserLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)

            .then(result => {
                const user = result.user;
                const existingUser = {
                    email: user.email
                }

                console.log(existingUser);

                // get jwt token
                fetch('https://photography-assignment-server-alpha.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(existingUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        navigate(from, { replace: true });
                        localStorage.setItem('token', data.token);
                        toast.success("Login Successful");
                    })
                    .catch(err => console.error(err));

            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user, from, navigate]);


    return (

        <div>
            <div className="hero mb-12 mt-12 w-full">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Have An Account?</h1>
                        <p className='mt-3'>Login with your email and password to check and provide your reviews and details</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <form onSubmit={handleUserLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning font-bold" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-xl font-bold mb-4 text-center text-yellow-400'>Or,</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-warning font-bold ">LogIn With Google</button>
                        <p className='text-center mt-4'>New Here? <Link className='text-yellow-500 font-bold' to="/signup">Sign Up Now!</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;