
let state = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}
class myPromise {
    constructor(fn) {
        //Initialization
        this.status = state.pending;
        this.value = null;
        this.reason = null;

        // Resolve
        const resolve = value => {
            if(this.status === state.pending) {
                this.status = state.fulfilled;
                this.value = value;
            }
        }
        // Reject
        const reject = value => {
            if(this.status === state.pending) {
                this.status = state.rejected;
                this.reason = value;
            }
        }
        //Call reject on function execution error
        try {
            fn(resolve, reject)
        } catch(err) {
            reject(err);
        }
    }
    then(onFulfilled, onRejected) {
        if(this.status === state.fulfilled) {
            onFulfilled(this.value);
        } 
        if(this.status === state.rejected) {
            onRejected(this.reason);
        }
    }
    
}
// Test code

let testCode = new myPromise((resolve, reject) => {
    resolve('this is resolved');
    reject('this is Rejected')
})

testCode
    .then(test => {
        console.log(test);
    }, rej => {
        console.log(rej);
    })
    
    
    
// OutPuts
//this is Resolved
