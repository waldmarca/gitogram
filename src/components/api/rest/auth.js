import { makeRequest } from '../requests'
import env from '../../../../env'

export const getAccessTokenByPersonalCode = (code) => makeRequest({
  url: 'https://webdev-api.loftschool.com/github',
  method: 'post',
  data: {
    clientId: env.clientId,
    clientSecret: env.clientSecret,
    code
  }
})

export const sendUserToAuthPage = () => {
  const githubAuthUrl = 'https://github.com/login/oauth/authorize'
  const params = new URLSearchParams()
  params.append('client_id', env.clientId)
  params.append('scope', 'repo, user')
  window.location.href = `${githubAuthUrl}?${params}`
}
