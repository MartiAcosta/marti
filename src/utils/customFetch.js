let is_ok = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                reject("Error in the customFetch :(");
            }
        }, time);
    });
}

export default customFetch;

<link
rel="stylesheet"
href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

<link
rel="stylesheet"
href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;