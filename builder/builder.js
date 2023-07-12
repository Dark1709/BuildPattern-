import Character from './product.js';
//Este archivo nos define la interfaz del Builder, proporciona la implementación concreta para construir las partes del personaje

class CharacterBuilder {
    constructor() {
        this.character = new Character();
    }

    // Métodos para construir las partes del personaje

    buildName(name) {
        this.character.setName(name);
    }

    buildType(type) {
        this.character.setType(type);
    }

    buildWeapon(weapon) {
        this.character.setWeapon(weapon);
    }

    buildArmor(armor) {
        this.character.setArmor(armor);
    }

    // Método para obtener el personaje construido

    getResult() {
        return this.character;
    }
}

export default CharacterBuilder;
