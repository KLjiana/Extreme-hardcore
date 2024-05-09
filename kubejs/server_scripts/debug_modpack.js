// packmode: debug
// 写一些调试用的小工具（谁会想当码字苦力啊！

// 一键获取箱子里的物品，快速打tag）
PlayerEvents.chestClosed(event => {
    event.inventory.allItems.forEach(item => {
        event.server.tell(`event.add('extreme_hardcore:wood',${item.toItemString()})`)
    })
})


const $Entity = Java.loadClass('net.minecraft.world.entity.Entity');
/**
 * @type {Internal.Class<Internal.Entity>}
 */
const entityClass = $Entity.__javaObject__;
const portalTime = entityClass.getDeclaredField("portalTime");
