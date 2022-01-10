let dragItem: HTMLParagraphElement | null = null;

export function dragStart(this: any) {
    dragItem = this;
    setTimeout(() => this.classList.add('hidden'), 0);
}

export function dragEnd(this: any) {
    setTimeout(() => this.classList.add('visible'), 0);
    dragItem = null;
}

export function Drop(this: any) {
    this.append(dragItem);
    this.style.border = '2px solid black';
}

export function dragOver(this: HTMLElement, event: Event) {
    event.preventDefault();
    this.style.border = '2px dotted cyan';
}

export function dragEnter(event: Event) {
    event.preventDefault();
}

export function dragLeave(this: HTMLElement) {
    this.style.border = '2px solid black';
}
