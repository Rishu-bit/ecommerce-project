<template>
<div>
<div class="header-component">
    <router-link to="/"><span class="logo">ElectroBay</span></router-link>
    <div class="header-nav">
      <router-link to="/login" class="a-link">Login User</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <!-- <router-link to="/signin" class="a-link">Logout</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link to="/mlogin" class="a-link">Merchant</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
      <!-- <router-link to="/cart" class="a-link">Order History</router-link>&nbsp;&nbsp;&nbsp; -->
    </div>
</div>
<div class="container" id="container">
<div class="form-container sign-up-container">
<form>
<h1>Create Account</h1>
<input type="text" name="name" v-model="posts.name" placeholder="Name" />
<input type="email" name="emailId" v-model="posts.emailId" placeholder="Email" />
<input type="password" name="password" v-model="posts.password" placeholder="Create Password" />
<input type="mobilenumber" name="mobileNumber" v-model="posts.mobileNumber" placeholder="Mobile Number" />
<button @click="postData">Sign Up</button>
</form>
</div>
<div class="form-container sign-in-container">
<form>
<h1 id="signin">Sign in</h1>
<input type="email" name="emailId" v-model="log.emailId" placeholder="Email" />
<input type="password" name="password" v-model="log.password" placeholder="Password" />
<button @click="login">Sign In</button>
</form>
</div>
<div class="overlay-container">
<div class="overlay">
<div class="overlay-panel overlay-left">
<h1>Welcome Back!</h1>
<button class="ghost" id="signIn" @click="change">Back</button>
</div>
<div class="overlay-panel overlay-right">
<h1>New Merchant!</h1>
<button class="ghost" id="signUp" @click="change">Register</button>
</div>
</div>
</div>
</div>
<Footer></Footer>

</div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Header from './Header.vue'
import Footer from './Footer.vue'
Vue.use(VueAxios,axios)
export default {
    data: () => {
        return {
            posts: {
                name: "",
                emailId: "",
                password: "",
                mobileNumber: ""
            },
            log: {
                emailId: "",
                password: ""
            },
			id:-1
        };
    },
    methods: {
        postData(event) {
            event.preventDefault();
            console.log(this.posts);
			var mailformat = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
            if(!this.posts.emailId.match(mailformat))
            {
                alert("InValid email address!");
            }
            var passformat='^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[d$@$!%*?&#])[A-Za-z\\dd$@$!%*?&#]{8,}';
            if(!this.posts.password.match(passformat))
            {
                alert("Enter one lowercase, one uppercase, one number, one special character!!!!");
            }
            
            else { 
				if(this.posts.name && this.posts.emailId && this.posts.password && this.posts.mobileNumber) {
                axios.post("http://10.20.4.157:9090/merchant", this.posts, {
                    "Content-Type": "application/json; charset-UTF-8"
                })
                    .then(response => {
                    console.log("response" + response);
                    if (response.data) {
                        alert("successfully registered");
						this.id=response.data.id
						this.$store.commit('setMerchant',this.id)
                        this.$router.push("/homepagem");
                    }
                    else {
                        alert("merchant already exists");
                        return;
                    }
                })
                    .catch(function (error) {
                    console.log(error);
                });
                console.log(this.posts);
            }
            else {
                if (!this.posts.name) {
                    alert("name field required");
                    return;
                }
                if (!this.posts.emailId) {
                    alert("email is required");
                    return;
                }
                if (!this.posts.password) {
                    alert("password is required");
                    return;
                }
                if (!this.posts.mobileNumber) {
                    alert("mobilenumber is required");
                    return;
                }
            }
			}
        },
        login(event) {
            event.preventDefault();
            var index = 0;
            console.log(this.log);
            if (this.log.emailId && this.log.password) {
                fetch(`http://10.20.4.157:9090/merchant/login/${this.log.emailId}`)
                    .then(response => response.json())
                    .then(res => {
                    console.log(res);
                    if (res == null || res.password !== this.log.password) {
                        console.log("error");
                        alert("Invalid credentials");
                    }
                    else {
                        console.log("verified successfully!!!");
						this.id=res.id
						this.$store.commit('setMerchant',this.id)
                        this.$router.push("/homepagem");
                    }
					window.location.reload()
                });
            }
            else {
                if (!this.log.emailId) {
                    alert("email is required");
                    return;
                }
                if (!this.log.password) {
                    alert("password is required");
                    return;
                }
            }
        },
        change() {
            const signUpButton = document.getElementById("signUp");
            const signInButton = document.getElementById("signIn");
            const container = document.getElementById("container");
            signUpButton.addEventListener("click", () => {
                container.classList.add("right-panel-active");
            });
            signInButton.addEventListener("click", () => {
                container.classList.remove("right-panel-active");
            });
        }
    },
    components: { Footer }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
	text-decoration: none;
    color: white;
}

  .header-component {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border: 1px solid black;
    height: 50px;
    padding-top: 15px;
    background-color: #1F305E;
    color: white;
  }
  button {
    background-color: #1F305E;
    color: white;
  }
  .logo {
	font-size: 16px;
    float: left;
    margin-left: 10px;
    height: 30px;
    width: 30px;
  }
  .logo-image {
    height: 35px;
    width: 50px;
    border-radius: 8px;
    margin-top: -4px
  }
  .search-section {
    width: 600px;
    margin-left: 120px;
    margin-right: 20px;
    color: black;
    height: 25px;
    padding-top: 4px;
    border: none;
    border-radius: 5px;
  }
  .header-nav {
	margin-top: -14px;
    display: flex;
    flex-direction: row;
    float: right;
    padding-right: 30px;
  }
  .a-link {
	font-size: 16px;
	color: white;
	background-color: #1F305E;
  }
  .a-link:hover {
    background-color: white;
    color: #1F305E;
    border: 1px solid black;
  }

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	color: white;
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #1F305E;
	background-color: #1F305E;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	color: black;
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
		0 10px 10px rgba(0, 0, 0, 0.22);
	position: relative;
	overflow: hidden;
	/* width: 768px; */
	max-width: 100%;
	min-height: 553px;
    margin-top: 90px;
    margin-bottom: 120px;
	/* margin-left: 180px; */
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {

	0%,
	49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%,
	100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container {
	transform: translateX(-100%);
}

.overlay {
	background: #1F305E;
	background: -webkit-linear-gradient(to right, #1F305E, #1F305E);
	background: linear-gradient(to right, #1F305E, #1F305E);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

footer {
	background-color: #222;
	color: #fff;
	font-size: 14px;
	bottom: 0;
	position: fixed;
	left: 0;
	right: 0;
	text-align: center;
	z-index: 999;
}

footer p {
	margin: 10px 0;
}

footer i {
	color: #1F305E;
}

footer a {
	color: #3c97bf;
	text-decoration: none;
}
#signin {
	color: #1F305E;
}
</style>