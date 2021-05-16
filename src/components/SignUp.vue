<template>
  <div class="sign-up">
        <div class="mb-3"><div class="row"><img class="logo" src="../assets/logo.png" /></div></div>
        <div class="d-grid gap-3"></div>
        <div class="mb-3"><div class="row"><button class="btn btn-google-account">Use Google Account</button></div></div>
        <li class="divider"></li>
        <div>
            <form>
                <div class="mb-3">
                    <label for="emailInput" class="form-label">Email</label>
                    <input type="email" class="form-control input-sign-up" id="emailInput" placeholder="emileesimchenko@company.com">
                </div>
                <div class="mb-3">
                    <label for="passwordInput" class="form-label">Password</label>
                    <input type="email" class="form-control input-sign-up" id="passwordInput">
                </div>
                <div class="mb-3">
                    <div class="row"><button class="btn btn-sign-up">Sign Up</button></div>
                </div>
            </form>
        </div>
  </div>
</template>

<style scoped>
.input-sign-up{
    background-color: #EAEAEA;
}
.btn-sign-up{
    width: 255px;
    height: 50px;
    border-radius: 25px;
    background-color: #cef9c6;
}
.btn-google-account{
    width: 255px;
    height: 50px;
    border-radius: 25px;
    background-color: #cef9c6;
}
.sign-up{
    width: 505px;
    height: 692px;
    background-color: white;
    margin: auto;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 8px;
}

.logo{
    margin-top: 80px;  
    width: 70px;
}
</style>