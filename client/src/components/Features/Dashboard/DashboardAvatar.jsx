import profile from "@images/navbar/profile.png";

const DashboardAvatar = () => {
  return (
    <header className="avatar">
      <img src={profile} alt="User Avatar" />
      <h4>Abdulwase Naeemi</h4>
      <p>abdulwasenaeemi7@gmail.com</p>
    </header>
  );
};

export default DashboardAvatar;
