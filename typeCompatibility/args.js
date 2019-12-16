/**
 * 函数参数双向协变
 */
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
    /* ... */
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, function (e) { return console.log(e.x1 + "," + e.y1); });
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, function (e) { return console.log(e.x1 + "," + e.y1); });
listenEvent(EventType.Mouse, (function (e) { return console.log(e.x1 + "," + e.y1); }));
listenEvent(EventType.Mouse, (function (e) { return console.log(e.x1 + "," + e.y1); }));
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// error Argument of type '(e: number) => void' is not assignable to parameter of type '(n: Event) => void'.
listenEvent(EventType.Mouse, function (e) { return console.log(e); });
