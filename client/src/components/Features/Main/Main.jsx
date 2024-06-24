import useUserContext from "@hooks/useUserContext";
import ReusableButton from "@reusable/ReusableButton";
import Navigator from "@reusable/Navigator";
import useNavigator from "@hooks/useNavigator";
import landingImage from "@images/main/taskly-landing.png";

const Main = () => {
  const { isLoggedIn } = useUserContext();
  const goTo = useNavigator();

  return (
    <div className="main-container">
      {isLoggedIn ? (
        <h2>main compoent</h2>
      ) : (
        <div className="unprotected-main">
          <div className="unprotected-main-content">
            <h4>
              Taskly is your new go-to app for managing tasks efficiently.
              Organize your projects, collaborate with your team, and stay on
              top of your deadlines.
            </h4>
            <ReusableButton
              name="Register now!"
              width={250}
              onClick={() => goTo("user-registeration")}
            />
            <Navigator
              message="Already registered? "
              pathName="Login"
              pathUrl="/user-login"
              className="link"
            />
          </div>
          <div className="unprotected-main-image">
            <img src={landingImage} alt="landing image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
