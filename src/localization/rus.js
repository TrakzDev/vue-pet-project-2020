export default  {
    Menu: {
        main: "Главная",
        withLoading: "С подгрузкой",
        form: "Тут была форма",
        popup: "С попапом"
    },
    Pages: {
        Main: {
            title: "Привет!",
            greetings: "Я пет проект, который был создан, в ходе поглощения знаний по vue создателем ^_^",
            Instructions: {
                title: "Немного инструкций:",
                first: "Для асинхронщины используется <i>json-server</i><br>Если не установен, то нужно в терминале тыкнуть строку - <br><b>npm install -g json-server</b><br> После установки запустить в корне этого проекта командой - <br><b>json-server server.json</b>"
            },
            Includes: {
                title: "Что используется из сторонних библиотек:",
                Positions: {
                    first: "i18n",
                    second: "vue-route",
                    third: "vuelidate",
                    fourth: "vuex"
                }
            }
        },
        Async: {
          title: "Тут всё круто, но понаделанное придётся удалять ручками из файла server.json x_X"
        },
        Form: {
            title: "<b>Здесь можно создать итемку на вкладку 'С подгрузкой'</b><br>Потом, при переходе на ту вкладку, там даже что-то добавится ... но это не точно",
            Labels: {
                title: "Заголовок:",
                text: "Текстовая часть:",
                mail: "Рандомный e-mail:",
                choose: "Скромный выбор:",
                multiChoose: "Мульти скромный выбор:",
                checkbox: "Рисуем лампочку",
                radio: "Цвет лампочки:",
                RadioColor: {
                    green: 'зелёный',
                    red: 'красный'
                }
            },
            Chooses: {
                bread: 'Хлебушек',
                water: 'Водица'
            },
            MultiChooses: {
                fork: 'Вилка',
                spoon: 'Ложка',
                knife: 'Нож'
            },
            Errors: {
                require: "Обязательное поле",
                minLength: "Чуток длиннее",
                mail: "Не похоже на e-mail >.>"
            },
            submit: "Создаться",
            submitSuccess: "Успешненько",
            submitFail: "Не шмогла я (("
        },
        Popup: {
            buttonOpen: "Открыть попап",
            buttonClose: "Закрыть попап",
            buttonOpenLittle: "Открыть попап, но чуть-чуть",
            popupText: "Попап открыт!",
            popupTextLittle: "Попап открыт чуть-чуть ..."
        }
    },
    loadError: "<b>Тут что-то пошло не так :C</b><br>Не исключено, что не запущен json-server*",
}
