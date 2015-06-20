'use strict';

let app = angular.module('myApp', ['ngRoute', 'rmMeetup','door3.css']);

app.config(
    [
        'rmConsumerProvider',
        (rmConsumerProvider) => {
            rmConsumerProvider.setKey('1h82intl8imm92ivovvphp0f9c');
            rmConsumerProvider.setRedirectURI('http://localhost:8080');
        }
    ]
);

return app;