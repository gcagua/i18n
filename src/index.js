import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/es";

import JobsList from "./components/jobslist";

const messages = {
    'en' : localeEnMessages,
    'es' : localeEsMessages
}

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
        <IntlProvider locale={navigator.language} messages = {messages[language]}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);