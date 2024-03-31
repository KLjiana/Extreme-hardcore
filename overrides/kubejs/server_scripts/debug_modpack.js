// packmode: debug
PlayerEvents.chestClosed(event => {
    event.server.tell(event.inventory.allItems)
})