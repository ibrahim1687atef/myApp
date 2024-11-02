<template>
    <div class="home">

        <Head>
            <title>
                Home
            </title>
        </Head>

        <div class="hero">
            <div class="details">
                <img src="/stars.png" alt="">
                <h1>{{ $t('heroTitle') }}</h1>
                <h2>{{ $t('heroSubtitle') }}</h2>
            </div>
        </div>

        <Motion>
            <v-container class="filteration">
                <v-card variant="text">
                    <v-tabs v-model="tab" color="red-darken-4">
                        <v-tab value="one">Hotels</v-tab>
                        <v-tab value="two">Planes</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item value="one">
                                <div class="inputs">
                                    <div class="input">
                                        <img class="input-icon" src="/location.png" alt="">
                                        <label class="label-txt" for="search">Search</label>
                                        <input type="text" name="search" placeholder="Find a hotel">
                                    </div>
                                    <div class="input">
                                        <img class="input-icon" src="/calendar-2.png" alt="">
                                        <label class="label-txt" for="date">Date</label>
                                        <input type="text" name="date">
                                    </div>
                                    <div class="input">
                                        <img class="input-icon" src="/calendar-2.png" alt="">
                                        <label class="label-txt" for="date">Date</label>
                                        <input type="text" name="date">
                                    </div>
                                    <div class="input" transition="scroll-x-transition">
                                        <img class="input-icon" src="/arrow-down.png" alt="">
                                        <label class="label-txt" for="rooms">Rooms</label>
                                        <input type="dropdown" name="rooms">
                                    </div>

                                    <v-btn color="red-darken-4" class="submit-btn">
                                        <img src="/search-normal.png" alt="">
                                        Search for Hotel
                                    </v-btn>
                                </div>
                            </v-tabs-window-item>

                            <v-tabs-window-item value="two">
                                this is planes selection
                            </v-tabs-window-item>
                        </v-tabs-window>
                    </v-card-text>
                </v-card>
            </v-container>
        </Motion>

        <Motion :delay="200" :duration="1200" preset="slideVisibleOnceLeft">
            <v-container v-motion-slide-left class="Hotels">
                <div class="title">
                    <h1>Latest hotels added</h1>
                    <h4>Find the best hotels in the most popular destinations</h4>
                </div>

                <div class="cards">
                    <div v-for="(hotel, index) in hotels" :key="index" class="card">
                        <div class="background">
                            <img :src="hotel.img" alt="">
                        </div>
                        <div class="hotel-location">
                            <h4>{{ hotel.location }}</h4>
                            <p>{{ hotel.description }}</p>
                        </div>
                    </div>
                </div>
            </v-container>
        </Motion>

        <Motion :delay="200" :duration="1200" preset="slideVisibleOnceRight">
            <v-container v-motion-slide-left class="why-choose">
                <div class="left">
                    <div class="title">
                        <h2>Why you should choose koma</h2>
                        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                    </div>
                    <ul>
                        <li>
                            <img src="/medal-star.png" alt="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </li>
                        <li>
                            <img src="/medal-star.png" alt="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </li>
                        <li>
                            <img src="/medal-star.png" alt="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </li>
                        <li>
                            <img src="/medal-star.png" alt="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <img src="/right-pic.png" alt="">
                </div>
            </v-container>
        </Motion>

        <Motion :delay="200" :duration="1200" preset="slideVisibleOnceLeft">
            <section class="app-section">
                <v-container class="app">
                    <div class="left">
                        <img src="/mobile.png" alt="">
                    </div>
                    <div class="right">
                        <h2>You Can Download Koma App</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Lorem ipsum dolor sit amet
                        </p>

                        <div class="download-app">
                            <a href="#">
                                <img src="/playstore.png" alt="">
                            </a>
                            <a href="#">
                                <img src="/appstore.png" alt="">
                            </a>
                        </div>
                    </div>
                </v-container>
            </section>
        </Motion>


        <hotels />

        <section class="add-hotel">
            <v-container class="parent">
                <Motion :easing="'ease-in-out'" :delay="200" :duration="1200" preset="slideVisibleOnceLeft">
                    <div class="left">
                        <img src="/add-hotel.png" alt="">
                    </div>
                </Motion>

                <div class="right">
                    <h2>Add Your Hotel Now</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur aspernatur corrupti
                        quos
                        repellendus dolorum beatae repudiandae error saepe sit vitae voluptate, amet magni cum
                        nesciunt
                        hic, molestias vel ipsum veniam.</p>

                    <v-btn color="red-darken-4" class="btn">Add Hotel</v-btn>
                </div>
            </v-container>
        </section>

        <hotels />


        <needHelp />

        <button :class="{ btnActive: isScrolled }" @click="top">
            <v-icon icon="mdi-arrow-up-bold" color="white" />
        </button>


    </div>
</template>

<script>
import { createApp } from 'vue'
import { MotionPlugin, slideVisibleOnceLeft } from '@vueuse/motion'


export default {
    data() {
        return {
            title: 'Home',
            heroTitle: 'Lorem ipsum dolor sit amet ',
            heroSubtitle: 'Lorem ipsum dolor sit amet',
            tab: null,
            isActive: false,

            isScrolled: false,

            hotels: [{
                location: 'Riyadh',
                description: 'look for best hotels',
                img: '/hotel.png',
            },
            {
                location: 'Riyadh',
                description: 'look for best hotels',
                img: '/hotel.png',
            },
            {
                location: 'Riyadh',
                description: 'look for best hotels',
                img: '/hotel.png',
            },
            {
                location: 'Riyadh',
                description: 'look for best hotels',
                img: '/hotel.png',
            }
            ]
        }
    },

    methods: {
        top() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },

        checkScroll() {
            if (window.scrollY > 300) {
                this.isScrolled = true
                console.log(window.scrollY.value)
            } else {
                this.isScrolled = false
            }
        }
    },

    mounted() {
        window.addEventListener('scroll', this.checkScroll);
    },

}
</script>

<script setup>
const { locale, setLocale } = useI18n()

</script>



<style lang="scss" scoped>
html,
body {
    overflow: hidden
}

.btnActive {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #A80E0E;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0;
    opacity: 1;
    transition: 0.5s ease;
    z-index: 50000;
}


.home {
    position: relative;
}

.hero {
    width: 100%;
    height: 100vh;
    background: url(/hero.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;

    .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 10rem;
        z-index: 1000;

        h1 {
            font-size: 64px;
            color: #FFFFFF;
        }

        h2 {
            color: #FFFFFF;
        }
    }
}

@media screen and (max-width: 900px) {
    .hero {
        .details {
            h1 {
                font-size: 2.2rem
            }

            h2 {
                font-size: 1.5rem;
            }

            img {
                width: 120px;
            }
        }
    }
}


.filteration {
    background-color: #FAFAFA;
    width: 100%;
    min-height: 150px;
    border-radius: 10px;
    margin-top: -8rem;


    .inputs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 50px;
        padding: 1rem;

        .input {
            display: flex;
            flex-direction: column;
            position: relative;

            .input-icon {
                width: 20px;
                height: 20px;
                position: absolute;
                top: 49%;
                right: 10px;
            }

            .label-txt {
                font-size: 0.75rem;
                color: #000;
                font-weight: 700;
                position: relative;
                top: 0.6rem;
                margin: 0 0 0 15px;
                padding: 0 3px;
                background: #FAFAFA;
                width: fit-content;
            }

            input {
                border: 1px solid #79747E;
                border-radius: 8px;
                padding: 0.7rem;
                width: 220px;
            }

            input::placeholder {
                font-size: 13px;
                color: #858585;
            }

            input:focus {
                outline: none;
            }
        }

        .submit-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: fit-content;
            background-color: #A80E0E;
            padding: 1.3rem 0.5rem;
            font-size: 15px;
            font-weight: 600;
            color: #FFF;
            margin-top: 0.8rem;
            border-radius: 8px;

            img {
                width: 15px;
                height: 15px
            }
        }
    }
}

@media screen and (max-width: 1280px) {
    .filteration {
        width: 90%;

        .inputs {
            flex-direction: column;
            width: 100%;
            padding: 0;

            .input {
                width: 80%;

                input {
                    width: 100%;
                }
            }
        }
    }
}


.Hotels {
    padding-top: 8rem;
    width: 100%;

    .title {
        text-align: center;

        h1 {
            font-size: 2.125rem;
            font-weight: 600;
            color: #000;
        }

        h4 {
            font-size: 1.875rem;
            color: #717171;
            font-weight: normal;
        }
    }

    .cards {
        padding-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        .card {
            position: relative;
            cursor: pointer;

            img {
                max-width: 100%;
                height: 100%
            }

            .hotel-location {
                position: absolute;
                bottom: 25px;
                left: 15px;

                h4 {
                    font-size: 1.625rem;
                    color: #FFF;
                    font-weight: 600;
                }

                p {
                    color: #FFF;
                    font-weight: normal;
                }
            }
        }
    }
}


@media screen and (max-width: 900px) {
    .Hotels {
        padding-top: 4rem;

        .title {
            h1 {
                font-size: 2rem;
            }

            h4 {
                font-size: 1.5rem;
            }
        }

        .cards {
            flex-wrap: wrap
        }
    }
}



.why-choose {
    padding-top: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
        img {
            width: 580px;
            height: 430px;
        }
    }

    h2 {
        font-size: 2.125rem;
    }

    h4 {
        padding-top: 1rem;
        font-size: 1.2rem;
        color: #5E5E5E;
    }

    ul {
        list-style: none;

        li {
            display: flex;
            align-items: center;
            padding-top: 1rem;
            gap: 0.5rem;
            color: #444444;

            img {
                width: 20px;
                height: 20px
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .why-choose {
        flex-direction: column;
        padding-top: 4rem;
        gap: 2rem;

        .left {
            ul {
                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }


            .title {
                text-align: center;

                h2 {
                    font-size: 2rem
                }

                h4 {
                    font-size: 1.2rem;
                }


            }
        }


        .right {
            img {
                width: 450px;
                height: 300px;
            }
        }
    }
}


.app-section {
    background: url(/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 8rem;
    position: relative;

    .app-section::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0.4);
        z-index: 2;
    }

    .app {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
            width: 350px;
            height: 450px;


            img {
                width: 100%;
                height: 100%;
            }
        }

        .right {
            h2 {
                font-size: 2.5rem;
                color: #FFF;
                font-weight: 600;
            }

            p {
                font-size: 1.5rem;
                color: #FFF;
                font-weight: normal
            }

            .download-app {
                margin-top: 2rem;
                display: flex;
                align-items: center;
                gap: 1.5rem
            }
        }
    }
}


@media screen and (max-width: 900px) {
    .app-section {
        background: url(/mobile-background.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-top: 4rem;

        .app {
            flex-direction: column-reverse;

            .left {
                margin-top: 3rem;
            }

            .right {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding-top: 1rem;

                h2 {
                    font-size: 2rem;
                }

                p {
                    font-size: 1.2rem;
                }
            }
        }
    }
}


.add-hotel {
    margin-top: 2rem;
    background-color: #FAF1F1;

    .parent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4rem 0;

        .left {
            width: 491px;
            height: 397px;

            img {
                width: 100%;
                height: 100%
            }
        }

        .right {
            flex: 0.8;

            h2 {
                font-size: 2.12rem;
                color: #000;
                font-weight: 600;
            }

            p {
                padding: 0.5rem 0;
                font-size: 1.7rem;
                max-width: 750px;
                color: #717171;
                font-weight: normal;
            }

            .btn {
                margin-top: 1.25rem;
            }
        }
    }
}


@media screen and (max-width: 900px) {
    .add-hotel {
        .parent {
            flex-direction: column;

            .right {
                padding: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;


                h2 {
                    font-size: 2rem;
                }

                p {
                    font-size: 1.2rem;
                    max-width: 600px;

                }
            }
        }
    }
}


@media screen and (max-width: 500px) {
    .hero .details h1 {
        font-size: 1.8rem;
        margin-top: 2rem
    }

    .hero .details h2 {
        font-size: 1.2rem;
        margin-top: 1rem
    }

    .why-choose .right img {
        width: 350px;
        height: 250px;
    }

    .app-section .app .right h2 {
        font-size: 1.8rem;
    }

    .app-section .app .right p {
        font-size: 1rem;
    }

    .app-section .download-app img {
        width: 150px;
    }

    .add-hotel .parent .left {
        width: 360px;
        height: 320px;
    }

    .help .heading h2 {
        font-size: 1.5rem;
    }

    .help .heading p {
        font-size: 0.8rem;
    }

    .help .heading input::placeholder {
        font-size: 0.5rem;
    }
}
</style>