class Promise {
    constructor(fn) {
        const resolve = (...args) => {
            if (typeof this.onDone === 'function') {
                this.onDone(...args);
            }
            if (typeof this.onComplete === 'function') {
                this.onComplete();
            }
        }
        const reject = (...args) => {
            if (typeof this.onError === 'function') {
                this.onError(...args);
            }
            if (typeof this.onComplete === 'function') {
                this.onComplete();
            }
        }
        fn(resolve, reject);
    }
    then(onDone, onError) {
        this.onDone = onDone;
        this.onError = onError;
        return this;
    }
    catch(onError) {
        this.onError = onError;
        return this;
    }
    finally(onComplete) {
        this.onComplete = onComplete;
        return this;
    }
}

const work1 = () =>
 new Promise((resolve) => {
     setTimeout(() => resolve('작업 1완료!'), 100);
 });
const work2 = () =>
 new Promise((resolve) => {
     setTimeout(() => resolve('작업 2완료!'), 200);
 });
const work3 = () =>
 new Promise((resolve) => {
     setTimeout(() => resolve('작업 3완료!'), 300);
 });

function urgentWork() {
    console.log('긴급 작업');
}

const nextworkOnDone = (msg1) => {
    console.log('done after 100ms:' +msg1);
    return work2();
}

work1()
    .then(nextworkOnDone)
    .then((msg2) => {
    console.log('done after 200ms:' + msg2);
    return work3();
    })
    .then((msg3) => {
    console.log('done after 300ms:' + msg3);
    });


const work1and2 = () => work1()
    .then((msg1) => {
        console.log('done afeter 100ms:' + msg1);
        return work2();
    });

work1and2()
    .then((msg2) => {
        console.log('done after 200ms:' + msg2);
        return work3();
    })
    .then((msg3) => {
        console.log('done after 600ms:' + msg3);
    });

urgentWork();
work1and2();
nextworkOnDone();
