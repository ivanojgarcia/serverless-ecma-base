
export { success, error }

const json = (_statusCode, data) => {
    
        return {
          statusCode: _statusCode,
          body: JSON.stringify({
            statusCode: _statusCode,
            data
          },
          null,
          2),
        };
    
      }

const success = (data, code = 200) => {
  return {
    statusCode: code,
    body: JSON.stringify({
      statusCode: code,
      data
    },
    null,
    2),
  };
};
  
const error = (data, code = 500) => {
  return {
    statusCode: code,
    body: JSON.stringify({
      statusCode: code,
      data
    },
    null,
    2),
  };
}
  