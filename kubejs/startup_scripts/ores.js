onEvent("worldgen.remove", (event) => {
  // Vanilla
  event.removeOres((ores) => {
    ores.blocks = [
      "minecraft:coal_ore",
      "minecraft:diamond_ore",
      "minecraft:emerald_ore",
      "minecraft:gold_ore",
      "minecraft:iron_ore",
      "minecraft:lapis_ore",
      "minecraft:nether_gold_ore",
      "minecraft:nether_quartz_ore",
      "minecraft:redstone_ore",
    ];
  });

  // Darker Depths
  /* Vanilla Ores */
  event.removeFeatureById("underground_ores", "darkerdepths:aridrock_coal_ore");
  event.removeFeatureById("underground_ores", "darkerdepths:limestone_coal_ore");
  event.removeFeatureById("underground_ores", "darkerdepths:aridrock_ore_iron");
  event.removeFeatureById("underground_ores", "darkerdepths:limestone_ore_iron");
  event.removeFeatureById("underground_ores", "darkerdepths:aridrock_ore_gold");
  event.removeFeatureById("underground_ores", "darkerdepths:limestone_ore_gold");
  event.removeFeatureById("underground_ores", "darkerdepths:aridrock_ore_redstone");
  event.removeFeatureById("underground_ores", "darkerdepths:limestone_ore_redstone");
  event.removeFeatureById("underground_ores", "darkerdepths:aridrock_ore_diamond");
  event.removeFeatureById("underground_ores", "darkerdepths:limestone_ore_diamond");
  event.removeFeatureById("underground_ores", "darkerdepths:aridrock_ore_lapis");
  event.removeFeatureById("underground_ores", "darkerdepths:limestone_ore_lapis");
  /* Custom Ores */
  event.removeFeatureById("underground_ores", "darkerdepths:aridrock_ore_silver");
  event.removeFeatureById("underground_ores", "darkerdepths:limestone_ore_silver");
  event.removeFeatureById("underground_ores", "darkerdepths:silver_ore");
});
