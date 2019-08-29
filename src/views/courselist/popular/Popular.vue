<template>
  <div class="role-page__content">
    <div>
      <ul class="role-page__courses">
        <li v-for="(item,index) in messageArr" :key="index">
          <div class="role-page__coursesItem">
            <div class="course__item__content clearfix">
              <div class="content__left">
                <a
                  :href="item.visitedUrl"
                  target="_blank"
                  title="ASP.NET Core Tag Helpers and View Components"
                  tabindex="-1"
                >
                  <img aria-hidden="true" :src="item.imgUrl" />
                </a>
              </div>
              <div class="content__middle">
                <div class="content__middle__top">
                  <a
                    :href="item.specifixUrl"
                    class="cmt__title"
                  >ASP.NET Core Tag Helpers and View Components</a>
                </div>
                <div class="content__middle__bottom">
                  <div class="cmb__foot">
                    <span>
                      <span>
                        <span title="Peter Kellner">
                          <span>
                            <a
                              :href="item.tutorUrl"
                              aria-label="Author: Peter Kellner"
                              class="tutor"
                            >{{item.tutorName}}</a>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span aria-hidden="true" class="gap">·</span>
                    <span>
                      <span>Intermediate</span>
                    </span>
                    <span aria-hidden="true" class="gap">·</span>
                    <span>
                      <span>Aug 23, 2019</span>
                    </span>
                    <span aria-hidden="true" class="gap">·</span>
                    <span>
                      <span>3h 1m</span>
                    </span>
                    <span aria-hidden="true" class="gap">·</span>
                    <span>
                      <span>
                        <star-rating
                          v-bind:increment="0.5"
                          v-bind:max-rating="5"
                          v-bind:rating="4.5"
                          inactive-color="rgb(153, 153, 153)"
                          glow-color="rgb(255, 194, 0);"
                          v-bind:star-size="12"
                          read-only
                        ></star-rating>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="content__right">
                <button class="collection">
                  <img
                    class="collection__img"
                    @click="changeImg(item.id)"
                    src="../../../assets/imgs/bookmarks.png"
                    v-if="item.isSelected"
                  />
                  <img class="collection__img" src="../../../assets/imgs/bookmarksfill.png" v-else />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="role-page__content__bottom">
        <div class="btn">
          <a
            class="a__btn"
            href="https://app.pluralsight.com/library/search?x2=roles&q2=software-development&m_Sort=displayDate"
            v-if="messageArr.length > 10"
          >View all newest courses</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  data() {
    return {
      messageArr: [
        {
          imgUrl:
            "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
          visitedUrl: "/library/courses/aspdotnet-core-tag-helpers",
          specifixUrl:
            "https://app.pluralsight.com/library/courses/aspdotnet-core-tag-helpers",
          tutorName: "Peter Kellner",
          tutorUrl: "https://app.pluralsight.com/profile/author/peter-kellner",
          id: 1,
          isSelected: true
        },
        {
          imgUrl:
            "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
          visitedUrl: "/library/courses/aspdotnet-core-tag-helpers",
          specifixUrl:
            "https://app.pluralsight.com/library/courses/aspdotnet-core-tag-helpers",
          tutorName: "Peter Kellner",
          tutorUrl: "https://app.pluralsight.com/profile/author/peter-kellner",
          id: 2,
          isSelected: true
        },
        {
          imgUrl:
            "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
          visitedUrl: "/library/courses/aspdotnet-core-tag-helpers",
          specifixUrl:
            "https://app.pluralsight.com/library/courses/aspdotnet-core-tag-helpers",
          tutorName: "Peter Kellner",
          tutorUrl: "https://app.pluralsight.com/profile/author/peter-kellner",
          id: 3,
          isSelected: true
        },
        {
          imgUrl:
            "https://pluralsight.imgix.net/course-images/audience/software-development.jpg?w=120&amp;auto=compress,format",
          visitedUrl: "/library/courses/aspdotnet-core-tag-helpers",
          specifixUrl:
            "https://app.pluralsight.com/library/courses/aspdotnet-core-tag-helpers",
          tutorName: "Peter Kellner",
          tutorUrl: "https://app.pluralsight.com/profile/author/peter-kellner",
          id: 4,
          isSelected: true
        }
      ]
    };
  },

  methods: {
    changeImg(id) {
      this.messageArr.map(item => {
        if (item.id == id) {
          item.isSelected = false;
          return false;
        }
      });
    }
  },

  components: {
    StarRating
  }
};
</script>
<style scoped>
.role-page__content {
  width: 100%;
  height: 100%;
  padding: 0 2px;
  padding-right: 15px;
}
.role-page__courses li {
  text-align: left;
  width: 100%;
  height: 100px;
  transition: all 300ms ease 0s;
}
.role-page__courses li .role-page__coursesItem {
  height: 100px;
  padding-left: 16px;
  padding-right: 0;
  cursor: pointer;
}
.role-page__courses li:hover {
  background: rgb(49, 49, 49) !important;
}
.course__item__content {
  display: flex;
  width: 100%;
  height: 100px;
  text-align: left;
  -webkit-box-align: center;
  align-items: center;
  padding: 12px 0px;
  border-bottom: 1px solid rgb(54, 54, 54);
  position: relative;
}
.content__left,
.content__middle,
.content__right {
  float: left;
}
.content__left img {
  width: 96px;
  height: 55px;
}
.content__middle {
  width: 484px;
  height: 88px;
  padding-top: 7px;
  padding-left: 3%;
}
.content__middle__top {
  width: 460px;
  height: 48px;
}
.cmt__title {
  font-weight: 500;
  text-align: left;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.03em;
  color: #fff;
}
.tutor {
  color: #aaaaaa;
  font-size: 0.6rem;
}
.content__middle__bottom {
  color: #aaaaaa;
  font-size: 12px;
}
.gap {
  margin: 0 8px;
}
.content__right {
  height: 64px;
  opacity: 1;
  transition: opacity 300ms ease 0s;
  width: 80px;
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  margin-right: 10px;
}
.collection {
  width: 24px;
  height: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.collection__img {
  width: 16px;
  height: 21px;
}
.extension__box svg {
  color: rgb(170, 170, 170);
  width: 24px;
  height: 24px;
  fill: currentcolor;
}
.extension__box {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.cmb__foot {
  width: 460px;
}
.role-page__content__bottom {
  width: calc(100% - 16px);
  height: 120px;
  margin-left: 16px;
  position: relative;
}
.a__btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  color: #f96816;
  border: 1px solid #f96816;
  padding: 5px 25px;
  text-decoration: none;
  border-radius: 3px;
}
.a__btn:hover {
  cursor: pointer;
}
.collection img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.vue-star-rating{
  display: inline-block !important;
  position: relative;
  top: -2px;
}
.vue-star-rating-rating-text{
  display: none;
}
</style>