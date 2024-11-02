<template>
    <v-container>
        <v-app>
            <div class="nav-bar" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
                <div class="links">
                    <nuxt-link class="link">
                        <img src="/airplane.svg" alt="">
                        <span>Airplane</span>
                    </nuxt-link>
                    <nuxt-link class="link">
                        <img src="/ion_bed.svg" alt="">
                        <span>Hotels</span>
                    </nuxt-link>
                </div>
                <div class="logo">
                    <img src="/Logo.png" alt="">
                </div>

                <div class="buttons">
                    <div class="dropdowns">
                        <v-menu transition="scale-transition">
                            <template v-slot:activator="{ props }">
                                <v-btn variant="text" v-bind="props">
                                    <img src="/arrow-down.png" alt="">
                                    SR
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="(currency, i) in currency" :key="i">
                                    <v-list-item-title>{{ currency }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-divider :thickness="2" vertical></v-divider>

                        <v-menu transition="scale-transition">
                            <template v-slot:activator="{ props }">
                                <v-btn variant="text" v-bind="props">
                                    EN
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-title style="cursor: pointer;">EN</v-list-item-title>
                                    <v-list-item-title style="cursor: pointer;" value=" locale">AR</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-divider :thickness="2" vertical></v-divider>
                    </div>







                    <v-btn class="btn" color="red-darken-4" variant="outlined">hotel</v-btn>


                    <nuxt-link to="/signup">
                        <v-btn class="btn" color="red-darken-4">
                            sign up
                        </v-btn>
                    </nuxt-link>
                </div>
            </div>



            <v-app-bar style="z-index: 5555555;" class="mobile-nav" prominent>
                <div class="logo">
                    <img src="/Logo.png" alt="">
                </div>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'left' : undefined" temporary>
                <v-list>
                    <div class="buttons">
                        <div class="dropdowns">
                            <div class="dropdown">EN</div>
                            <div class="dropdown"><img src="/arrow-down.png" alt="">SR</div>
                        </div>
                    </div>

                    <div class="btn">
                        <v-btn class="btn" color="red-darken-4" variant="outlined">hotel</v-btn>
                        <v-btn class="btn" color="red-darken-4">Sign Up</v-btn>
                    </div>

                    <div class="links">
                        <nuxt-link class="link">
                            <img src="/airplane.svg" alt="">
                            <span>Airplane</span>
                        </nuxt-link>
                        <nuxt-link class="link">
                            <img src="/ion_bed.svg" alt="">
                            <span>Hotels</span>
                        </nuxt-link>
                    </div>
                </v-list>
            </v-navigation-drawer>
        </v-app>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            currency: ['SR', 'EGP', 'EUR'],
            languages: ['EN', 'AR'],

            drawer: false,
            group: null,

        }
    },

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<script setup>
const { locale, setLocale } = useI18n()

</script>



<style lang="scss" scoped>
.sidebar-btn {
    display: none;
}

.mobile-nav {
    display: none;
}


[data-vuetify] .v-application__wrap {
    min-height: 0vh !important;
}

.v-navigation-drawer {
    display: none;
}

.v-navigation-drawer__scrim {
    display: none;
}

.v-btn--size-default {
    padding: 0
}

::v-deep .v-application__wrap {
    min-height: fit-content;
}

::v-deep .v-toolbar__content {
    justify-content: space-between;
    overflow: visible;
    padding: 1rem;
}


.nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    font-family: "Roboto", sans-serif;

    .logo {
        width: 102px;
        height: 66px;
        margin-left: 4rem;

        .logo img {
            width: 100%;
            height: 100%;
        }
    }

    .links {
        display: flex;
        gap: 1.2rem;

        .link {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: 0.3s ease;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 8px;
            font-weight: 600;
        }

        .link:hover {
            background-color: #dfdede;
        }
    }

    .buttons {
        display: flex;
        gap: 0.5rem;

        .btn {
            font-weight: 600;
            padding: 0 0.78rem;
        }

        .dropdowns {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0rem;

            .dropdown {
                border-right: 2px solid #dfdede;
                padding: 0 0.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                cursor: pointer;
            }
        }
    }

}

@media screen and (max-width: 900px) {
    .nav-bar {
        display: none
    }

    .mobile-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
    }

    .v-navigation-drawer {
        z-index: 5555555;
        display: block;
    }

    .v-container {
        padding: 0
    }

    .v-list {
        padding: 2rem;
    }

    .dropdowns {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .dropdown {
            cursor: pointer;
            padding-top: 1rem;
            display: flex;
            align-items: center;
        }
    }

    .btn {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 2rem;
    }

    .links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;

        .link {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: 0.3s ease;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 8px;
            font-weight: 600;
        }

        .link:hover {
            background-color: #dfdede;
        }
    }
}
</style>