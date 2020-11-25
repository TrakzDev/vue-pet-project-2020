export default {
    Menu: {
        main: "Main page",
        withLoading: "With loading",
        form: "Here was form",
        popup: "With popup"
    },
    Pages: {
        Main: {
            title: "Hi there!",
            greetings: "I'm pet a project that was created during the absorption of knowledge on vue by the creator ^_^",
            Instructions: {
                title: "Some instructions:",
                first: "<i>Json-server</i> is used for asynchronization<br> If not installed, then you need to execute the following line in the terminal -<br><b>npm install -g json-server</b><br> After installation, run at the root of this project with the command - <br><b>json-server server.json</b>"
            },
            Includes: {
                title: "What is used from third party libraries:",
                Positions: {
                    first: "i18n",
                    second: "vue-route",
                    third: "vuelidate",
                    fourth: "vuex"
                }
            }
        },
        Async: {
            title: "Here all so cool, but ... if you want clean some, you should do it into file server.json x_X"
        },
        Form: {
            title: "<b>Here you can create item on tab 'With loading'</b><br>Then you can go there and smth will be added to that tab  ... but it is not exactly",
            Labels: {
                title: "Title:",
                text: "Text part:",
                mail: "Random e-mail:",
                choose: "Few choose:",
                multiChoose: "Multi few choose:",
                checkbox: "Draw light",
                radio: "Light color:",
                RadioColor: {
                    green: 'green',
                    red: 'red'
                }
            },
            Chooses: {
                bread: 'Bread',
                water: 'Water'
            },
            MultiChooses: {
                fork: 'Fork',
                spoon: 'Spoon',
                knife: 'Knife'
            },
            Errors: {
                require: "No way, it is require",
                minLength: "Some more symbols",
                mail: "So close, but not e-mail >.>"
            },
            submit: "Let's create",
            submitSuccess: "Success",
            submitFail: "Smth go wrong (("
        },
        Popup: {
            buttonOpen: "Open popup",
            buttonClose: "Close popup",
            buttonOpenLittle: "Open popup a little",
            popupText: "Popup is open!",
            popupTextLittle: "Popup is open a little ..."
        }
    },
    loadError: "<b>Here smth go wrong :C</b><br>It is possible that it is not running json-server*",
}
