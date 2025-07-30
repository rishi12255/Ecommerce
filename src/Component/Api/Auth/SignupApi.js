import SecureFetch from "./ApiConfiguration";

const SignupApi = async(userDetail,navigate, setStage) => {
    console.log("userDetail",userDetail);
    SecureFetch("http://localhost:3000/user/signup", "Post", {"content-type":"application/json"},
        userDetail)
   const response = await request.json();
 if (request.status == 200) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("userDetail", JSON.stringify(response));
    navigate("/");
  } else {
    setStage(0);
  }

};

export default SignupApi;