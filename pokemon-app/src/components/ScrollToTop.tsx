import { useState, useEffect } from "react";
import "../style/ScrollToTopButton.css";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window; // Permet de détecter la position actuelle de défilement vertical de la fenêtre et la stocke dans la variable scrollY.
    const windowHeight = window.innerHeight; // Permet de récupérer la hauteur visible de la fenêtre du navigateur et cela la stocke dans la variable windowHeight.
    const bodyHeight = document.body.clientHeight; // On obtient la hauteur totale du corps du document (toute la page) et on la stocke dans la variable bodyHeight

    const progress = (scrollY / (bodyHeight - windowHeight)) * 100; //calcule automatiquement le pourcentage de progression du défilement en utilisant la formule (scrollY / (bodyHeight - windowHeight)) 100.

    setScrollProgress(progress);
    // On utilise la valeur actuelle de scrollY pour déterminer si l'utilisateur a fait défiler la page de plus de 100 pixels vers le bas. Si c'est le cas, on utilise setIsVisible(true) pour rendre le bouton de retour en haut visible, sinon on le rend invisible en utilisant setIsVisible(false).
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; // Cette fonction utilise la méthode window.scrollTo() avec l'option behavior: 'smooth' pour créer une transition douce vers le haut de la page.

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); //  Lorsque l'utilisateur fait défiler la page, la fonction handleScroll sera appelée.
    return () => {
      window.removeEventListener("scroll", handleScroll); //"clean-up function". Elle sera exécutée lorsque le composant est démonté ou que l'effet doit être nettoyé. Ici, elle supprime l'écouteur d'événement de défilement pour éviter des fuites de mémoire potentielles.
    };
  }, []);

  return (
    <div className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}>
      <div
        className="progress-circle"
        style={{
          borderImage: `conic-gradient(#4681a1 ${scrollProgress}%, transparent 0%) 1`,
        }}
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
      >
        <div className="arrow-up" />
      </div>
    </div>
  );
};

export default ScrollToTop;
