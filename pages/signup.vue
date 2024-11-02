<template>

    <Head>
        <title>
            {{ title }}
        </title>
    </Head>
    <div class="sign-up">
        <div class="left">
            <div class="logo">
                <img src="/Logo.png" alt="">
            </div>
            <div class="heading">
                <h2>Sign Up</h2>
                <p>sign up is great for you</p>
            </div>
            <form action="" @submit.prevent="validatForm">
                <div class="check-signUp">
                    <div class="radio">
                        <input v-model="user.selectedOption" type="radio" name="contact" id="phone" value="Phone">
                        <label for="phone">Phone</label>

                    </div>
                    <div class="radio">
                        <input v-model="user.selectedOption" type="radio" name="contact" id="email" vlaue="Email">
                        <label for="radio">Email</label>
                    </div>
                </div>
                <div class="signUp-inputs">
                    <div class="input">
                        <label for="phone">Phone</label>
                        <input v-model="user.phoneInput" type="text" name="phone" placeholder="Phone Number">
                        <div :inputError="inputError" class="error">{{ inputError }}</div>
                    </div>
                    <div class="input">
                        <label for="password">Password</label>
                        <input v-model="user.password" type="text" name="password" placeholder="Password">
                        <div :passError="passError" class="error">{{ passError }}</div>
                    </div>
                    <div class="remeber-me">
                        <div class="remeber-left">
                            <input type="checkbox" name="remember" id="remember" value="Remmeber me">
                            <label for="remember">Remember Me</label>
                        </div>
                        <nuxt-link style="cursor: pointer;">Forgot Your Password</nuxt-link>
                    </div>
                </div>
                <input class="submit-btn" type="submit" value="submit">
            </form>
            <div class="add-account">
                don't have an account?
                <nuxt-link class="creat-acc">Creat Account</nuxt-link>
            </div>


            <div class="sign-with">
                <div class="title">
                    Or SignIn with
                </div>

            </div>

            <div class="cards">
                <div class="card">
                    <img src="/apple.png" alt="">
                </div>
                <div class="card">
                    <img src="/google.png" alt="">
                </div>
                <div class="card">
                    <img src="/facebook.png" alt="">
                </div>
            </div>
        </div>
        <div class="right">
            <div class="carousel-container">
                <Splide :options="splideOptions">
                    <SplideSlide v-for="(item, index) in items" :key="index">
                        <img :src="item" alt="carousel image" class="w-full" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
export default {

    data() {
        return {
            title: 'Signup',


            items: [
                '/signup-pic.png',
                '/signup-pic.png',
                '/signup-pic.png',
                '/signup-pic.png',
                '/signup-pic.png',
            ],

            user: {
                selectedOption: "",
                phoneInput: "",
                password: "",

            },
            inputError: '',
            passError: '',
        }
    },

    methods: {
        userData() {
            console.log(this.user)
        },

        validatForm() {
            this.inputError = ''
            this.passError = ''

            if (!this.user.phoneInput) {
                this.inputError = ' phone can not be blank '
            }
            if (!this.user.password) {
                this.passError = ' Password can not be blank '
            }
        }
    }


}
</script>

<script setup>

const splideOptions = {
    type: 'slide',        // Use 'slide' for a basic carousel
    pagination: true,     // Enable pagination dots
    perPage: 1,           // Show 1 image at a time
    autoplay: true,
    arrows: false,    // Set to true if you want it to autoplay
    breakpoints: {
        600: {
            perPage: 1,       // Adjust how many slides show on smaller screens
        },
    },
}



const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})


definePageMeta({
    layout: 'signup-layout'
})
</script>



<style lang="scss" scoped>
.sign-up {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
        padding: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        flex: 1;

        .heading {
            text-align: center;

            h2 {
                font-size: 2rem;
                color: #000;
            }

            p {
                font-size: 1.2rem;
                color: #676767;
            }
        }


        form {
            width: 80%;

            .check-signUp {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                width: 100%;

                .radio {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 0.5rem 1rem;
                    background-color: #FBF2F2;
                    border: 1px solid #A80E0E;
                    border-radius: 8px;
                    margin-top: 2rem;

                    label {
                        padding-left: 1rem;
                        color: #787878;
                    }

                    input[type='radio']:after {
                        width: 15px;
                        height: 15px;
                        border-radius: 15px;
                        top: -3px;
                        left: -1px;
                        position: relative;
                        background-color: transparent;
                        content: '';
                        display: inline-block;
                        visibility: visible;
                        border: 1px solid #A80E0E;
                    }

                    input[type='radio']:checked:after {
                        width: 15px;
                        height: 15px;
                        border-radius: 15px;
                        top: -2px;
                        left: -1px;
                        position: relative;
                        background-color: #A80E0E;
                        content: '';
                        display: inline-block;
                        visibility: visible;
                        border: 1px solid white;
                    }



                }


            }




            .signUp-inputs {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: start;

                .input {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin-top: 1rem;

                    input {
                        padding: 0.5rem 1rem;
                        border: 1px solid #C7C7C7;
                        border-radius: 4px;
                        margin-top: 0.5rem;
                    }

                    .error {
                        font-size: 1rem;
                        color: #A80E0E;
                        font-weight: 600;
                    }

                    input:focus {
                        outline: none
                    }
                }

                .remeber-me {
                    width: 100%;
                    margin-top: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .remeber-left {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }
                }
            }
        }

        .submit-btn {
            margin-top: 1rem;
            padding: 0.5rem 1.5rem;
            width: 100%;
            background-color: #A80E0E;
            border-radius: 8px;
            color: #FFF;
            font-weight: 600;
        }


        .add-account {
            // margin-top: 1rem;
            width: 80%;
            color: #787878;
            text-align: center;
            border-bottom: 2px solid #F1F0F0;
            padding: 1rem 0 2rem 0;

            .creat-acc {
                cursor: pointer;
                color: #A80E0E;
            }
        }


        .sign-with {
            .title {
                text-align: center;
                margin-top: -0.8rem;
                padding: 0 0.25rem;
                background-color: #FFF;
            }


        }

        .cards {
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 2rem;

            .card {
                border: 1px solid #D38D8D;
                padding: 0.8rem 2.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }

    .right {
        flex: 1;


    }



}



.carousel-container {
    max-width: 400px;
    margin: 100px;

    img {
        width: 100%;
        height: 100%
    }
}


@media screen and (max-width: 1000px) {
    .sign-up {
        flex-direction: column;
    }
}
</style>