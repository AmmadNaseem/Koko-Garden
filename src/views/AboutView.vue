<template>
  <div class="about">
    <div class="static-slider4">
      <div class="container">
        <!-- Row  -->
        <div class="row">
          <div class="col-md-5 img-banner">
            <img
              src="../assets/about_bg.jpg"
              alt="About Us"
              class="img-fluid shadow"
            />
          </div>
          <!-- Column -->
          <div class="col-md-6 ml-auto align-self-center mt-3 mt-md-0">
            <h1 class="title">
              Are You Want Curious
              <b class="font-weight-bold"
                ><span class="mx-2 logoTrees"><i class="fas fa-tree"></i></span>
                About us ? 
                <span
                  class="text-info-gradiant typewrite"
                  data-period="2000"
                  data-type='[ "Yes!", "Read Below...", "&","Get Motivated."]'
                ></span
              ></b>
            </h1>
          </div>
          <!-- Column -->
        </div>
      </div>
      <div class="bg-info-gradiant">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 ml-auto info-box">
              <div class="d-flex">
                <div class="display-5 text-white mr-3">
                  <i class="font-weight-bold icon-control-play"></i>
                </div>
                <div class="align-self-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <h1 class="faq-heading">Our Story</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quibusdam. Quibusdam, dolor laborum quos dicta laudantium nobis hic, quaerat tempore aut ratione nesciunt recusandae excepturi deleniti ipsa fugit corrupti id corporis quia iusto similique autem. Excepturi corporis, reiciendis porro quibusdam placeat laborum illum animi illo nihil hic, adipisci iusto? Sequi possimus, quibusdam consequatur minus molestias delectus nisi recusandae atque eveniet cum ea nemo, vitae deleniti rem accusantium ducimus? Impedit reprehenderit, velit illo maxime veritatis molestiae excepturi sapiente fuga nulla qui eaque quos asperiores ducimus! Pariatur quaerat repudiandae eum amet totam commodi, adipisci dolorum molestiae facere rem ducimus? Error cumque vero temporibus blanditiis suscipit ullam. Consectetur obcaecati ipsam corporis quia laborum! Beatae sint quos incidunt id at architecto quo harum provident ducimus asperiores corrupti quaerat velit vel ipsam distinctio expedita deleniti repellat aliquam quia vero saepe, amet earum.</p>
        <br>
        <p>
         Aut atque eius rerum beatae, explicabo tempore itaque aliquid accusantium provident quisquam? Esse, nisi modi. Maiores ab consequatur consectetur voluptate omnis dignissimos quod quo suscipit inventore explicabo incidunt quam tenetur animi possimus autem, expedita nisi ipsum necessitatibus sint odit quos, facilis hic. Suscipit, fugit amet necessitatibus quam earum itaque, architecto voluptatum nobis dignissimos eius id ad eaque aspernatur tenetur facilis. Sit libero magni unde maiores excepturi, possimus similique! Aperiam, iure? Necessitatibus eos veniam voluptates deleniti illo fuga, facilis earum fugit explicabo nulla odio a. Optio at laborum veniam dolore expedita, maiores facere perspiciatis fugit est architecto exercitationem numquam, deserunt velit ducimus ullam fugiat harum nemo corporis repellat! Veritatis repudiandae praesentium, nemo mollitia, dolores eveniet quo perspiciatis voluptatem, maxime cum laborum quos qui molestias ad dolorum et aliquam harum autem reprehenderit fuga tempora necessitatibus. Dolore dolor, illum obcaecati ea veniam iste cumque earum natus impedit, magnam sint sapiente delectus iusto. Autem quae incidunt sequi? Tempora ex quos inventore amet voluptas. Eos voluptatem eveniet quas, nulla iusto a illum, ea nihil optio quae beatae eligendi? Praesentium quod maxime, sequi aspernatur temporibus vero voluptate, obcaecati nulla nam numquam in nihil illo expedita accusamus nemo quos earum consectetur debitis reprehenderit ratione explicabo error perspiciatis? Eligendi sit delectus libero ex quia ab, dicta ratione incidunt voluptatibus cumque voluptatum! Nulla debitis voluptatem veniam nostrum quam nam laudantium deserunt velit ipsum nobis, beatae illo consequuntur maiores tempore ratione ducimus facere. 
        </p>
        <br>
        <p>
         Distinctio omnis temporibus a inventore, eos, possimus error sint totam molestias ad eligendi. Nesciunt obcaecati iure eos nulla sunt perferendis et officiis recusandae, ullam sint ea sit dolorem? Quae repellendus delectus laudantium quod repellat dolorum, ad consequuntur laborum, consectetur asperiores nobis pariatur expedita aperiam reprehenderit tenetur! Iste necessitatibus harum accusantium, numquam nihil impedit ut odio. Ut nihil sed natus deleniti. Rem assumenda vel deleniti fugit. Libero, voluptas. Et minus eius adipisci. Enim nihil, quibusdam quos ratione ad reprehenderit qui eius nisi unde esse, quae nobis voluptates labore possimus autem error accusamus, itaque recusandae quas? In architecto dolorem aperiam ullam eum itaque numquam doloremque, possimus sunt reiciendis rerum magnam libero unde, neque ad harum similique. Dolores maxime, saepe dolor, reprehenderit totam suscipit quaerat provident quod iure voluptates magni id temporibus nesciunt.
        </p>

    </div>
    
  </div>
</template>
<script>
export default {
  mounted() {
    this.initTypewrite();
  },
  methods: {
    initTypewrite() {
      var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      };

        var elements = document.getElementsByClassName("typewrite");
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute("data-type");
          var period = elements[i].getAttribute("data-period");
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML =
          ".typewrite > .wrap { border-right: 0.08em solid transparent}";
        document.body.appendChild(css);
    
    },
  },
};
</script>

<style lang="scss">
@import url(//fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800);
.static-slider4 {
  font-family: "Montserrat", sans-serif;
  color: #8d97ad;
  font-weight: 300;
}
.faq-heading {
  color: #42b983;
  font-weight: 700;
}
.accordion-button {
  color: #42b983 !important;
}
.logoTrees {
  color: #42b983;
}
.static-slider4 h1,
.static-slider4 h2,
.static-slider4 h3,
.static-slider4 h4,
.static-slider4 h5,
.static-slider4 h6 {
  color: #3e4555;
}

.static-slider4 h4 {
  font-size: 21px;
}

.static-slider4 a {
  text-decoration: none;
}

.static-slider4 .font-weight-medium {
  font-weight: 500;
}

.static-slider4 .subtitle {
  color: #8d97ad;
  line-height: 24px;
}

.static-slider4 h1 {
  font-weight: 100;
  line-height: 50px;
  font-size: 33px;
}

.static-slider4 h1 span {
  border-bottom: 3px solid #42b983;
}

.static-slider4 .info-box {
  padding: 25px 15px;
}

.static-slider4 .img-banner {
  position: relative;
  top: 50px;
}

@media (max-width: 767px) {
  .static-slider4 h1 {
    line-height: 36px;
    font-size: 24px;
  }
  .static-slider4 .img-banner {
    position: relative;
    top: 0px;
  }
  .static-slider4 .bg-info-gradiant {
    margin-top: 40px;
  }
}

.static-slider4 .btn-md {
  padding: 15px 45px;
  font-size: 16px;
}

.static-slider4 .bg-info-gradiant {
  background: #42b983;
  background: -webkit-linear-gradient(
    legacy-direction(to right),
    #42b983 0%,
    #42b983 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#42b983),
    to(#42b983)
  );
  background: -webkit-linear-gradient(left, #42b983 0%, #42b983 100%);
  background: -o-linear-gradient(left, #42b983 0%, #42b983 100%);
  background: linear-gradient(to right, #42b983 0%, #42b983 100%);
}

.static-slider4 .display-5 {
  font-size: 2.5rem;
}
</style>
