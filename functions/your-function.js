// functions/your-function.js
exports.handler = async function (event, context) {
    // Your function logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from your function" }),
    };
  };
  