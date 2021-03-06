import React from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import Fade from 'react-reveal/Fade';


class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error(error);
        }

    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <Fade top>
                        <div className='buttons'>
                            <CustomButton type="submit"> Sign In</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                        </div>
                    </Fade>
                </form>
            </div>
        )
    }
}

export default SignIn;