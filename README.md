# magFlipEditor
The MagFlipEditor project is an extension of the MagFlip project, aiming to build an editor that allows users to design books and work on individual pages effectively. The goal is to develop the core editing package required for smooth editing. I plan to benchmark popular tools like Figma, Miro, Konva, and Canva to create a similar, but more suitable solution for the MagFlip project.

Below are the implementation details and requirements for the editor:

[ 19th, Oct, 2024 ]
- [ ] Node hierarchy follows this structure: Canvas > Layer > Group > Element
- [ ] Each object will have a unique z-index.
- [ ] Events will be integrated, including flip-related events such as flipStart, flipping(%), flipEnd, turnback, and turnbackend.
- [ ] Create a HitCanvas and assign a unique color value to each object to identify which element triggered an event.
- [ ] Implement z-index updates through collision detection. 
Use AABB(Axis-Aligned Bounding Box) for detecting collisions, and apply SAT(Separating Axis Theorem) when rotations are involved. 
Alternatively, matter.js or Box2D-wasm could be used for collision detection.
- [ ] Add undo/redo support to allow non-destructive editing. 
When writing all action-related functions, make sure to account for undo and redo functionality.
- [ ] Include a zoom feature.
- [ ] Implement basic editing functions, such as Drag & Drop, Resizing, Rotating, Lock, Hide, Page Selection, Add Page, Delete Page, Copy Page, Move Page, Paste, and Cut.
- [ ] Ensure the editor supports importing/exporting in multiple file formats (e.g., PDF, PNG, SVG).
- [ ] Implement snap-to-grid and alignment guides to assist with precise positioning.
- [ ] ~~Enable collaborative editing, allowing multiple users to work simultaneously on the same book.~~