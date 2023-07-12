//Archivo que nos va a representar el objeto complejo que vamos a construir (personaje)
class Character {
    constructor() {
        this.name = '';
        this.type = '';
        this.weapon = '';
        this.armor = '';
    }

    //métodos para establecer las propiedades del personaje
    setName(name) {
        this.name = name;
    }

    setType(type) {
        this.type = type;
    }

    setWeapon(weapon) {
        this.weapon = weapon;
    }

    setArmor(armor) {
        this.armor = armor;
    }

    //Método para mostrar el personaje construido
    show() {
        console.log(`Name: ${this.name}`);
        console.log(`Type: ${this.type}`);
        console.log(`Weapon: ${this.weapon}`);
        console.log(`Armor: ${this.armor}`);
    }
}

export default Character;