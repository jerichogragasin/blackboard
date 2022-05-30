import LoginForm from './LoginForm';
import loginStyles from '../../styles/Login.module.css';

const LoginTemplate = () => {
    return (
        <div className={loginStyles.mainDiv}>
            <div className={loginStyles.mainInnerLoginContainer}>
                <div className={loginStyles.leftDiv}>
                
                </div>
                <div className={loginStyles.divider}></div>
                <div className={loginStyles.rightDiv}>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginTemplate;