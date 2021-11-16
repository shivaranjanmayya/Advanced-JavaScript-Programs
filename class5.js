class Father {
    home1 = 'Sweet Home';

    badBehaviour() {
        console.log('Smoking...');
    }
}

class Son extends Father {


    badBehaviour() {
        super.badBehaviour();
        console.log('Drugs');
    }
}

let shiva = new Son();
console.log(shiva.home1);
shiva.badBehaviour();