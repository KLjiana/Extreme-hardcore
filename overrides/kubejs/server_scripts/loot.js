LootJS.modifiers(event => {     
    event
        .addBlockLootModifier('#minecraft:leaves')
        .removeLoot('minecraft:stick')
        .randomChance(0.1)
        .addLoot('minecraft:stick');
});