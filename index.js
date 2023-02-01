function getUserPromise(getUser) {
    return new Promise((resolve, reject) => {
      getUser((error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
  
  function activateUserPromise(data, activateUser) {
    return new Promise((resolve, reject) => {
      activateUser(data, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
  
  async function getAndActivateUser(getUser, activateUser) {
    try {
      const user = await getUserPromise(getUser);
      const activatedUser = await activateUserPromise(user, activateUser);
      return activatedUser;
    } catch (error) {
      throw error;
    }
  }
