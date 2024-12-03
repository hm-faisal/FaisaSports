import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RegisterForm from "./RegisterForm";

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
};

export default Login;
