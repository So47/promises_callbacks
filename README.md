# Promises_Callbacks



## Description

You are given two functions, **getUser** and **activateUser**. Both of these functions use callbacks - **getUser** takes callback(error, response) as a parameter, and **activateUser** takes data and callback(error, response) as parameters.

Your task is to define a corresponding set of asynchronous functions that return a Promise as a result:

**getUserPromise** accepts the **getUser** callback and returns a Promise with data (the output of the original **getUser** function). If the callback execution ended up with an error, the resulting promise should also be rejected with this error.
activateUserPromise accepts the data returned by **getUser** and the **activateUser** callback, and returns a Promise with the processed data (the result from the **activateUser** function). If the callback execution ended up with an error, the resulting promise should also be rejected with this error.
**getAndActivateUser** accepts callbacks **getUser** and **activateUser**, and returns a Promise with the activated retrieved user data. If either callback execution ended up with an error, the resulting promise should also be rejected with this error.

