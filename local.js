class Local {
    constructor() {
        this.notes
    }

    initNote() {
        if(localStorage.getItem('Note') === null) {
            this.notes = []
        }else {
            this.notes = JSON.parse(localStorage.getItem('Note'))
        }

        return this.notes
    }

    setNote(noteObj) {
        let notes = this.initNote() 
        
        notes.push(noteObj)

        localStorage.setItem('Note', JSON.stringify(notes))
    }

    delNote(target) {
        let notes = this.initNote()

        notes.forEach((note, index) => {
            if(target.classList.contains(note.id)) {
                notes.splice(index, 1)
            }
        })

        localStorage.setItem('Note', JSON.stringify(notes)) 
    }
}