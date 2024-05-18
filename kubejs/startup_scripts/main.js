ForgeModEvents.onEvent('net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent', event => {
    registerFluidInteraction(Blocks.LAVA.fluid.fluidType,
        (level, currentPos, relativePos, currentState) => level.getBlockState(currentPos.below()).is(Blocks.BEDROCK),
        (level, currentPos, relativePos, currentState) => {
            let blockState = currentState.isSource() ? Blocks.DIAMOND_BLOCK.defaultBlockState() : Blocks.DIAMOND_ORE.defaultBlockState();
            level.setBlockAndUpdate(currentPos, blockState);
            level.levelEvent(1501, currentPos, 0);
        }
    )
})
