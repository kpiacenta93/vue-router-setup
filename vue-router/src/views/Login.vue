<template>
    
    <div class="login-container">
        <div class="login">
            <h3 class="login-title">Login:</h3>
            <label for="username"><b>Username:</b></label>
            <input type="text" placeholder="Enter Username" name="username" required>

            <label for="password"><b>Password:</b></label>
            <input type="password" placeholder="Enter Password" name="password" required>

            <button type="submit" class="login-button">Login</button>
            <p class="register">Dont have an account? <a href="/Register">Register</a></p>
        </div>
    </div>
</template>


<script>
export default {


}

</script>

<style scoped>

body {
    backdrop-filter: blur(100px);
}
.login {
    width: 500px;
    height: 400px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(51, 49, 49, 0.897);
    /* margin: 0 auto; */
    /* margin-top: 50px; */
    border: 1px solid #ccc;
    border-radius: 15px 15px 15px 15px;
    
}

.login:hover {
    border: 3px solid #535bf2;
}

input[type=text],
input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 15px;
}

input[type=text]:hover,
input[type=password]:hover {
    border: 3px solid #535bf2;
}

.login-button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 10px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

.register {
    color: black;
    font-size: 1.5rem;
}

.register a:hover {
  text-decoration: underline;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px 15px 15px 15px;
    height: 700px;
    width: 1300px;
    border: 1px solid white;
    box-shadow: white;
    box-shadow: 2px 2px 2px black;
    backdrop-filter: blur(100px);

    background-image: url('https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}

.login-title {
    font-size: 3rem;
    padding-bottom: 50px;
}


</style>

