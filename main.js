import CharacterDirector from './builder/director.js';
import CharacterBuilder from './builder/builder.js';
//Aquí utilizamos el patron builder para crear un personaje de un videojuego

// Crear un personaje de tipo "Warrior"
const warriorBuilder = new CharacterBuilder();
const warriorDirector = new CharacterDirector(warriorBuilder);
const warrior = warriorDirector.construct('Warrior', 'Warrior', 'Sword', 'Heavy Armor');
warrior.show();

console.log('-------------------');

// Crear un personaje de tipo "Mage"
const mageBuilder = new CharacterBuilder();
const mageDirector = new CharacterDirector(mageBuilder);
const mage = mageDirector.construct('Mage', 'Mage', 'Staff', 'Robe');
mage.show();

console.log('-------------------');

const archerBuilder = new CharacterBuilder();
const archerDirector = new CharacterDirector(archerBuilder);
const archer = archerDirector.construct('Archer', 'Archer', 'Bow', 'Light Armor');
archer.show();