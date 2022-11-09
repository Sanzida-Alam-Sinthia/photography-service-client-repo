import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Register.JPG'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const handleUserSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleUserSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="image" name='img' alt='' placeholder="Your image" className="input input-bordered" />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-xl font-bold mb-4 text-center text-yellow-400'>Or,</p>
                    <button onClick={handleGoogleSignIn} className="btn btn-warning font-bold ">SignIn With Google</button>
                    <p className='text-center mt-4'>Already a user here? Go to <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
                <div className="text-center lg:text-right">
                    <img className='w-96 rounded-b-none' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;