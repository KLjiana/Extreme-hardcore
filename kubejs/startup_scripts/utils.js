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
    const Object$Class = Java.loadClass('java.lang.Object').__javaObject__;
    const classLoader = FluidInteractionRegistry.__javaObject__.getClassLoader();
    const Class$Class = classLoader.loadClass('java.lang.Class');
    const Context$Class = classLoader.loadClass('dev.latvian.mods.rhino.Context');
    const KubeJS$Class = classLoader.loadClass('dev.latvian.mods.kubejs.KubeJS');
    const context = KubeJS$Class.getDeclaredMethod('getStartupScriptManager').invoke(null).context;
    const InteractionInformation$Constructor = InteractionInformation$Class.getConstructor(HasFluidInteraction$Class, FluidInteraction$Class);
    const Context$jsToJava = Context$Class.getDeclaredMethod('jsToJava', Context$Class, Object$Class, Class$Class);
    FluidInteractionRegistry.addInteraction(fluidType, InteractionInformation$Constructor.newInstance(
        Context$jsToJava.invoke(null, context, hasFluidInteraction, HasFluidInteraction$Class),
        Context$jsToJava.invoke(null, context, fluidInteraction, FluidInteraction$Class)
    ));
}