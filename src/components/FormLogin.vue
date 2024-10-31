<script>
export default {
  name: 'FromLogin',
};
</script>
<template>
    <div class="logoName flex items-center justify-center">
      <img src="/src/assets/logoA.png" alt="logo" name="logo" class="img-logo">
      <h1>damStore</h1>
    </div>
    <div class="flex items-center justify-center">
      <form action="" class="bg-dark p-8 rounded shadow-md w-96 text-white wrapper">
        <h1 id="login" class="font-bold mb-6 text-center">LOGIN</h1>
  
        <div class="input-box">
          <input type="text" required id="usernameInput">
          <div class="textform">username</div>
          <i class="bi bi-person-fill" id="userIcon"></i>
        </div>
  
        <div class="input-box">
          <input type="password" required id="passwordInput">
          <div class="textform">password</div>
          <i class="bi bi-person-fill-lock" id="lockIcon"></i>
        </div>
  
        <div class="check-box ms-1">
          <input type="checkbox" name="rememberMe">
          <label class="remember" for="rememberMe">Remember Me</label>
        </div>
  
        <button type="submit" class="btn bg-blue-500 font-semibold text-white py-2 w-full">Login</button>
  
        <div class="forget-password mt-4 text-center">
          <a href="/src/dashboard.vue" class="text-white hover:underline">Forget Password?</a>
        </div>
      </form>
    </div>
  </template>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: "Poppins", sans-serif; */
  }
  
  template{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/src/assets/background.jpg');
  }
  
  .img-logo{
    width: 5%;
    filter: drop-shadow(0px 0px 2px aqua);
  }
  
  .logoName h1{
    background: linear-gradient(to left, red, yellow, 
                                green, blue, indigo,
                                orange, violet);
    color: transparent;
    display: inline;
    background-clip: text;
    font-size: 2.5rem;
    font-weight: 700;
    margin-left: -5px;
    margin-bottom: 10px;
    margin-top: 15px;
    animation: animated 5s linear infinite;
  }
  
  @keyframes animated{
    to{background-position-x: 161px;}
  }
  
  .wrapper{
    /* color: rgb(198, 197, 197); */
    background-color: #1c2841;
    /* border: 1px solid white; */
    backdrop-filter: blur(20px);
    box-shadow: 0px 0px 10px white,
                0px 0px 10px white,
                0px 0px 5px white;
    border-radius: 10px;
    padding: 30px 40px;
  }
  
  .wrapper h1{
    color: white;
    font-size: 2rem;
  }
  
  .wrapper .input-box{
    width: 100%;
    height: 50px;
    margin: 30px 0;
  }
  
  .input-box{
    position: relative;
    height: 30px;
    line-height: 30px;
  }
  
  .input-box input{
    position: absolute;
    width: 100%;
    outline: none;
    font-size: 1em;
    color: black;
    padding: 0 20px;
    line-height: 40px;
    border-radius: 10px;
    border: 2px solid white;
    background: transparent;
    transition: 0.1s ease;
    z-index: 1111;
  }
  
  .textform{
    position: absolute;
    font-size: 1.1em;
    color: grey;
    padding: 0 25px;
    margin: 5px 10px;
    background-color: #1c2841;
    transition: 0.2s ease;
  }
  
  .icon-active{
    color: #66ff00;
  }
  
  .input-box input:focus, .input-box input:valid{
    color: white;
    border: 2px solid #66ff00;
  }
  .input-box input:focus + .textform, 
  .input-box input:valid + .textform{
    color: #66ff00;
    height: 20px;
    line-height: 20px;
    padding: 0 12px;
    transform: translate(-10px, -15px) scale(0.88);
    z-index: 1111;
  }
  
  .input-box i{
    position: absolute;
    right: 20px;
    top: 40%;
    transform: translateY(-50%);
    font-size: 20px;
  }
  
  .check-box{
    margin-top: -20px;
    margin: -20px -20px 15px 5px;
  }

  .remember{
    margin-left: 5px;
  }
  
  .btn{
    background: radial-gradient(circle at center, #0e5ecf, #084191, #1f4274);
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0px 2px 3px black;
    /* border: 1px solid #006aff; */
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    margin: 10px 0 15px;
    animation: animated 4s linear infinite;
  }
  
  @keyframes animated{
    to{background-position-x: 600px;}
  }
  
  .btn:hover{
    background-color: white;
  }
  
  .forget-password{
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
  }
  </style>
  
  