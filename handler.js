"use strict";

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Learning AWS Lamba",
        author: "FavourOnCode"
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getUsers = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: [
          { name: "Favour", age: 23 },
          { name: "Chris", age: 25 }
        ]
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
