const myLocalStorage = {

        setItem : (key, value, expiresIn) => {
            localStorage.setItem(key, value);
            setTimeout(()=>{
                localStorage.removeItem(key);
            }, expiresIn);
        },
        getItem: (key) => localStorage.getItem(key),
    
}

myLocalStorage.setItem('foo', 'bar', 3000)    
console.log(myLocalStorage.getItem('foo'));

setTimeout(()=>{
    console.log(myLocalStorage.getItem('foo'))
}, 3000)
