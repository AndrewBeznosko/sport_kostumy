webpackJsonp([0],{2650:function(e,s){e.exports={languageData:{plurals:function(e,s){var a=String(e).split("."),t=a[0],l=!a[1],o=t.slice(-1),r=t.slice(-2);return s?"other":l&&1==o&&11!=r?"one":l&&o>=2&&o<=4&&(r<12||r>14)?"few":l&&0==o||l&&o>=5&&o<=9||l&&r>=11&&r<=14?"many":"other"}},messages:{"actions.delete":"Удалить","actions.cancel":"Отмена","labels.confirmAction":"Подтвердите действие","labels.totalRecordsAmount":function(e){return[e("entity","select",{botUsers:["Всего пользователей: ",e("amount")],other:["Всего записей: ",e("amount")]})]},"labels.noDataInTable":"Записи отсутствуют","platformShortTitles.telegram":"Telegram","platformShortTitles.messenger":"Messenger","platformShortTitles.vk":"VK","platformShortTitles.viber":"Viber","labels.featureLocked":"Функция заблокирована","labels.notEnoughBots":"Не хватает чат-ботов?","labels.notEnoughBotsDescription":"Вы можете создавать больше, выбрав другой тариф","labels.addBotDescription":"Вы можете добавить себе бота за дополнительную плату","actions.upgradeTariff":"Обновить тариф","actions.addBot":"Добавить бота","labels.autoDispatchesModalTitle":"Автоматизируйте воронку продаж","labels.autoDispatchesModalDescription":"<0><1>Автоматизируйте процессы продаж</1><2>Таргетируйте рассылки на нужных пользователей</2><3>Увеличивайте конверсии благодаря гибкой настройке</3></0><4> <5>Посмотрите</5>, как можно использовать эту функцию для автоматизации воронки продаж.</4>","actions.connectAutoDispatches":"Подключить авторассылки","labels.cartModalTitle":"Корзина покупок и оплата в чат-боте","labels.cartModalDescription":"<0><1>Создать полноценный онлайн-магазин внутри чат-бота</1><2>Легко добавлять и удалять товары из корзины и видеть общую сумму заказа</2><3>Увеличить конверсию потенциальных клиентов в платящих за счет оплаты внутри чат-бота Telegram</3></0><4><5>Посмотрите</5>, как удачно использовать корзину!</4>","actions.connectCart":"Подключить","labels.noAccess":"Нет доступа","labels.clientModalDescription":"Владелец бота не дал вам доступ на использование этого функционала. Пожалуйста, обратитесь к владельцу, если вам необходимо расширить доступ.","labels.dispatchesModalTitle":"Общайтесь с пользователями напрямую","labels.dispatchesModalDescription":"<0><1>Создавайте рассылки с любыми элементами бота</1><2>Таргетируйте рассылки на нужных пользователей</2><3>Настраивайте автоматические цепочки рассылок</3><4>Открываемость > 70% против 20% у e-mail рассылок</4> </0><5><6>Посмотрите</6> как можно использовать эту функцию для автоматизации воронки продаж.</5>","actions.connectDispatches":"Подключить рассылки","labels.formResponsesModalTitle":"Все ответы на формы в боте","labels.formResponsesModalDescription":"Вы можете видеть все заказы, ответы и другие данные, которые пользователи оставили в формах. Выгружайте в .csv и загружайте в CRM.","actions.getAccess":"Получить доступ","labels.formsModalTitle":"Получайте ответы от пользователей","labels.formsModalDescription":"<0><1>Принимайте заказы прямо в боте</1> <2>Проводите опросы и получайте обратную связь</2> <3>Регистрируйте пользователей на события и многое другое</3> </0><4>У нас есть отличный <5>воркшоп</5> по кейсам применения форм в бизнесе</4>","actions.connectForms":"Подключить формы","labels.botsIntegrations":"Популярные сервисы внутри бота","labels.botsIntegrationsDescription":"<0><1>Используйте популярные приложения внутри бота для расширения его функционала</1><2>Доступно более 1000 интеграций: от Google Calendar до Instagram</2></0><3><4>Посмотрите</4>, как можно сделать запись клиента через YClients или добавить лида в Битрикс24!</3>","actions.connect":"Подключить","labels.landingModalTitle":"Продвигайте ваш чат-бот эффективнее","labels.landingModalDescription":"<0><1>Используйте мини-лендинг для продвижения вашего бота в рекламе</1><2>Готовая страница для вашего бота в один клик</2><3>Настройка аватара и названия бота на мини-лендинге</3></0><4><5>Посмотрите, как это выглядит на примере!</5></4>","labels.markerMessageModalTitle":"Принадлежность бота к нам","labels.markerMessageModalDescription":"Здесь есть немного информации о нас. Хотите её убрать?","actions.remove":"Убрать","labels.notificationsModalTitle":"Узнавайте о заполнении форм моментально","labels.notificationsModalDescription":"Подключите автоматические уведомления в Telegram или на почту себе или своим сотрудникам, чтобы моментально реагировать на новые заказы или другие ответы пользователей.","actions.attachSubscription":"Подключить","labels.permissionsEditorModalTitle":"Не хватает управляющих?","labels.permissionsEditorModalDescription":"Вы можете добавить еще управляющих за отдельную плату","actions.addManager":"Добавить управляющего","labels.permissionsModalTitle":"Добавить администратора к боту? Легко!","labels.permissionsModalDescription":"<0>Добавляйте сотрудников для работы с ботом</0><1>Давайте доступ клиентам через отдельную админ панель</1> <2>Доступ всегда можно забрать и назначить снова</2>","labels.persistentMenuModalTitle":"Удобная навигация","labels.persistentMenuModalDescription":"С помощью постоянного меню пользователи гораздо проще ориентируются в разделах бота. Чем проще путь пользователя - тем выше конверсия в нужную цель.","actions.increaseConversion":"Повысить конверсию","labels.productModalTitle":"Оплата продукта в чат-боте","labels.productModalDescription":"<0><1>Выбрать и сразу оплатить товар</1><2>Увеличить конверсию потенциальных клиентов в платящих за счет оплаты внутри чат-бота</2></0>","labels.toolsModalDescription":"<0><1>Используйте инструменты для продвижения ваших ботов</1><2>Готовый мини-лендинг и виджет для ваших ботов для 4-х мессенджеров</2></0>","labels.freePeriodEnd":"Бесплатный период закончился","labels.selectTariffDescription":"Теперь нужно выбрать тариф","actions.selectTariff":"Выбрать тариф","labels.featureLockedDescription":"Данная функция недоступна для вашего тарифа","labels.privacyPolicy":"Политика конфиденциальности","labels.offerAgreement":"Договор оферты","labels.personalDataAgreement":"Согласие на обработку персональных данных",termsOfConfidentiality:"Правила обеспечения конфиденциальности Faceebook",facebookPrivacyPolicy:"Privacy Policy of the Chatforma Facebook app","labels.haveQuestions":"Остались вопросы?","labels.support":"Служба поддержки","labels.orContactUs":"или свяжитесь с нами","header.bots":"Боты","header.instructions":"Инструкции","header.events":"Мероприятия","header.madeInChatforma":"#Сделановчатформе","header.сhooseExpert":"Выбрать эксперта","actions.login":"Войти","labels.controlPanel":"Панель управления","labels.profile":"Профиль","actions.logout":"Выйти","errors.invalidEmailError":"Указанный email не зарегистрирован","actions.changeOwner":"Изменить автора","deleteConfirmation.user":function(e){return["Вы уверены, что хотите удалить пользователя «",e("userEmail"),"»? Данное действие необратимо."]},"labels.usersList":"Список пользователей","labels.name":"Название","labels.usersAmount":"Пользователей","labels.botAttachment":"Привязка","actions.deleteTemplate":"Удалить шаблон","actions.createTemplate":"Создать шаблон","labels.changeBotOwner":"Изменить владельца","labels.owner":"Владелец","actions.save":"Сохранить","labels.addUser":"Добавить пользователя","actions.add":"Добавить","labels.editUser":"Редактирование пользователя","labels.isAttached":"Привязан","actions.addABot":"Добавить бота","actions.edit":"Редактировать","pageTitles.adminPanel":"Панель управления","labels.botsAmount":"Ботов","actions.createUser":"Добавить пользователя","labels.users":"Пользователи","labels.editors":"Управляющие","labels.admins":"Администраторы","labels.clients":"Клиенты","labels.fullName":"Имя","labels.email":"E-Mail","labels.dateAdded":"Дата добавления","labels.firstName":"Имя","labels.lastName":"Фамилия","labels.phone":"Телефон","labels.role":"Роль","labels.selectRole":"Выбрать роль","labels.tariff":"Тариф","labels.selectTariff":"Выбрать тариф","errors.invalidEmailOrPassword":"Неверный E-Mail или пароль","pageTitles.login":"Вход","placeholders.login":"Логин","placeholders.password":"Пароль","labels.forgotPassword?":"Забыли пароль?","labels.noAccount?":"Нет аккаунта?","labels.register":"Зарегистрируйтесь",error:"Неизвестная ошибка","pageTitles.registration":"Регистрация","placeholders.firstName":"Имя","placeholders.lastName":"Фамилия","placeholders.email":"E-Mail","placeholders.phone":"Телефон","placeholders.repeatPassword":"Повторите пароль","actions.register":"Зарегистрироваться","texts.registrationDisclaimer":"Регистрируясь, Вы принимаете нашу <0>Политику конфиденциальности</0> и <1>Согласие на обработку персональных данных</1>","labels.haveAnAccount?":"Уже есть аккаунт?","messages.resetPasswordEmailSent":"Письмо с ссылкой на восстановление пароля было выслано на ваш E-Mail","errors.userNotFound":"Пользователь не найден","messages.passwordResetSuccess":"Пароль был успешно изменен","errors.passwordResetError":"Ошибка при смене пароля","pageTitles.password_reset":"Восстановление пароля","passwordReset.enterNewPassword":"Введите новый пароль для Вашего аккаунта","passwordReset.description":"Укажите ваш E-Mail, чтобы получить письмо с инструкцией по восстановлению","placeholders.newPassword":"Новый пароль","actions.changePassword":"Изменить пароль","actions.sendEmail":"Отправить письмо","labels.noAccount":"Нет аккаунта?","warning.unsavedConstructor":"У вас имеются несохраненные изменения. Вы уверены, что хотите покинуть страницу?","messages.botSaveSuccess":"Бот успешно сохранен","placeholders.buttons":"Кнопки","placeholders.url":"Ссылка","placeholders.content":"Текст","placeholders.title":"Заголовок","placeholders.validation":"Валидация","placeholders.message":"Сообщение","placeholders.price":"Цена","constructor.reply_keyboard":"Постоянное меню","constructor.persistent_menu":"Постоянное меню","constructor.quick_keyboard":"Кнопки меню","errors.forbidTags":"Вы используете недопустимые теги. Список разрешенных тегов: <b>, <strong>, <i>, <em>, <a>, <code>, <pre>, <a href>","errors.botSaveError":"Ошибка при сохранении бота","labels.copyErrorInfo":"Скопировать информацию об ошибке","bot.constructor.newQuestion":"Новый вопрос","placeholders.messageText":"Текст сообщения","labels.addButton":"Добавить кнопку","labels.editButton":"Редактировать кнопку","field.options.message_link":"Ссылка на сообщение","field.options.external_link":"Внешняя ссылка","field.options.phone":"Кнопка вызова","field.options.cart":"Корзина","field.options.cart_summary":"При нажатии на эту кнопку пользователь увидит свою корзину","labels.type":"Тип","labels.buttonType":"Тип кнопки","labels.message":"Сообщение","labels.chooseMessage":"Выберите сообщение","labels.contactName":"Название контакта","labels.link":"Ссылка","labels.buttonCart":"Добавить в корзину","placeholders.subtitle":"Подзаголовок","errors.fileTooLarge":"Файл превышает максимальный размер","errors.fileAttachmentError":"Ошибка прикрепления файла","actions.addElement":"Добавить элемент","limits.maxAmount":"Макс. кол-во товаров","limits.minAmount":"Мин. кол-во товаров","limits.maxPrice":"Макс. сумма для оплаты","limits.minPrice":"Мин. сумма для оплаты","labels.payment":"Оплата","constructor.fileUploadDescription":"Максимальный размер – 10 MB","buttons.accept":"Подтвердить","actions.addButton":"Добавить кнопку","actions.addRow":"Добавить ряд","labels.buttonProduct":"Оплатить","placeholders.questionText":"Текст вопроса","labels.validation.data_type":"Тип данных:","validation.options.none":"Любой","validation.options.phone":"Телефон","validation.options.email":"Email","validation.options.datetime":"Дата и Время","validation.options.file":"Файл","labels.validation.message":"Сообщение об ошибке:","labels.menuButtons":"Кнопки меню","labels.quickReplies":"Быстрые ответы","labels.triggers":"Триггеры","labels.dispatchCondition":"Условие отправки","labels.dispatchTypeMessage":"Тег сообщения","labels.chooseType":"Выберите тег","placeholders.locationQuery":"Введите адрес / Название места","placeholders.tagName":"Название тега","labels.aiTagsDescription":"Добавьте слово, по которому пользователь сможет найти текущее сообщение и нажмите Enter","trigger.send.now":"Отправить сразу","trigger.send.after":"Отправить через","trigger.send.in":"Отправить в","interval.options.minutes":"мин.","interval.options.hours":"ч.","interval.options.days":"дн.","labels.selectSendTime":"Выберите время отправки","labels.selectInterval":"Выберите интервал","trigger.send.repeat":"Повторять?","labels.aiTags":"AI теги для вызова сообщения","labels.geolocation":"Геолокации","messages.newMessage.name":"Новое сообщение","messages.newFormName":"Новая форма","labels.persistentMenu":"Постоянное меню","labels.replyKeyboard":"Постоянное меню","bot.messages":"Сообщения","field.options.sub_menu":"Подменю","labels.mainMenu":"Главное меню","replyKeyboard.note":function(e){return["Вы можете создать до ",e("maxRows"),"-ти рядов из ",e("maxRowSize"),"-х кнопок в каждом"]},"actions.run":"Запустить","messages.dispatchUpdateSuccess":"Рассылка успешно обновлена","placeholders.triggers":"Триггеры","labels.emptyMessageType":"Тег сообщения не выбран","labels.dispatch_in_time":"Время","labels.dispatch_interval":"Интервал","labels.dispatch_time":"Время","errors.dispatchUpdateError":"Ошибка при обновлении рассылки","labels.status":"Статус","labels.allUsers":"Все пользователи","labels.createAutoDispatch":"Создать авторассылку","actions.copy":"Копировать","labels.autoDispatches":"Авторассылки","autoDispatches.status.active":"Активна","autoDispatches.status.disabled":"Неактивна","deleteConfirmation.autoDispatch":"Вы уверены, что хотите удалить авторассылку? Данное действие необратимо.","autoDispatches.create.name":"Новая авторассылка","actions.create":"Создать","dispatches.create.name":"Новая рассылка","labels.createDispatch":"Создать рассылку","actions.saveAsDraft":"Сохранить как черновик","actions.deliver":"Доставить","errors.invalidDispatchDate":"Некорректная дата запуска","errors.dispatchAlreadyStarted":"Рассылка уже была запущена","labels.emptyDispatchType":"Тег рассылки не выбран","labels.dispatchInfo":"Информация о рассылке","labels.dispatchDate":"Время рассылки","labels.typeDispatch":"Тег рассылки","labels.deliveredMessages":"Доставлено","labels.undeliveredMessages":"Не доставлено","labels.dispatches":"Рассылки","labels.runDate":"Дата запуска","labels.exportForm":"Экспорт","labels.userName":"Имя пользователя","labels.date":"Дата","bots.forms":"Формы","bots.purchases":"Покупки","actions.deleteResponses":"Удалить ответы","labels.botFormsData":"Формы","labels.responsesCount":"Кол-во ответов","labels.botPurchasesData":"Покупки","labels.purchaseProducts":"Товары","labels.purchaseUser":"Пользователь","labels.purchaseStatus":"Статус","labels.purchaseCollectedAt":"Дата сбора","labels.purchasePaidAt":"Дата оплаты","users.list.create.name":"Новый список","labels.createUsersList":"Создать список","labels.addUsersToList":"Добавить пользователей в список","usersListsRulesTitles.message_receive":"Получение сообщения","labels.filters":"Фильтры","labels.dateFrom":"От","labels.dateTo":"До","errors.getUserInformation":"Ошибка при загрузке пользователя","labels.editRules":"Редактировать правила","labels.addUsers":"Добавить пользователей","errors.updateFieldUser":"Ошибка при изменении поля","errors.updateTagUser":"Ошибка при изменении тэга","errors.updateResUser":"Ошибка при изменении ответственного","labels.usersSidebar":"Пользователи","labels.joinedAt":"Дата добавления","deleteConfirmation.userFromList":"Вы уверены, что хотите удалить пользователя из списка? Данное действие необратимо.","errors.listDeletionError":"Невозможно удалить список, т.к. он используется в рассылке","labels.addUsersList":"Добавить список","labels.usersLists":"Списки пользователей","labels.title":"Название","labels.usersCount":"Пользователей","deleteConfirmation.usersList":"Вы уверены, что хотите удалить список? Данное действие необратимо.","labels.addingRules":"Добавление в список","labels.deletingRules":"Удаление из списка","labels.chooseAction":"Выберите действие","labels.chooseTriggers":"Выберите триггеры","labels.buttons":"Кнопки","labels.tags":"АИ Теги","labels.formCompletion":"Заполнение формы","labels.formCompletionTrigger":"Триггер срабатывает при заполнении формы","rules.product.text":"Оплата продукта была произведена","labels.addField":"Добавить поле","labels.form":"Форма","labels.chooseForm":"Выберите форму","labels.question":"Вопрос","labels.chooseQuestion":"Выберите вопрос","actions.addFieldSidebar":"Добавить поле","labels.profileLink":"Ссылка на профиль","labels.responsible":"Ответственный","labels.chooseResponsible":"Выберите ответственного","labels.tagsSidebar":"Тэги","bot.constructor":"Конструктор","bot.distributions":"Рассылки","bot.formData":"Сбор данных","bot.notifications":"Уведомления","bot.users":"Пользователи","bot.lists":"Списки","bot.access":"Доступ","bot.integrations":"Интеграции","bot.settings":"Настройки","bot.notAttached":"Не привязан","labels.addSubscription":"Добавить подписку","labels.editSubscription":"Изменить подписку","labels.telegram":"Телеграм","labels.subscriptionType":"Тип подписки","labels.subscription":"Подписка","labels.all_forms":"Все формы","labels.someForms":"Некоторые формы","labels.manual":"Запрос на диалог","labels.forms":"Формы","messages.attachmentLinkCopySuccess":"Ссылка успешно скопирована","labels.createNotificationSubscription":"Добавить подписку","labels.notificationSubscriptions":"Подписки на уведомления","labels.user":"Пользователь","labels.attachment":"Привязка","labels.allFormsSubscription":"Все формы","labels.manualSubscription":"Запрос на диалог","deleteConfirmation.notificationSubscription":"Вы уверены, что хотите удалить подписку? Данное действие необратимо.","message.editorsPermissionError":"Вы не можете добавить еще одного управляющего","message.featureLimitedPermissionError":"Хотя бы один раздел конструктора должен быть доступен","messages.emailPermissionError":"Этот email уже используется","labels.addAccess":"Добавить доступ","labels.typeAccess":"Тип доступа","labels.selectTypeAccess":"Выберите тип","permissionsTypeAccess.full":"Полный","permissionsTypeAccess.limited":"Ограниченный","labels.userBotFeatures":"Доступные разделы","labels.userBotConstructorFeatures":"Доступные действия в конструкторе","labels.access":"Доступ","labels.editAccess":"Редактирование доступа","messages.botSettingsUpdateSuccess":"Настройки успешно обновлены","errors.botSettingsUpdateError":"Ошибка при обновлении настроек","placeholders.name":"Имя","labels.settings.landing.edit":"Редактировать мини лендинг","labels.settings.landing.button":"Название кнопки (30 символов)","placeholders.nameLandingButton":"Текст кнопки","labels.settings.landing.textarea":"Описание бота (85 символов)","placeholders.nameLandingDescription":"Описание","labels.settings.landing.previewImage":"Изображение","placeholders.nameLandingPreviewImage":"Добавить изображение","labels.settings.landing.previewVideo":"Видео","placeholders.nameLandingPreviewVideo":"Добавить youtube/vimeo видео","actions.createPage":"Создать страницу","actions.editBotLanding":"Сохранить","actions.openPage":"Открыть страницу","messages.userCreatePageSuccess":"Страница была успешно создана","messages.userCreatePageError":"Ошибка создания страницы","messages.userEditPageSuccess":"Страница отредактирована","messages.userEditPageError":"Ошибка редактирования","labels.launchBot":"Запустить бота","labels.botPageDescription":"Запустите чат-бота, чтобы продолжить","labels.settings.landing.title":"Создайте мини лендинг для вашего бота","labels.settings.landing.description":"<0>Привлекайте аудиторию в чат-бота через посадочную страницу. Вы также можете создать общий мини-лендинг для нескольких ботов по <1>ссылке</1>.</0>","messages.botAttachedSuccessfully":"Бот успешно привязан","errors.botAttachmentError":"Ошибка при привязке бота","messages.botDetachedSuccessfully":"Бот успешно отвязан","errors.botDetachmentError":"Ошибка при отвязке бота","labels.availablePages":"Доступные страницы","botSettings.chooseThePageToAttach":"Выберите страницу для подключения","botSettings.logIntoFbToAttach":"Чтобы увидеть доступные страницы войдите в ваш аккаунт Facebook","botSettings.logViaFacebook":"Войти через Facebook","detachConfirmationPage.bot":"При отвязке все текущие пользователи бота исчезнут в конструкторе, но обязательно сохранятся за страницей.\nПри повторной привязке страницы все пользователи вернутся в свои списки и буду вновь видны в конструкторе.","messages.botAttachmentPaymentSuccessfully":"Платежный токен успешно привязан","errors.botAttachmentPaymentError":"Ошибка при привязке платежного токена","messages.paymentDetachedSuccessfully":"Платежный токен успешно отвязан","errors.paymentDetachmentError":"Ошибка при отвязке платежного токена","placeholders.accessToken":"Токен доступа","labels.currency":"Валюта","labels.chooseCurrency":"Выберете валюту","detachConfirmationPayment.bot":"Если вы отключите оплату, корзина перестанет работать с бот-аудиторией","bot.settings.general":"Общие настройки","bot.settings.landing":"Мини лендинг","bot.settings.configuration":"Конфигурация","bot.settings.payment":"Платежная конфигурация","detachConfirmationToken.bot":"При отвязке все текущие пользователи бота исчезнут в конструкторе, но обязательно сохранятся за токеном.\nПри повторной привязке токена все пользователи вернутся в свои списки и буду вновь видны в конструкторе.","botSettings.logIntoVkToAttach":"Для того чтобы увидеть доступные страницы войдите в ваш аккаунт Вконтакте","botSettings.logViaVk":"Войти через VK","users.filters":"Фильтры","filterLabel.form":"Форма","filterLabel.completed":"Заполненная","filterLabel.notComplated":"Незаполненная","filterLabel.question":"Вопрос","filterLabel.answer":"Ответ","filterLabel.tags":"Тэги","users.list.create.usersTag":"Новый тэг","labels.createUsersTag":"Редактирование тэга","actions.createList":"Создать список","actions.createDispatch":"Создать рассылку","actions.editTags":"Редактировать тэг","actions.export":"Экспорт","bot.create.botName":"Новый бот","bot.create.startMessage":"Стартовое сообщение","bot.create.startMessage.content":"Приветствие","bot.create.defaultMessage":"Сообщение по умолчанию","bot.create.defaultMessage.content":"Ничего не найдено","labels.createBot":"Создать бота","messages.botCopiedSuccessfully":"Бот скопирован","errors.botCopyError":"Ошибка при копировании бота","pageTitles.myBots":"Мои боты","actions.createBot":"Создать бота","bots.published":"Созданные","bots.templates":"Шаблоны","labels.noBotsInCategory":"Нет ботов в данной категории","deleteConfirmation.bot":function(e){return["Вы уверены что хотите удалить бота «",e("0"),"»?\nДанное действие необратимо."]},"pageTitles.templates":"Шаблоны","labels.noTemplatesInCategory":"Нет шаблонов в данной категории","deleteConfirmation.template":function(e){return["Вы уверены что хотите удалить шаблон «",e("0"),"»?\nДанное действие необратимо"]},"profile.create.nameToken":"Название токена","labels.createToken":"Создать токен","messages.domainUpdateSuccess":"Домен успешно добавлен","messages.domainRecordNotFound":"DNS запись не найдена","messages.domainUpdateError":"Ошибка при добавлении домена","messages.domainDeleteSuccess":"Домен успешно удалён","messages.domainDeleteError":"Ошибка удаления домена","pageTitles.domain":"Свой домен для доступа клиентов:","labels.materials":"Полезные материалы для работы","labels.materialsDescription":"Мы собрали для вас подборку материалов для быстрого и успешного старта бизнеса","actions.open":"Открыть","placeholders.domain":"Домен","actions.deleteDomain":"Удалить домен","actions.createDomain":"Создать домен","labels.integration":"Интеграции","labels.tools":"Инструменты","labels.domain":"White Label","messages.tokenCopiedSuccessfully":"Токен скопирован","pageTitles.integrationTokens":"Токены для интеграции","actions.createToken":"Создать токен","pageTitles.integrationOptions":"Варианты интеграций","label.integrationOptions":"Без программирования:","label.zapierText":"Соедините чат-ботов с 1300+ сервисами","label.albatoText":"Связь с российскими CRM, аналитикой и учетом","label.integrationText":"С помощью наших API:","pageTitles.readyIntegrationZapier":"Готовые интеграции Zapier","deleteConfirmation.token":"Вы уверены, что хотите удалить токен? Данное действие необратимо.","pageTitles.transactions":"Транзакции","labels.amount":"Сумма","labels.transaction.id":"Идентификатор транзакции","messages.userUpdateSuccess":"Пользователь успешно обновлен","messages.userUpdateError":"Ошибка при обновлении пользователя","labels.token":"Токен","labels.unsubscribePayments":"Отписаться от регулярных платежей","actions.unsubscribe":"Отписаться","labels.lastTransactionDate":"Дата последнего платежа:","labels.nextTransactionDate":"Дата следующего платежа:","labels.getDiscount":"Получи скидку 30% на продление тарифа","actions.getDiscount":"Получить!","messages.userPageDeleteSuccess":"Страница была успешна удалена","messages.userPageDeleteError":"Ошибка при удалении страницы","pageTitles.createLanding":"Создать общий мини-лендинг для 4-х ботов","labels.createPage":"Создать страницу","labels.editPage":"Редактировать страницу","labels.description":"Описание","placeholders.description":"Описание","labels.picture":"Картинка бота","labels.chooseBot":"Выберите бот","labels.previewImage":"Изображение","placeholders.previewImage":"Добавить изображение","labels.previewVideo":"Видео","placeholders.previewVideo":"Добавить youtube/vimeo видео","labels.nothingSelected":"Ничего не выбрано","actions.editPage":"Редактировать мини лендинг","actions.editWidget":"Редактировать","actions.createWidget":"Создать виджет","messages.createWidgetSuccess":"Виджет успешно создан","messages.createWidgetError":"Ошибка при создании виджета","messages.widgetUpdateSuccess":"Виджет был успешно изменен","messages.widgetUpdateError":"Ошибка редактирования виджета","messages.widgetDeleteSuccess":"Виджет был успешно удален","messages.widgetDeleteError":"Ошибка удаления виджета","pageTitles.createWidget":"Создайте виджет со ссылкой на чат-бота для сайта","labels.copyWidget":"Скопировать виджет","label.notFoundHeading":"Ошибка 404 или","label.notFoundSubHeading":"НИЧЕГО НЕ НАЙДЕНО","label.notFoundDescription":"Кажется, страницы, которую Вы искали, нет. Но это не беда - есть множество других, не менее интересных!","action.notFoundDescription":"Советуем вернуться на главную страницу, там Вы точно найдете то, что искали :)","actions.toMain":"На главную","validation.required":"Данное поле обязательно","validation.minLength":function(e){return["Поле должно содержать минимум ",e("0","plural",{one:["#"," символ"],few:["#"," символа"],many:["#"," символов"]})]},"validation.maxLength":function(e){return["Поле должно содержать максимум ",e("0","plural",{one:["#"," символ"],few:["#"," символа"],many:["#"," символов"]})]},"validation.equalTo":function(e){return[e("0","select",{password:"Пароли должны совпадать"})]},"validation.email":"Неправильный E-Mail","validation.unique":function(e){return[e("0","select",{users:[e("1","select",{email:"Пользователь с таким E-Mail'ом уже существует"})]})]},"validation.phone":"Неправильный номер телефона","errors.validation_error":"Ошибка валидации","constructor.text_element":"Текст","constructor.file_element":"Файл","constructor.buttons_element":"Кнопки","constructor.quick_replies":"Быстрые ответы","constructor.question":"Вопрос","constructor.single_choice":"Одиночный выбор","constructor.multiple_choice":"Мульти-выбор","constructor.single_choice_gallery":"Одиночный выбор (галерея)","constructor.multiple_choice_gallery":"Мульти-выбор (галерея)","constructor.gallery":"Галерея","constructor.cart":"Корзина","constructor.manual_element":"Запрос на диалог","constructor.product":"Продукт","usersListsRulesTitles.date_added":"Дата добавления","usersListsRulesTitles.cart_actions":"Корзина","usersListsRulesTitles.product":"Продукт","constructor.regular_message":"Сообщение","constructor.form_message":"Форма","platform.telegram":"Telegram","platform.vk":"VK","platform.messenger":"Facebook Messenger","platform.viber":"Viber","platform.general":"Универсальные боты","dispatchStatuses.pending":"На очереди","dispatchStatuses.draft":"Черновик","dispatchStatuses.paused":"Приостановлена","dispatchStatuses.in_progress":"Рассылается","dispatchStatuses.finished":"Завершена","dispatchStatuses.stopped":"Остановлена","dispatchStatuses.error":"Завершена с ошибкой","purchaseStatuses.paid":"Оплачено","purchaseStatuses.collected":"Собрано","userRoles.client":"Клиент","userRoles.admin":"Админ","userRoles.user":"Пользователь","tariffNames.100":"Freemium","tariffNames.200":"Бизнес","tariffNames.300":"White Label","tariffNames.400":"Первый","tariffNames.500":"Триал","tariffNames.600":"Партнер","permissionsRoles.client":"Клиент","permissionsRoles.admin":"Админ","permissionsRoles.editor":"Управляющий","userFilters.created_at":"Дата добавления","userFilters.form_status":"Заполненные формы","userFilters.question_answer":"Формы","userFilters.tags":"Тэги","clientFeatures.constructor":"Конструктор","clientFeatures.dispatches":"Рассылки","clientFeatures.auto_dispatches":"Авторассылки","clientFeatures.notifications":"Уведомления","clientFeatures.bot_users":"Пользователи","clientFeatures.users_lists":"Списки","clientFeatures.integrations":"Интеграция","clientFeatures.form_responses":"Сбор данных","clientFeatures.settings":"Настройки","clientFeatures.permissions":"Доступ","clientFeatures.text":"Добавление/Редактирование текста","clientFeatures.buttons":"Добавление/Редактирование кнопок","clientFeatures.files":"Добавление/Редактирование файлов","clientFeatures.message":"Добавление/Редактирование сообщений (создание, удаление, перемещение)","labels.widget":"Виджет","labels.tagsDescription":"Add a word or phrase that will trigger this message and press Enter","labels.cart.actions.add":"Добавил в корзину","labels.cart.actions.open":"Открыл корзину","labels.cart.actions.change":"Изменил","labels.cart.actions.clear":"Очистил корзину","labels.cart.actions.buy":"Купил","pageTitles.botPage":"Чат-бот для","messages.editorsPermissionError":"Вы не можете добавить еще одного управляющего","labels.priceNotSet":"Цена еще не установлена","labels.price":"Цена","pageTitles.profile":"Профиль","pageTitles.externalIntegration":"Внешние интеграции","actions.materials":"Материалы","bot.create.messengerWarn":"Боты для Facebook Messenger временно не работают. Привязка к страницам и функционирование пока недоступны, но Вы можете продолжить собирать их внутри конструктора","actions.create-token":"Создать токен","advertising.moreButton":"Подробнее","advertising.url":"https://www.chatforma.com","advertising.text":"Данный бот был собран в конструкторе Chatforma без программирования. Попробуйте и Вы!","advertising.title":"Сделано в Chatforma","labels.selectOwner":"Выбрать владельца","labels.chooseList":"Выберите список","labels.chooseFilters":"Выберите фильтр","labels.days.short.monday":"Пн","labels.days.short.tuesday":"Вт","labels.days.short.wednesday":"Ср","labels.days.short.thursday":"Чт","labels.days.short.friday":"Пт","labels.days.short.saturday":"Сб","labels.days.short.sunday":"Вс","labels.days.monday":"Понедельник","labels.days.tuesday":"Вторник","labels.days.wednesday":"Среда","labels.days.thursday":"Четверг","labels.days.friday":"Пятница","labels.days.saturday":"Суббота","labels.days.sunday":"Воскресенье"}}}});