<template>
    <div class="sidebarWFM">
        <div class="title">
            <center><b>WFM Home</b></center>
        </div>
        <div class="menu-items">
            <router-link to="/wfm/candidate/view" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                  View Available Candidates
                </div>
            </router-link>
            <router-link to="/wfm/demand/view" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                  View Available Demands
                </div>
            </router-link>
          <router-link to="/" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                  Sign Out
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarWFM'
}
</script>

<style scoped>
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}

.menu-items > * {
    margin-top: 60px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: #08b9e6;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: rgb(8, 185, 230);
}
</style>