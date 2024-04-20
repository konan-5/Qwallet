import { Link } from "react-router-dom";
import Button from "../../components/commons/Button";
import Input from "../../components/commons/Input";
import LoginContainer from "./LoginContainer";

const Login = () => {
    return (
        <LoginContainer>
            <img src="/assets/images/tech-blocks-image.png" alt="Cloud technology communication" className="w-3/6 lg:w-auto"/>

            <div className="w-2/5 flex flex-col gap-[60px]">
                <img src="/assets/images/logo.svg" alt="Logo" className="h-[50px] self-start" />

                <div className="flex flex-col gap-12">
                    <Input label="Password" inputId="password" type="password" />

                    <div className="flex justify-center gap-8 lg:gap-20">
                        <Link to={'/signup'} className="inline-block w-full lg:w-fit">
                            <Button variant="primary" size="wide">Create</Button>
                        </Link>
                        <Link to={'/dashboard'} className="inline-block w-full lg:w-fit">
                            <Button variant="primary" size="wide">Login</Button>
                        </Link>
                    </div>

                    <Link to={'/'} className="mx-auto text-gray font-semibold text-sm">Restore your wallet from your seed</Link>
                </div>
            </div>
        </LoginContainer>
    )
}

export default Login;