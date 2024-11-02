<template>
    <v-container class="help">
        <div class="main">
            <Motion :delay="200" :duration="1200" preset="slideVisibleOnceBottom">
                <div class="heading">
                    <h2>Need Help?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam beatae fugiat voluptas
                        blanditiis
                        laboriosam omnis delectus nobis, fugit quae cupiditate?</p>

                    <div class="input">
                        <input type="text" placeholder="Enter Your Email">
                        <v-btn class="send-btn" color="red-darken-4">Send</v-btn>
                    </div>
                </div>
            </Motion>
        </div>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.help {
    padding: 15px;

    .main {
        background: url(/help.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        border-radius: 30px
    }

    .heading {
        padding: 4.8rem 0;
        max-width: 100%;
        /* Center the heading */
        z-index: 1000;
        color: #FFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h2 {
            font-size: 2.2rem;
        }

        p {
            font-size: 23px;
            color: #E1E1E1;
            font-weight: 500;
            padding-top: 1rem;
            width: 70%;
        }

        .input {
            position: relative;
            width: 60%;
        }

        input {
            margin-top: 2rem;
            width: 100%;
            border-radius: 62px;
            background: #FFF;
            box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.10);
            padding: 1rem;
        }

        input:focus {
            outline: none
        }

        .send-btn {
            position: absolute;
            top: 48%;
            right: 2%;
            padding: 0 2rem;
            border-radius: 62px;
        }
    }

}


@media screen and (max-width: 900px) {
    .help {
        width: 80%;


        .heading {
            padding: 2.5rem 0;

            p {
                font-size: 1rem;
            }


            input {
                margin-top: 2rem;
                width: 100%;
                border-radius: 62px;
                background: #FFF;
                box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.10);
                padding: 1rem;
            }

            input::placeholder {
                font-size: 0.9rem;
            }


            .send-btn {
                position: absolute;
                top: 47%;
                right: 3%;
                padding: 0 0.7rem;
                border-radius: 62px;
            }
        }



    }
}
</style>