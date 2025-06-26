export const Modal = ({ content }) => {
  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box">
        <div>
          {content}
          <form method="dialog">
            <button className="btn">Fermer</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
