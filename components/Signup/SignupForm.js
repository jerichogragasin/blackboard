import { FcGoogle } from 'react-icons/fc';
import signupStyles from '../../styles/Signup.module.css';
import Link from 'next/link';

const SignupForm = () => {
    return(
        <div className={signupStyles.signupContainer}>
            <div className={signupStyles.signupFormContainer}>
                <form className={signupStyles.signupForm} autoComplete="nope">
                    <div className={signupStyles.nameContainer}>
                        <div className={signupStyles.firstnameContainer}>
                            <label className={signupStyles.signupFormLabels}>First Name</label>
                            <input type="text" name="firstName" autoComplete="nope" className={signupStyles.signupFormFields} />
                        </div>
                        
                        <div className={signupStyles.lastnameContainer}>
                            <label className={signupStyles.signupFormLabels}>Last Name</label>
                            <input type="text" name="lastName" autoComplete="nope" className={signupStyles.signupFormFields}/>
                        </div>
                    </div>
                    <div className={signupStyles.credentialsContainer}>
                        <div className={signupStyles.emailContainer}>
                            <label className={signupStyles.signupFormLabels}>Email</label>
                            <input type="text" name="email" autoComplete="nope" className={signupStyles.signupFormFields}/>
                        </div>
                        <div className={signupStyles.passwordContainer}>
                            <label className={signupStyles.loginFormLabels}>Password</label>
                            <input type="password" name="password" autoComplete="nope" className={signupStyles.signupFormFields}/>
                        </div>
                    </div>
                    <div className={signupStyles.disclaimerContainer}>
                        <input type="checkbox" name="agreeDiscklaimer" id="agreeDisclaimer" className={signupStyles.agreeDisclaimer} />
                        <p className={signupStyles.agreeDislaimerText}>
                            I agree to the <Link href='/'><a>Terms of Service</a></Link> and <Link href='/'><a>Privacy Policy</a></Link>
                        </p>
                    </div>
                    <button type="submit" className={signupStyles.signupButton}>Sign Up</button>
                    <button type="submit" className={signupStyles.googleButton}><FcGoogle size={40}/>Sign in with Google</button>

                    <p className={signupStyles.signupLink}>
                        Have an account? <Link href='/login'><a>Login</a></Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;