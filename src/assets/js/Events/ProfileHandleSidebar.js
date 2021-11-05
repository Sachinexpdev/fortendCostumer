function ProfileHandleSidebar() {
  const CloseIcon = document.querySelector(".profile-sidebar-close");
  const BurgerIcon = document.querySelector(".burger-icon");
  const ProfileSidebar = document.querySelector(".profile-mbl-sidebar");
  const OpenProfileSidebar = (e) => {
    ProfileSidebar.style.left = "0%";
  };
  const CloseProfileSidebar = (e) => {
    ProfileSidebar.style.left = "-100%";
  };
  BurgerIcon.addEventListener("click", OpenProfileSidebar);
  CloseIcon.addEventListener("click", CloseProfileSidebar);
}
export default ProfileHandleSidebar;
