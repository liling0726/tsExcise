/**
 * 函数参数双向协变
 */
enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x1: number; y1: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x1 + "," + e.y1));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x1 + "," + (<MouseEvent>e).y1));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x1 + "," + e.y1)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// error Argument of type '(e: number) => void' is not assignable to parameter of type '(n: Event) => void'.
listenEvent(EventType.Mouse, (e: number) => console.log(e));
