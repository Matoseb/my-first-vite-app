
export function delay(ms) {
    return new Promise((resolve, reject) => {
      // resolve()
      setTimeout(() => resolve('fail'), ms)
    })
  };
  