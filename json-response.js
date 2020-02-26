import contentTypes from './content-types.js'

const formatJSON = (obj, pretty) => JSON.stringify(obj, null, pretty ? 2 : 0)

const generateJSONResponse = (obj, pretty) => {
  return new Response(formatJSON(obj, pretty), {
    headers: {
      'content-type': contentTypes.json,
      'Access-Control-Allow-Origin': '*'
    }
  })
}

const generateErrorJSONResponse = (error, pretty) => {
  return generateJSONResponse({
    error: typeof error === 'string' ? error : error.message
  }, pretty)
}

export { generateJSONResponse, generateErrorJSONResponse }
