// UI Components
const UIform = document.getElementById('input-form')
const UItextArea = document.getElementById('note')
const UIrowDetail = document.getElementById('detail')

// Init Classes
const ui = new UI()

const local = new Local()

// Event Listeners
UIform.addEventListener('submit', getNote)
UIrowDetail.addEventListener('click', noteManip)
document.addEventListener('DOMContentLoaded', loadNote)

// Load Note function
function loadNote() {
    const noteObj = local.initNote()
    
    noteObj.forEach((note) => {
            ui.paintUI(note)
    })
}

// get note function
function getNote(e) {
    // Textarea value
    const note = UItextArea.value

    // note object
    let noteObj

    // Unique id
    const id = uniqueId()

    // Validation
    if(note === '') {
        // Add invalid class
        UItextArea.classList.add('is-invalid')
    }else {
        // Remove invalid class
        UItextArea.classList.remove('is-invalid')

        // Init note object
        noteObj = {
            'note' : note,
            'id' : id
        }

        // Paint UI
        ui.paintUI(noteObj)

        // save to local storage
        local.setNote(noteObj)
    
    }

    // Clear textarea field
    UItextArea.value = ''

    e.preventDefault()
}

// show modal function
function noteManip(e) {
    const noteObj = local.initNote()

    const deltarget = e.target.parentElement.parentElement.parentElement.parentElement
    
    noteObj.forEach((note) => {
        if(e.target.classList.contains(note.id)) {
            ui.paintModal(note)
        }
    })

    if(e.target.parentElement.classList.contains('delete')) {
        // delete note from UI
        ui.deleteUI(deltarget)

        // delete note from LS
        local.delNote(e.target.parentElement)
    }

    e.preventDefault()
}





//  unique id generator
function uniqueId() {
    const today = new Date()
    const arr = today.toLocaleTimeString().split(' ')
    const a  = Math.floor(Math.random() * 10).toString()
    const b  = Math.floor(Math.random() * 10).toString()
    const c  = Math.floor(Math.random() * 10).toString()
    const d  = Math.floor(Math.random() * 10).toString()

    const letter = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z']

    const letcunt = Math.floor(Math.random() * 52)
    const lotcunt = Math.floor(Math.random() * 52)

    const lett = letter[letcunt]
    const lott = letter[lotcunt]

    const e = lett + a + b + arr[0] + c + d + lott

    return e
}
