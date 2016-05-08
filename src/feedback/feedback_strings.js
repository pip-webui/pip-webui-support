/**
 *  @file String resources for Feedback page
 *  @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipFeedback.Strings', ['pipTranslate']);

    thisModule.config(function (pipTranslateProvider) {

        // Set translation strings for the module
        pipTranslateProvider.translations('en', {
            'FEEDBACK_TITLE': 'Contact us',
            'FEEDBACK_HINT_FEEDBACK': 'If you need help or you have some ideas or suggestions to improve Pip.Life just use form below',
            'FEEDBACK_HINT_COPYRIGHT': 'If you believe that content available on Pip.Life infringes one or more of your copyrights, you can use the form below to submit a DMCA notice. Upon receipt of a valid notice, we are required by law to respond to it by disabling access to the allegedly infringing content. Your Infringement Notice may be forwarded to the party that made the content available, or to third parties such as ChillingEffects.org.',
            'FEEDBACK_HINT_COPYRIGHT2': 'If you choose to request removal of content by submitting an infringement notification, please remember that you are initiating a legal process. Do not make false claims. Please be advised that under 17 U.S.C. § 512(f), you may be liable for damages (including costs and attorneys’ fees) if you knowingly misrepresent that a product or activity is infringing your copyrights. Thus, if you are not sure content located on or linked-to by Dribbble infringes your copyright, you should consider first contacting an attorney.',
            'FEEDBACK_COMPANY': 'Company name',
            'FEEDBACK_MESSAGE': 'Message',
            'FEEDBACK_ADDRESS': 'Address',
            'FEEDBACK_COPYRIGHT_HOLDER': 'Copyright holder you represent',
            'FEEDBACK_COPYRIGHT_HOLDER_HINT': 'If representing someone other than yourself',
            'FEEDBACK_ORIGINAL_LOCATION': 'Location of original copyrighted work',
            'FEEDBACK_DESCRIBE_COPYRIGHTED': 'Describe the copyrighted work',
            'FEEDBACK_DESCRIBE_COPYRIGHTED_HINT': 'Helps us identify the specific referenced work',
            'FEEDBACK_UNAUTHORIZE_LOCATION': 'Location of unauthorized material',
            'FEEDBACK_UNAUTHORIZE_LOCATION_HINT': 'Please provide specific page URLs, one per line',
            'FEEDBACK_COPYRIGHT_CONC': 'I have a good faith belief that use of the copyrighted materials described above as allegedly infringing is not authorized by the copyright owner, its agent, or the law',
            'FEEDBACK_REGUEST_CONC': 'I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.',
            'FEEDBACK_SIGNATURE': 'You first and last name',
            'FEEDBACK_SIGNATURE_HINT': 'Signature',
            'FEEDBACK_SUBJECT':'Subject',
            'FEEDBACK_SUCCESS': 'Your message was sent to Pip.Life support team. They will contact you via personal messaging soon. Thanks for your interest in PipLife!'
        });

        pipTranslateProvider.translations('ru', {
            'FEEDBACK_TITLE': 'Обратная связь',
            'FEEDBACK_HINT_FEEDBACK': 'Если Вам нужна помощь или у вас есть идеи или предложения по улучшению Pip.Life используйте рассположенную ниже форму',
            'FEEDBACK_HINT_COPYRIGHT': 'Если вы считаете, что контент, доступный на Pip.Life нарушает одно или более ваших авторских прав, вы можете использовать форму ниже, чтобы представить уведомление DMCA. После получения уведомления, мы по закону обязаны ответить на него, отключив доступ к контенту, который предположительно нарушает авторские права. Уведомление может быть направлено со стороны, представившей контент или третьих сторон, таких как ChillingEffects.org.',
            'FEEDBACK_HINT_COPYRIGHT2': 'Если вы решите запросить удаление содержания, подав уведомление о нарушении, пожалуйста, помните, что вы инициируете судебный процесс. Пожалуйста, обратите внимание, что исодя из статьи 17 U.S.C. § 512 (F), вы можете нести ответственность за убытки (включая расходы и гонорары адвокатам), если вы сознательно искажаете действительность, что продукт или деятельность нарушает ваши авторские права. Таким образом, если вы не уверены, что содержание, расположенное на PipLife нарушает Ваши авторские права посоветуйтесь с адвокатом.',
            'FEEDBACK_COMPANY': 'Название компании',
            'FEEDBACK_MESSAGE': 'Сообщение',
            'FEEDBACK_ADDRESS': 'Адрес',
            'FEEDBACK_COPYRIGHT_HOLDER': 'Владелец авторского права',
            'FEEDBACK_COPYRIGHT_HOLDER_HINT': 'Заполните поле, если Вы  представляете кого-то кроме себя',
            'FEEDBACK_ORIGINAL_LOCATION': 'Расположение оригинальной авторской работы',
            'FEEDBACK_DESCRIBE_COPYRIGHTED': 'Опишите авторские права на произведение',
            'FEEDBACK_DESCRIBE_COPYRIGHTED_HINT': 'Это поможет нам идентифицировать ссылки на работу',
            'FEEDBACK_UNAUTHORIZE_LOCATION': 'Расположение несанкционированного материала',
            'FEEDBACK_UNAUTHORIZE_LOCATION_HINT': 'Пожалуйста, укажите конкретную страницу URL, по одной в строке',
            'FEEDBACK_COPYRIGHT_CONC': 'У меня есть добросовестное предположение, что использование защищенных авторским правом материалов, описанных выше, в качестве якобы нарушает авторские права, не разрешено владельцем авторского права, его агентом или законом',
            'FEEDBACK_REGUEST_CONC': 'Я клянусь под страхом наказания за лжесвидетельство, что содержащаяся в уведомлении информация верна и что я являюсь владельцем авторского права или имею право действовать от имени владельца эксклюзивных прав, которые якобы нарушены.',
            'FEEDBACK_SIGNATURE': 'Ваше имя и фамилия',
            'FEEDBACK_SIGNATURE_HINT': 'Подпись',
            'FEEDBACK_SUBJECT':'Заголовок',
            'FEEDBACK_SUCCESS': 'Ваш запрос передан команде технической поддержки Pip.Life. C вами свяжутся в ближайшее время по электронной почте. Спасибо за ваш интерес и поддержку PipLife.'
        });

    });

})();