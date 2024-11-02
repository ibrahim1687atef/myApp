<template>
    <Motion :delay="200" :duration="1200" preset="slideVisibleOnceBottom">
        <footer>
            <v-container class="footer">
                <div class="left">
                    <div class="logo">
                        <img src="/Logo.png" alt="">
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, <br> eligendi! consectetur
                        adipisicing
                        elit.</p>
                    <div class="social-links">
                        <a href="#">
                            <img src="/instagram.svg" alt="Instagram">
                        </a>
                        <a href="#">
                            <img src="/Facebook.svg" alt="">
                        </a>
                        <a href="#">
                            <img src="/twitter.svg" alt="">
                        </a>
                        <a href="#">
                            <img src="/Linkedin.svg" alt="">
                        </a>
                        <a href="#">
                            <img src="/Telegram.svg" alt="">
                        </a>
                    </div>
                </div>

                <v-divider class="divider" :thickness="2"></v-divider>

                <div class="right">
                    <div class="main">
                        <ul>
                            <h3>Main</h3>
                            <li><nuxt-link>About Us</nuxt-link></li>
                            <li><nuxt-link>koma</nuxt-link></li>
                            <li><nuxt-link>About koma</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="legal">
                        <ul>
                            <h3>Legal</h3>
                            <li><nuxt-link>privacy</nuxt-link></li>
                            <li><nuxt-link>privacy</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="support">
                        <ul>
                            <h3>Support</h3>
                            <li><nuxt-link>contact us</nuxt-link></li>
                            <li><nuxt-link>FAQs</nuxt-link></li>
                        </ul>
                    </div>
                </div>

            </v-container>
            <div class="copy-rights">
                <p>All rights reserved | Koma</p>
            </div>
        </footer>
    </Motion>
</template>

<script>
</script>

<style lang="scss" scoped>
footer {
    margin-top: 6rem;

    background-color: #FFF6F6;
    padding: 2rem 5rem 0.5rem 5rem;

    .footer {
        display: flex;
        align-items: start;
        justify-content: space-between;


        .divider {
            display: none;
        }

        .left {
            p {
                color: #000;
                font-size: 18px;
                line-height: 34px
            }

            .social-links {
                margin-top: 1rem;
                display: flex;
                gap: 1rem
            }
        }

        .right {
            display: flex;
            align-items: start;
            justify-content: space-between;
            flex: 0.7;

            ul {
                list-style: none;

                li {
                    padding-top: 0.5rem;
                    cursor: pointer;
                    color: #6A6A6A;
                    font-size: 17px;
                    font-weight: 500;
                    line-height: 27px;
                }
            }
        }
    }

    .copy-rights {
        padding: 1rem 0;
        text-align: center;
        border-top: 1px solid #a7a7a7;
        color: #000;
        font-weight: 600;
    }
}


@media screen and (max-width: 900px) {
    footer {
        padding: 0.5rem 1rem;

        .footer {
            display: flex;
            align-items: start;
            justify-content: start;
            flex-direction: column;

            .left {
                .social-links {
                    justify-content: start;
                }

                padding-bottom: 1rem;
                border-bottom: 1px solid #a7a7a7;
            }


            .right {
                gap: 1.5rem;
                margin-top: 3rem;
            }
        }
    }
}
</style>