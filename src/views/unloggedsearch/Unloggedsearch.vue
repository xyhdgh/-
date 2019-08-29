<template>
  <div class="browsePage">
    <!-- 上面部分 -->
    <div class="browse_item_wrapper">
      <!-- 上面两个大框 -->
      <div class="featured_items">
        <div class="featured_item" @click="skip">
          <div class="featured_item_content">
            <!-- <div class="featured_item_title">
              <span>FEATURED</span>
            </div> -->
            <div class="featured_item_text">
              <h2>Web全栈</h2>
            </div>
          </div>
        </div>
        <div class="featured_item" @click="skip">
          <div class="featured_item_content">
            <!-- <div class="featured_item_title">
              <span>FEATURED</span>
            </div>-->
            <div class="featured_item_text">
              <h2>Java大数据</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间八个小框 -->
      <!-- <div class="midlle_items">
        <div class="midlle_item">
          <a href>
            <span></span>
          </a>
        </div>
        <div class="midlle_item">
          <a href>
            <span></span>
          </a>
        </div>
        <div class="midlle_item">
          <a href>
            <span></span>
          </a>
        </div>
        <div class="midlle_item">
          <a href>
            <span></span>
          </a>
        </div>
        <div class="midlle_item">
          <a href>
            <span></span>
          </a>
        </div>
        <div class="midlle_item">
          <a href>
            <span></span>
          </a>
        </div>
        <div class="midlle_item">
          <a href>
            <span></span>
          </a>
        </div>
        <div class="midlle_item">
          <a href>
            <span></span>
          </a>
        </div>
      </div>-->
      <!-- 下面两个大框 -->
      <!-- <div class="roleIQ_items">
        <div class="roleIQ_item">
          <a href>
            <div class="roleIQ_item_content">
              <div class="roleIQ_item_title">
                <span></span>
              </div>
              <div class="roleIQ_item_text">
                Welcome to the standard for measuring
                <br />success in technology roles.
              </div>
            </div>
          </a>
        </div>

        <div class="roleIQ_item">
          <a href>
            <div class="roleIQ_item_content">
              <div class="roleIQ_item_title">
                <span></span>
              </div>
              <div class="roleIQ_item_text">
                Welcome to the standard for measuring
                <br />success in technology roles.
              </div>
            </div>
          </a>
        </div>
      </div>-->
    </div>
    <!-- Popular paths -->
    <div class="browse_paths">
      <h2 class="browse_paths_head">Popular paths</h2>
      <div>
        <ul class="popular_paths_items">
          <li class="paths_item_wrapper" v-for="(item,index) in popular_path_list" :key="index">
            <div>
              <a href class="paths_item">
                <div>
                  <img class="paths_item_img" :src="item.path_img" alt />
                </div>
                <div class="paths_item_title">{{item.path_name}}</div>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <a href class="browse_path_link">
        <span>Browse all Paths ></span>
      </a>
    </div>
    <!-- 下面部分 -->
    <div class="browse_page_main">
      <div class="browse_main_left">
        <div class="main_left_wrapper">
          <h2 class="browse_left_title">Newest</h2>
          <div class="browse_left_item">
            <Newest :newCourseList="new_course_list" />
          </div>
        </div>
      </div>
      <div class="browse_main_right">
        <div class="main_right_wrapper">
          <h2 class="browse_right_title">Popular Courses</h2>
          <ol class="popular_course_list">
            <li class="popular_course_item">
              <a href>Angular: Getting Started</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Angular: Getting Started</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Angular: Getting Started</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Angular: Getting Started</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Angular: Getting Started</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Angular: Getting Started</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Angular: Getting Started</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Angular: Getting Started</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Building Applications With React And Redux</a>
              <p>Deborah Kurata</p>
            </li>
            <li class="popular_course_item">
              <a href>Building Applications With React And Redux</a>
              <p>Deborah Kurata</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Newest from "../../components/Newest.vue";
export default {
  data() {
    return {
      type_list: [],
      popular_path_list: [
        {
          path_img:
            "https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png?w=95",
          path_name: "JavaScript",
          path_id: 111
        },
        {
          path_img:
            "https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png?w=95",
          path_name: "C#",
          path_id: 111
        },
        {
          path_img:
            "https://pluralsight.imgix.net/paths/python-7be70baaac.png?w=95",
          path_name: "Python",
          path_id: 111
        },
        {
          path_img:
            "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png?w=95",
          path_name: "Angular",
          path_id: 111
        },
        {
          path_img:
            "https://pluralsight.imgix.net/paths/path-icons/java-79830005fe.png?w=95",
          path_name: "Java",
          path_id: 111
        },
        {
          path_img:
            "https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png?w=95",
          path_name: "React",
          path_id: 111
        },
        {
          path_img:
            "https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png?w=95",
          path_name: "Node.js",
          path_id: 111
        },
        {
          path_img:
            "https://pluralsight.imgix.net/paths/path-icons/html5-7ac65c8ec0.png?w=95",
          path_name: "HTML5",
          path_id: 111
        }
      ]
      // new_course_list: [
      //   {
      //     course_img:
      //       "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
      //     course_id: 111,
      //     course_name: "ASP.NET Core Tag Helpers and View Components",
      //     couese_level: "Intermediate",
      //     teacher_name: "",
      //     course_create_date: "Aug 23, 2019",
      //     course_time: "1h 14m",
      //     course_score: ""
      //   },
      //   {
      //     course_img:
      //       "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
      //     course_id: 111,
      //     course_name: "ASP.NET Core Tag Helpers and View Components",
      //     couese_level: "Intermediate",
      //     teacher_name: "",
      //     course_create_date: "Aug 23, 2019",
      //     course_time: "1h 14m",
      //     course_score: ""
      //   },
      //   {
      //     course_img:
      //       "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
      //     course_id: 111,
      //     course_name: "ASP.NET Core Tag Helpers and View Components",
      //     couese_level: "Intermediate",
      //     teacher_name: "",
      //     course_create_date: "Aug 23, 2019",
      //     course_time: "1h 14m",
      //     course_score: ""
      //   },
      //   {
      //     course_img:
      //       "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
      //     course_id: 111,
      //     course_name: "ASP.NET Core Tag Helpers and View Components",
      //     couese_level: "Intermediate",../newest/Newest.vue
      //     teacher_name: "",
      //     course_create_date: "Aug 23, 2019",
      //     course_time: "1h 14m",
      //     course_score: ""
      //   },
      //   {
      //     course_img:
      //       "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
      //     course_id: 111,
      //     course_name: "ASP.NET Core Tag Helpers and View Components",
      //     couese_level: "Intermediate",
      //     teacher_name: "",
      //     course_create_date: "Aug 23, 2019",
      //     course_time: "1h 14m",
      //     course_score: ""
      //   },
      //   {
      //     course_img:
      //       "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
      //     course_id: 111,
      //     course_name: "ASP.NET Core Tag Helpers and View Components",
      //     couese_level: "Intermediate",
      //     teacher_name: "",
      //     course_create_date: "Aug 23, 2019",
      //     course_time: "1h 14m",
      //     course_score: ""
      //   }
      // ]
    };
  },

  methods: {
    skip(){
      this.$router.push('/courselist')
    }
  },

  components: {
    Newest
  }
};
</script>
<style lang="scss" scope>
a:hover {
  text-decoration: none;
}
.browsePage {
  min-height: calc(100vh - 62px);
  margin-left: -15px;
  min-width: 1140px;
  padding: 20px;
}

// 上面部分
.browse_item_wrapper {
  display: flex;
  flex-wrap: wrap;
  min-width: 260px;
  position: relative;
  flex: 1 0 21%;
  align-self: stretch;
}

// .featured_items,
// .midlle_items,
// .roleIQ_items {
//   // min-width: 260px;
//   position: relative;
//   flex: 1 0 100%;
//   align-self: stretch;
//   display: flex;
//   flex-wrap: wrap;
// }
// .featured_item,
// .midlle_item,
// .roleIQ_item {
//   flex: 1 0 48%;
//   max-width: 100%;
//   height: 160px;
//   margin-left: 15px;
//   border-bottom: 10px solid rgb(255, 194, 0);
//   background-color: #222;
//   padding: 0 0 15px;
//   margin-bottom: 15px;
// }
// .featured_item {
//   height: 120px;
// }
// .featured_item_content {
//   display: block;
//   height: 100%;
//   padding: 15px;
//   background-color: #222;
// }
// .featured_item_title {
//   text-align: center;
//   color: white;
//   font-size: 18px;
//   margin-top: 13px;
// }
// .featured_item_title > span {
//   width: 100%;
//   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…kuOSAyMDEuMywxOS42IAoJCQkyMDAuMiwxOS4yIAkJIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==);
//   font-size: 12px;
//   color: rgb(255, 194, 0);
//   font-weight: 500;
//   line-height: 22px;
//   height: 22px;
// }
.featured_items {
  // min-width: 260px;
  position: relative;
  flex: 1 0 100%;
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
}
.featured_item {
  flex: 1 0 48%;
  max-width: 100%;
  height: 120px;
  margin-left: 15px;
  border-bottom: 10px solid rgb(255, 194, 0);
  background-color: #222;
  padding: 0 0 15px;
  margin-bottom: 15px;
}
.featured_item_text {
  text-align: center;
  color: #ccc;
  font-size: 12px;
  max-width: inherit;
  margin: 50px auto 0 auto;
}
.featured_item_text > h2 {
  font-weight: 900;
  font-size: 28px;
  margin-top: -7px;
  color: rgb(255, 255, 255);
  line-height: 1;
}

.midlle_item {
  flex: 1 0 21%;
  // max-width: 100%;
  border-bottom: 10px solid #0c9dbf;
}
.midlle_item > span {
  width: 100%;
  height: 120px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…kuOSAyMDEuMywxOS42IAoJCQkyMDAuMiwxOS4yIAkJIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==);
}

.roleIQ_item {
  border-bottom: none;
}
.roleIQ_item_title > span {
  display: inline-block;
  height: 60px;
  display: block;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  max-width: 180px;
  margin: 10px auto 0 auto;
  background-color: red;
}
.roleIQ_item_text {
  text-align: center;
  color: #ccc;
  font-size: 12px;
  max-width: inherit;
  margin: 7px auto 0 auto;
}

// Popular paths 部分
.browse_paths {
  padding: 0 0 16px 15px;
}
.browse_paths_head {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  margin: 12px 0 16px 0;
  text-align: left;
}
.popular_paths_items {
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-1 * 24px);
}
.paths_item_wrapper {
  width: calc(25% - 24px);
  margin: 0 24px 24px 0;
}
.paths_item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #222;
  border-radius: 2px;
  overflow: hidden;
  text-decoration: none;
  transition: all 300ms;
}
.popular_course_item{
  transition: all 300ms;
}
.paths_item:hover,.popular_course_item:hover{
  background-color: rgb(49,49,49)
}
.paths_item_img {
  background-size: auto;
  height: 95px;
  flex: 0 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-right: 16px;
}
.paths_item_title {
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
  white-space: nowrap;
}
.browse_path_link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #aaa;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
}
.browse_path_link:hover {
  color: #fff;
}

// 下面部分
.browse_page_main {
  padding: 0 0 16px 15px;
}
.browse_main_left {
  float: left;
  width: 75%;
}
.browse_main_right {
  float: right;
  width: 25%;
  display: inline-block;
  padding-left: 15px;
  vertical-align: top;
  margin-bottom: 15px;
}
.main_left_wrapper,
.main_right_wrapper {
  background-color: #222;
  padding: 30px;
  text-align: left;
}
.main_left_wrapper {
  padding-bottom: 0;
}
.browse_left_title,
.browse_right_title {
  font-size: 0.85714rem;
  line-height: 2;
  text-transform: uppercase;
  font-weight: 400;
  color: #efefef;
  margin-bottom: 24px;
  margin-left: 10px;
}
.browse_left_title {
  border-bottom: 1px solid #181818;
  text-align: left;
  padding-bottom: 24px;
}
.popular_course_list {
  color: #efefef;
  padding-left: 0;
  text-align: left;
}
.popular_course_item {
  font-weight: 400;
  text-transform: capitalize;
  list-style-type: decimal;
  list-style-position: inside;
  text-align: left;
  margin-left: 10px;
}
.popular_course_item > a {
  color: #efefef;
}
.popular_course_item > p {
  font-size: 0.85714rem;
  line-height: 2;
  font-weight: 400;
  margin-bottom: 10px;
  color: #777;
}
</style>