let responseDisplay = 'data'
const { coreapi } = window
const { schema } = window

function normalizeKeys (arr) {
  let _normarr = []
  for (let i = 0; i < arr.length; i++) {
    _normarr = _normarr.concat(arr[i].split(' > '))
  }
  return _normarr
}

function normalizeHTTPHeader (str) {
  // Capitalize HTTP headers for display.
  return (str.charAt(0).toUpperCase() + str.substring(1))
    .replace(/-(.)/g, ($1) => $1.toUpperCase())
    .replace(/(Www)/g, ($1) => 'WWW')
    .replace(/(Xss)/g, ($1) => 'XSS')
    .replace(/(Md5)/g, ($1) => 'MD5')
}

function formEntries (form) {
  // Polyfill for new FormData(form).entries()
  const formData = new FormData(form)
  if (formData.entries !== undefined) {
    return Array.from(formData.entries())
  }

  const entries = []

  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i]

    if (!element.name) {
      continue
    }

    if (element.type === 'file') {
      for (var j = 0; j < element.files.length; j++) {
        entries.push([element.name, element.files[j]])
      }
    } else if (element.type === 'select-multiple' || element.type === 'select-one') {
      for (var j = 0; j < element.selectedOptions.length; j++) {
        entries.push([element.name, element.selectedOptions[j].value])
      }
    } else if (element.type === 'checkbox') {
      if (element.checked) {
        entries.push([element.name, element.value])
      }
    } else {
      entries.push([element.name, element.value])
    }
  }

  return entries
}

$(() => {
  const $selectedAuthentication = $('#selected-authentication')
  const $authControl = $('#auth-control')
  const $authTokenModal = $('#auth_token_modal')
  const $authBasicModal = $('#auth_basic_modal')
  const $authSessionModal = $('#auth_session_modal')

  // Language Control
  $('#language-control li').click(function (event) {
    event.preventDefault()
    const $languageMenuItem = $(this).find('a')
    const $languageControls = $(this).closest('ul').find('li')
    const $languageControlLinks = $languageControls.find('a')
    const language = $languageMenuItem.data('language')

    $languageControlLinks.not(`[data-language="${language}"]`).parent().removeClass('active')
    $languageControlLinks.filter(`[data-language="${language}"]`).parent().addClass('active')

    $('#selected-language').text(language)

    const $codeBlocks = $('pre.highlight')
    $codeBlocks.not(`[data-language="${language}"]`).addClass('hide')
    $codeBlocks.filter(`[data-language="${language}"]`).removeClass('hide')
  })

  // API Explorer
  $('form.api-interaction').submit(function (event) {
    event.preventDefault()

    const $form = $(this).closest('form')
    const $requestMethod = $form.find('.request-method')
    const $requestUrl = $form.find('.request-url')
    const $toggleView = $form.closest('.modal-content').find('.toggle-view')
    const $responseStatusCode = $form.find('.response-status-code')
    const $meta = $form.find('.meta')
    const $responseRawResponse = $form.find('.response-raw-response')
    const $requestAwaiting = $form.find('.request-awaiting')
    const $responseRaw = $form.find('.response-raw')
    const $responseData = $form.find('.response-data')
    const key = normalizeKeys($form.data('key'))
    const params = {}
    const entries = formEntries($form.get()[0])

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]
      const paramKey = entry[0]
      const paramValue = entry[1]
      const $elem = $form.find(`[name="${paramKey}"]`)
      const dataType = $elem.data('type') || 'string'

      if (dataType === 'integer' && paramValue) {
        var value = parseInt(paramValue)
        if (!isNaN(value)) {
          params[paramKey] = value
        }
      } else if (dataType === 'number' && paramValue) {
        var value = parseFloat(paramValue)
        if (!isNaN(value)) {
          params[paramKey] = value
        }
      } else if (dataType === 'boolean' && paramValue) {
        var value = {
          true: true,
          false: false
        }[paramValue.toLowerCase()]
        if (value !== undefined) {
          params[paramKey] = value
        }
      } else if (dataType === 'array' && paramValue) {
        try {
          params[paramKey] = JSON.parse(paramValue)
        } catch (err) {
          // Ignore malformed JSON
        }
      } else if (dataType === 'object' && paramValue) {
        try {
          params[paramKey] = JSON.parse(paramValue)
        } catch (err) {
          // Ignore malformed JSON
        }
      } else if (dataType === 'string' && paramValue) {
        params[paramKey] = paramValue
      }
    }

    $form.find(':checkbox').each(function (index) {
      // Handle unselected checkboxes
      const name = $(this).attr('name')
      if (!params.hasOwnProperty(name)) {
        params[name] = false
      }
    })

    function requestCallback (request) {
      // Fill in the "GET /foo/" display.
      const parser = document.createElement('a')
      parser.href = request.url
      const { method } = request.options
      const path = parser.pathname + parser.hash + parser.search

      $requestMethod.text(method)
      $requestUrl.text(path)
    }

    function responseCallback (response, responseText) {
      // Display the 'Data'/'Raw' control.
      $toggleView.removeClass('hide')

      // Fill in the "200 OK" display.
      $responseStatusCode.removeClass('label-success').removeClass('label-danger')
      if (response.ok) {
        $responseStatusCode.addClass('label-success')
      } else {
        $responseStatusCode.addClass('label-danger')
      }
      $responseStatusCode.text(response.status)
      $meta.removeClass('hide')

      // Fill in the Raw HTTP response display.
      let panelText = `HTTP/1.1 ${response.status} ${response.statusText}\n`
      response.headers.forEach((header, key) => {
        panelText += `${normalizeHTTPHeader(key)}: ${header}\n`
      })
      if (responseText) {
        panelText += `\n${responseText}`
      }
      $responseRawResponse.text(panelText)
    }

    // Instantiate a client to make the outgoing request.
    const options = {
      requestCallback,
      responseCallback
    }

    // Setup authentication options.
    if (window.auth && window.auth.type === 'token') {
      // Header authentication
      options.auth = new coreapi.auth.TokenAuthentication({
        scheme: window.auth.scheme,
        token: window.auth.token
      })
    } else if (window.auth && window.auth.type === 'basic') {
      // Basic authentication
      options.auth = new coreapi.auth.BasicAuthentication({
        username: window.auth.username,
        password: window.auth.password
      })
    } else if (window.auth && window.auth.type === 'session') {
      // Session authentication
      options.auth = new coreapi.auth.SessionAuthentication({
        csrfCookieName: 'csrftoken',
        csrfHeaderName: 'X-CSRFToken'
      })
    }

    const client = new coreapi.Client(options)
    client.action(schema, key, params).then((data) => {
      const response = JSON.stringify(data, null, 2)
      $requestAwaiting.addClass('hide')
      $responseRaw.addClass('hide')
      $responseData.addClass('hide').text('').jsonView(response)

      if (responseDisplay === 'data') {
        $responseData.removeClass('hide')
      } else {
        $responseRaw.removeClass('hide')
      }
    }).catch((error) => {
      const response = JSON.stringify(error.content, null, 2)
      $requestAwaiting.addClass('hide')
      $responseRaw.addClass('hide')
      $responseData.addClass('hide').text('').jsonView(response)

      if (responseDisplay === 'data') {
        $responseData.removeClass('hide')
      } else {
        $responseRaw.removeClass('hide')
      }
    })
  })

  // 'Data'/'Raw' control
  $('.toggle-view button').click(function () {
    const $modalContent = $(this).closest('.modal-content')
    const $modalResponseRaw = $modalContent.find('.response-raw')
    const $modalResponseData = $modalContent.find('.response-data')

    responseDisplay = $(this).data('display-toggle')

    $(this).removeClass('btn-default').addClass('btn-info').siblings()
      .removeClass('btn-info')

    if (responseDisplay === 'raw') {
      $modalResponseRaw.removeClass('hide')
      $modalResponseData.addClass('hide')
    } else {
      $modalResponseData.removeClass('hide')
      $modalResponseRaw.addClass('hide')
    }
  })

  // Authentication: none
  $authControl.find("[data-auth='none']").click((event) => {
    event.preventDefault()
    window.auth = null
    $selectedAuthentication.text('none')
    $authControl.find('[data-auth]').closest('li').removeClass('active')
    $authControl.find("[data-auth='none']").closest('li').addClass('active')
  })

  // Authentication: token
  $('form.authentication-token-form').submit(function (event) {
    event.preventDefault()
    const $form = $(this).closest('form')
    const scheme = $form.find('input#scheme').val()
    const token = $form.find('input#token').val()
    window.auth = {
      type: 'token',
      scheme,
      token
    }
    $selectedAuthentication.text('token')
    $authControl.find('[data-auth]').closest('li').removeClass('active')
    $authControl.find("[data-auth='token']").closest('li').addClass('active')
    $authTokenModal.modal('hide')
  })

  // Authentication: basic
  $('form.authentication-basic-form').submit(function (event) {
    event.preventDefault()
    const $form = $(this).closest('form')
    const username = $form.find('input#username').val()
    const password = $form.find('input#password').val()
    window.auth = {
      type: 'basic',
      username,
      password
    }
    $selectedAuthentication.text('basic')
    $authControl.find('[data-auth]').closest('li').removeClass('active')
    $authControl.find("[data-auth='basic']").closest('li').addClass('active')
    $authBasicModal.modal('hide')
  })

  // Authentication: session
  $('form.authentication-session-form').submit((event) => {
    event.preventDefault()
    window.auth = {
      type: 'session'
    }
    $selectedAuthentication.text('session')
    $authControl.find('[data-auth]').closest('li').removeClass('active')
    $authControl.find("[data-auth='session']").closest('li').addClass('active')
    $authSessionModal.modal('hide')
  })
})
