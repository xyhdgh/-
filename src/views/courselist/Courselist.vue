<template>
  <div class="course__container">
    <section class="content-top">
      <h1 class="content-top-title">Software Development</h1>
    </section>
    <div class="clearance"></div>
    <section class="curriculums-table">
      <h2 class="curriculums-table-title">Trending</h2>
      <div class="trending-items">
        <ul class="clearfix">
          <li class="trengding-item" v-for="(item,index) in courseArr" :key="index">
            <a :href="item.courseUrl">{{item.courseName}}</a>
          </li>
        </ul>
      </div>
    </section>
    <div class="content-box">
      <ul class="tab-list clearfix">
        <li class="tab-newest">
          <router-link
            :class="[{tabListItemSelected: shows == '1'},'tabListNewestItem']"
            to="/courselist"
            @click.native="newestShow"
          >Newest</router-link>
        </li>
        <li class="tab-popular">
          <router-link
            :class="['tabListNewestItem', 'single',{tabListItemSelected: shows == '2'}]"
            to="/courselist/popular"
            @click.native="popularShow"
          >Popular</router-link>
        </li>
        <li class="tab-all">
          <a href="#">View all courses</a>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courseArr: [
        {
          courseName: "ASP.NET",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=asp.net&x2=roles&q2=software-development"
        },
        {
          courseName: "Javascript",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=javascript&x2=roles&q2=software-development"
        },
        {
          courseName: "HTML",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=html&x2=roles&q2=software-development"
        },
        {
          courseName: "Software Practices",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=software-practices&x2=roles&q2=software-development"
        },
        {
          courseName: "Databases",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=databases&x2=roles&q2=software-development"
        },
        {
          courseName: "Java",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=java&x2=roles&q2=software-development"
        },
        {
          courseName: "Careers",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=careers&x2=roles&q2=software-development"
        },
        {
          courseName: "Security",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=security&x2=roles&q2=software-development"
        },
        {
          courseName: "Mobile",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=mobile&x2=roles&q2=software-development"
        },
        {
          courseName: "CSS",
          courseUrl:
            "https://app.pluralsight.com/library/search?q=css&x2=roles&q2=software-development"
        }
      ],
      shows: "1"
    };
  },

  methods: {
    newestShow() {
      this.shows = "1";
    },
    popularShow() {
      this.shows = "2";
    }
  },

  created() {
    //判断path 添加动态类
    if (location.pathname == "/courselist/popular") {
      this.shows = "2";
    } else {
      this.shows = "1";
    }

    //发送请求
    // this.$post(
    //   "http://101.132.158.185:8082/category/getCategory",
    //   {
    //     token_id: "1"
    //   },
    //   {
    //     headers: {
    //       token:
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhIiwidXNlcmlkIjoiNWQ1Y2I4ZWNkYWZlM2MzN2RjYjNlMzZkIiwiaWF0IjoxNTY2MzY2NDQyLCJleHAiOjIyNTc1NjY0NDJ9.ZB1nwIfxMceYNrZJucE6TfBGfFgTdSbG0cvrhDAq_dM"
    //     }
    //   }
    // );
  }
};
</script>
<style scoped>
* {
  box-sizing: inherit;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
li {
  list-style: none;
}
body {
  font-family: Gotham SSm A, Gotham SSm B, Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif;
}
h2 {
  letter-spacing: -0.015em;
  margin-bottom: 1.71429rem;
  display: block;
}
h1 {
  letter-spacing: -0.015em;
  display: block;
  margin-bottom: 1.71429rem;
}
ul {
  margin-left: 0;
  padding-left: 0;
  margin-bottom: 1.71429rem;
}
.course__container {
  height: 100%;
  min-width: 1010px;
}
.content-top {
  background-image: url("http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  height: 190px;
  position: relative;
}
.content-top::before {
  bottom: 0;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  box-sizing: inherit;
}
.content-top-title {
  font-size: 2.57143rem;
  line-height: 1.2em;
  position: absolute;
  font-weight: 100;
  top: 111px;
  left: 15px;
  text-transform: capitalize;
  color: #f2f2f2;
}
.clearance {
  width: 100%;
  height: 10px;
  margin-bottom: 15px;
  background-color: #0c9dbf;
}
.curriculums-table {
  margin-left: 15px;
}
.curriculums-table-title {
  font-size: 1.42857rem;
  line-height: 1.5em;
  font-weight: 100;
  color: #efefef;
  text-align: left;
  margin-bottom: 1.71429rem;
}
.content-box {
  margin: 0 15px;
  background-color: #222;
}
.trending-items {
  margin-left: -15px;
}
.trengding-item {
  border-radius: 2px;
  background: #222;
  padding: 10px;
  margin-left: 15px;
  float: left;
  list-style-type: none;
}
.trengding-item a {
  text-decoration: none;
  color: #777;
}
.tab-list {
  height: 65px;
  position: relative;
  margin-bottom: 0;
  padding-right: 15px;
  border-bottom: 1px solid rgb(54, 54, 54);
}
.tab-list li {
  float: left;
  height: 65px;
  line-height: 65px;
}
.tab-list .tab-newest {
  padding-left: 15px;
}
.tab-list .tab-popular {
  padding-left: 15px;
}
.tabListNewestItem,
.tab-list__popularItem {
  text-decoration: none;
}
a:link {
  cursor: pointer;
}
.tabListItemSelected {
  color: #efefef;
  font-weight: 500;
  border-bottom-color: #f05a28 !important;
  cursor: default;
}
.tab-list__popularItem {
  font-size: 1rem;
  line-height: 1.71429;
  color: #efefef;
  font-weight: 100;
  display: block;
  padding: 23px 0;
  margin-left: 30px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.tab-list .tab-all {
  float: right;
  margin-right: 15px;
}
.tab-list .tab-all a {
  color: #f96816;
}
.tabListNewestItem {
  font-size: 1rem;
  line-height: 0.71429;
  height: 65px;
  color: #efefef;
  font-weight: 100;
  display: block;
  padding: 23px 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.single {
  margin-left: 30px;
}
</style>