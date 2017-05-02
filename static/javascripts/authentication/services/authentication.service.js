
(function () {
    'use strict';

    angular
        .module('thinkster.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$cookies', '$http'];
    function Authentication($cookies, $http ) {

        var Authentication = {
          logout: logout,
          getAuthenticatedAccount: getAuthenticatedAccount,
          isAuthenticated: isAuthenticated,
          login: login,
          register: register,
          setAuthenticatedAccount: setAuthenticatedAccount,
          unauthenticate: unauthenticate
        };

        return Authentication;

        function login(email, password) {
    return $http.post('/api/v1/auth/login/', {
      email: email, password: password
    }).then(loginSuccessFn, loginErrorFn);


    function loginSuccessFn(data, status, headers, config) {
      Authentication.setAuthenticatedAccount(data.data);

      window.location = '/';
    }

    function loginErrorFn(data, status, headers, config) {
      console.error('Epic failure!');
    }
  }

        function unauthenticate() {
    delete $cookies.authenticatedAccount;

  }
      function logout() {
        return $http.post('/api/v1/auth/logout/')
          .then(logoutSuccessFn, logoutErrorFn);

        function logoutSuccessFn(data, status, headers, config) {
          Authentication.unauthenticate();

          window.location = '/';
        }

        function logoutErrorFn(data, status, headers, config) {
          console.error('Epic failure!');
        }
      }

              function isAuthenticated() {
                console.log('inside isauthenticated');
                  return !!$cookies.authenticatedAccount;
                }



                function getAuthenticatedAccount() {
          if (!$cookies.authenticatedAccount) {
            return;
          }

          return JSON.parse($cookies.authenticatedAccount);
        }

              function setAuthenticatedAccount(account) {
                $cookies.authenticatedAccount = JSON.stringify(account);
              }

                  function unauthenticate() {
              delete $cookies.authenticatedAccount;
            }

          function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);


      function registerSuccessFn(data, status, headers, config) {
        Authentication.login(email, password);
      }


      function registerErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }
    }


})();
