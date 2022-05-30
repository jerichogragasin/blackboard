import React from 'react';
import SignupForm from './SignupForm';
import Image from 'next/image';
import signupStyles from '../../styles/Signup.module.css';
import bookshelves from '../../public/bookshelves.png';

const SignupTemplate = () => {
    return( 
        <div className={signupStyles.mainDiv}>
            <div className={signupStyles.mainInnerLoginContainer}>
                <div className={signupStyles.leftDiv}>
                    <SignupForm />
                </div>
                <div className={signupStyles.divider}></div>
                <div className={signupStyles.rightDiv}>
                    <Image src={bookshelves} className={signupStyles.bookshelves} alt="bookshelves.png" width="400" height="300" />
                </div>
            </div>
        </div>
    )
}

export default SignupTemplate;