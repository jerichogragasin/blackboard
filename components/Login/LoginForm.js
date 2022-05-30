import { FcGoogle } from 'react-icons/fc';
import loginStyles from '../../styles/Login.module.css';
import Link from 'next/link';

const LoginForm = () => {
    return(
        <div className={loginStyles.loginContainer}>
            <div className={loginStyles.loginFormContainer}>
                <p className={loginStyles.loginBanner}>Hello</p>
                <form className={loginStyles.loginForm} autoComplete="nope">
                    <label className={loginStyles.loginFormLabels}>Email</label>
                    <input type="text" name="email" autoComplete="nope" className={loginStyles.loginFormFields} />
                    <label className={loginStyles.loginFormLabels}>Password</label>
                    <input type="password" name="password" autoComplete="nope" className={loginStyles.loginFormFields}/>
                    <button type="submit" className={loginStyles.loginButton}>Login</button>
                    <button type="submit" className={loginStyles.googleButton}><FcGoogle size={40}/>Sign in with Google</button>
                </form>
                <p className="signupLink">
                    Don&apos;t have an account? <Link href='/signup'><a>Sign up</a></Link>
                </p>
            </div>
        </div>
    )
}

export default LoginForm;