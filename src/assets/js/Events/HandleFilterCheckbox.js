import Cookies from "universal-cookie";

const cookies = new Cookies();

export const HandleFilterCheckbox = () => {
  const GetAllCheckboxLabels = document.querySelectorAll(
    ".checkbox-wrapper  label"
  );
  const HandleCheckbox = (e) => {
    console.log(e.target);

    e.target.classList.toggle("active");
    // console.clear();
    // console.log(e.target.querySelector('input').classList)
    if(e.target.querySelector('p').classList.contains(cookies.get("theme")+'t')){
      e.target.querySelector('p').classList.remove(cookies.get("theme")+'t')
    }
    else{
      e.target.querySelector('p').classList.add(cookies.get("theme")+'t')
    }
    
  };
  console.log(GetAllCheckboxLabels);
  GetAllCheckboxLabels.forEach((EachLabel) => {
    console.log(EachLabel.textContent);
    EachLabel.addEventListener("click", HandleCheckbox);
  });
};
