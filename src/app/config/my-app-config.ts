export default {
    oidc: {
        clientId: '0oa7til7y3rUtxPvp5d7',
        issuer: 'https://dev-56307797.okta.com/oauth2/default',
        redirectUri:  window.location.origin + '/login/callback',
        scopes:['openid', 'profile', 'email']
    }
}