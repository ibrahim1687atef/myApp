<template>
    <Motion :delay="200" :duration="1200" preset="slideVisibleOnceRight">
        <div class="hotels">
            <v-container>
                <div class="heading">
                    <h2>Riyadh Hotels</h2>
                    <p>Find the best hotels in the most popular destinations</p>
                </div>
                <div class="cards">
                    <div v-for="(hotel, index) in hotelsCards" :key="index" class="card">
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
        </div>
    </Motion>
</template>

<script>
export default {
    data() {
        return {
            hotelsCards: [{
                location: 'Riyadh',
                description: 'look for best hotels',
                img: '/hotel-card.png',
            },
            {
                location: 'Riyadh',
                description: 'look for best hotels',
                img: '/hotel-card.png',
            },
            {
                location: 'Riyadh',
                description: 'look for best hotels',
                img: '/hotel-card.png',
            },
            {
                location: 'Riyadh',
                description: 'look for best hotels',
                img: '/hotel-card.png',
            }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.hotels {
    padding: 4rem 0;

    .heading {
        h2 {
            font-size: 2.12rem;
            color: #000;
            font-weight: 600;
        }

        p {
            padding-top: 0.5rem;
            font-size: 1.7rem;
            color: #717171;
            font-weight: normal
        }
    }


    .cards {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        .card {
            position: relative;
            margin-top: 3rem;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;

            .background {
                width: 290px;
                height: 360px;

                img {
                    width: 100%;
                    height: 100%
                }
            }

            .background::before {
                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.90) 100%);
                content: '';
                z-index: 10;
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
            }

            .hotel-location {
                position: absolute;
                left: 20px;
                bottom: 20px;
                z-index: 10000;

                h4 {
                    font-size: 1.6rem;
                    color: #FFF;
                    font-weight: 600;
                }

                p {
                    color: #FFF;
                    font-size: 1.1rem;
                    font-weight: normal
                }
            }
        }
    }
}


@media screen and (max-width: 900px) {
    .hotels {

        .heading {
            margin-bottom: 2rem;
            text-align: center;

            h2 {
                font-size: 2rem;
            }

            p {
                font-size: 1.2rem;
            }
        }

        .cards {
            flex-wrap: wrap;




            .card {
                margin-top: 0;
            }
        }
    }
}
</style>