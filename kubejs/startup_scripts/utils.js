/**
 * 
 * @param {Internal.FluidType} fluidType 
 * @param {(level: Internal.Level, currentPos: Internal.BlockPos, relativePos: Internal.BlockPos, currentState: Internal.FluidState) => boolean} hasFluidInteraction 
 * @param {(level: Internal.Level, currentPos: Internal.BlockPos, relativePos: Internal.BlockPos, currentState: Internal.FluidState) => void} fluidInteraction 
 */
function registerFluidInteraction(fluidType, hasFluidInteraction, fluidInteraction) {
    const FluidInteractionRegistry = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry');
    const InteractionInformation$Class = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$InteractionInformation').__javaObject__;
    const HasFluidInteraction$Class = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$HasFluidInteraction').__javaObject__;
    const FluidInteraction$Class = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$FluidInteraction').__javaObject__;
    const UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS');
    const InteractionInformation$Constructor = InteractionInformation$Class.getConstructor(HasFluidInteraction$Class, FluidInteraction$Class);
    FluidInteractionRegistry.addInteraction(fluidType, InteractionInformation$Constructor.newInstance(
        UtilsJS.makeFunctionProxy('startup', HasFluidInteraction$Class, hasFluidInteraction),
        UtilsJS.makeFunctionProxy('startup', FluidInteraction$Class, fluidInteraction)
    ));
}