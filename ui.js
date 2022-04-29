class UI {
  constructor() {
    this.detail = document.getElementById('detail');
    this.detailBody = document.getElementById('detail-body');
    this.innerHtml = '';
  }

  paintUI(noteObj) {
    const note = noteObj.note.slice(0, 250);

    this.innerHtml += `
            <div class="col-md-6 mx-auto">
                <div class="card mt-2 mb-3" style="height: 190px;">
                    <div class="card-body">
                        <div class="pb-2">
                            ${note}
                        </div>
                    </div>
                    <div class='card-footer'>
                        <button type="button" id="details-btn" class="btn btn-primary ${noteObj.id}" data-toggle="modal" data-target="#locModal">
                            Details
                        </button>
                        <a href="#" class="delete float-right pr-4 ${noteObj.id}"><h2>X</h2></a>
                        </div>
                </div>
            </div>
        `;

    this.detail.innerHTML = this.innerHtml;
  }

  paintModal(noteObj) {
    this.detailBody.textContent = noteObj.note;
  }

  deleteUI(target) {
    target.remove();
  }
}
