# @lebdioua/react-modal-plugin
Un composant modal personnalisable pour React avec des fonctionnalités de fermeture sur clic extérieur, sur touche Escape, et des actions personnalisables.

## Installation
Vous pouvez installer le package en utilisant npm :
`npm install @lebdioua/react-modal-plugin`

ou en utilisant yarn :
`yarn add @lebdioua/react-modal-plugin`

## Utilisation
Voici un exemple de base de l'utilisation du composant **Modal** :

```
import React, { useState, useRef } from 'react';
import Modal from '@lebdioua/react-modal-plugin';
import '@lebdioua/react-modal-plugin/dist/style.css'; // Assurez-vous d'importer le CSS

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAction = () => {
    alert('Action button clicked');
    handleCloseModal();
  };

  return (
    <div>
      <h1>Exemple de Modal</h1>
      <button onClick={handleOpenModal}>Ouvrir Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Titre du Modal"
        messageBody="Ceci est le corps du modal."
        actions={[
          { label: 'Action', actionFor: handleAction },
          { label: 'Annuler', actionFor: handleCloseModal }
        ]}
        modalRef={modalRef}
      />
    </div>
  );
};

export default App;
```

## Fonctionnalités
* Contrôle de l'ouverture/fermeture : Contrôlez la visibilité du modal avec une prop boolean.
- Gestion de la touche Escape : Fermez le modal lorsque la touche Escape est pressée.
+ Titre personnalisable : Affichez un titre optionnel en haut du modal.
* Corps personnalisable : Affichez un contenu personnalisé dans le corps du modal.
- Boutons d'action : Incluez des boutons personnalisables dans le pied du modal.
+ Clique extérieur pour fermer : Fermez le modal en cliquant en dehors du contenu du modal.

## Props
Le composant **GridMain** accepte les props suivantes :
| Prop Name    | Type     | Required | Description                                                                 |
|--------------|----------|----------|-----------------------------------------------------------------------------|
| `isOpen`       | `bool`  | oui      | Contrôle la visibilité du modal. |
| `onClose` | `func` | oui    | Fonction de callback appelée lorsque le modal est fermé.   |
| `title` | `string` | non    | Titre optionnel à afficher dans l'en-tête du modal. |
| `messageBody` | `string` | non    | 	Contenu optionnel à afficher dans le corps du modal. |
| `action` | `arrayOf(shape({ label: string, actionFor: func }))` | non    | Tableau de boutons d'action à afficher dans le pied du modal. Chaque bouton est un objet avec les propriétés **label** et **actionFor**.|
| `modalRef` | `oneOfType([func, shape({ current: instanceOf(Element) })])` | non    | 	Ref optionnelle à attacher au conteneur du modal pour une manipulation directe du DOM. |

## Styles
Assurez-vous d'importer le fichier CSS pour appliquer les styles par défaut :
`import '@lebdioua/react-modal-plugin/dist/style.css';`

Vous pouvez personnaliser les styles en surchargant les classes CSS par défaut :

```
.modal-overlay {
  /* Vos styles personnalisés */
}

.modal-container {
  /* Vos styles personnalisés */
}

.modal-header {
  /* Vos styles personnalisés */
}

.modal-body {
  /* Vos styles personnalisés */
}

.modal-footer {
  /* Vos styles personnalisés */
}

.button {
  /* Vos styles personnalisés pour les boutons */
}
```

## Contribution
Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request pour tout bug ou amélioration.

## Remerciements
Inspiré par le besoin d'un composant modal flexible et réutilisable pour React.
