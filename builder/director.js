//Archivo que actua como director y dirige el proceso de construcción utilizando el objeto Builder

class CharacterDirector {
    constructor(builder) {
        this.builder = builder;
    }

    // Método para construir un personaje específico
    construct(name, type, weapon, armor) {
        this.builder.buildName(name);
        this.builder.buildType(type);
        this.builder.buildWeapon(weapon);
        this.builder.buildArmor(armor);
        return this.builder.getResult();
    }
}

export default CharacterDirector;
