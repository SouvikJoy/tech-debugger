<template>
  <div>
    <div class="footer">
      <div class="container mx-auto">
        <div class="footer-content">
          <div class="grid grid-cols-7 gap-20 place-item-center">
            <div class="col-span-2">
              <img src="~/assets/logo-green.png" alt="" class="mb-2">
              <div class="column-heading">
                Head Quarter
              </div>
              <div class="text-[#F5F5F575] text-sm">
                109/5, East Rayer Bazar, Dhaka-1209
              </div>
              <div class="column-heading">
                Email: <span class="text-[#F5F5F575] text-sm"> admin@debugger.tech</span>
              </div>
              <div class="column-heading">
                Cell: <span class="text-[#F5F5F575] text-sm"> +880123456789 </span>
              </div>
            </div>
            <div class="footer-links-column-1">
              <div class="column-heading">
                Domains
              </div>
              <div v-for="(link, index) in 12" :key="index">
                <a href="#">Link</a>
              </div>
            </div>
            <div class="footer-links-column-1">
              <div class="column-heading">
                Hostings
              </div>
              <div v-for="(link, index) in 7" :key="index">
                <a href="#">Link</a>
              </div>
              <div class="column-heading">
                Website Builder
              </div>
              <div v-for="(link, index) in 3" :key="index">
                <a href="#">Link</a>
              </div>
            </div>
            <div class="footer-links-column-1">
              <div class="column-heading">
                Server
              </div>
              <div v-for="(link, index) in 5" :key="index">
                <a href="#">Link</a>
              </div>
              <div class="column-heading">
                Wordpress
              </div>
              <div v-for="(link, index) in 5" :key="index">
                <a href="#">Link</a>
              </div>
            </div>
            <div class="footer-links-column-1">
              <div class="column-heading">
                License
              </div>
              <div v-for="(link, index) in 13" :key="index">
                <a href="#">Link</a>
              </div>
            </div>
            <div class="footer-links-column-1">
              <div class="column-heading">
                Help Center
              </div>
              <div v-for="(link, index) in 4" :key="index">
                <a href="#">Link</a>
              </div>
              <div class="column-heading">
                Legal
              </div>
              <div v-for="(link, index) in 6" :key="index">
                <a href="#">Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright-text">
        © Debbugger.tech, All rights reserved
      </div>
      <div class="theme-button-content">
        <button class="theme-button mr-4">
          Terms & Condition
        </button>
        <button class="theme-button mr-4">
          Security Policy
        </button>
        <button class="theme-button">
          Support
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss">
.copyright {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: space-between;
  place-items: center;
  background-color: #F5F5F5;
}
.footer {
  background-color: #1b37b0;
  padding: 20px;
  a {
    text-decoration:none;
    color: rgba(245, 245, 245, 0.46);
    font-size: 0.9rem;
  }
}
.column-heading {
  font-size: 1.2rem;
  color: white;
  margin: 0 0 10px 0;
}
.copyright-text {
  padding: 10px;
}
</style>
