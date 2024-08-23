import PropTypes from 'prop-types';
import '../style.css';
import { useEffect } from 'react';

function Modal({ isOpen, onClose, title, messageBody, actions, modalRef }) {
    // Utilise un effet pour gérer l'écouteur d'événements sur la touche "Escape".
    // Lorsque la modal est ouverte, la touche "Escape" permet de la fermer.
    // L'effet est nettoyé lorsque la modal est fermée ou lorsque le composant est démonté.
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        } else {
            document.removeEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    // Retourne null si la modal n'est pas ouverte, empêchant ainsi le rendu de la modal dans le DOM.
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose} ref={modalRef}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                {title && (
                    <div className="modal-header">
                        <h3>{title}</h3>
                        <button className="button" onClick={onClose}>
                            X
                        </button>
                    </div>
                )}
                {messageBody && <div className="modal-body">{messageBody}</div>}
                {actions && actions.length > 0 && (
                    <div className="modal-footer">
                        {actions.map((action, index) => {
                            return (
                                <button
                                    className="button"
                                    key={index}
                                    onClick={action.actionFor}
                                >
                                    {action.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    messageBody: PropTypes.string,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            actionFor: PropTypes.func,
        }),
    ),
    modalRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
};

export default Modal;
