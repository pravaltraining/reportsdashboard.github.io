import 'intro.js/introjs.css';
import introJs from 'intro.js';
import { useEffect } from 'react';
import { ITourSteps } from './ITourSteps';

interface Props {
    stepstart: boolean;
    stopTour: any;
    tourSteps: ITourSteps[];
}

const Tour: React.FC<Props> = ({ stepstart, stopTour, tourSteps }) => {

    useEffect(() => {
        if (stepstart) {
            const steps = getTourSteps();
            if (steps?.length > 0) {
                const intro = introJs();
                intro.setOptions({
                    exitOnOverlayClick: false,
                    showStepNumbers: false,
                    showBullets: false,
                    showProgress: false,
                    exitOnEsc: false,
                    tooltipClass: 'custom-tooltip-class',
                    disableInteraction: true,
                    scrollToElement: true,
                    steps: steps,
                }).start().then(() => {
                    intro.oncomplete(exitTour);
                    intro.onexit(exitTour);
                });
            }
        }
    }, [stepstart, tourSteps]);

    const exitTour = () => {
        stopTour(false);
    };

    const getTourSteps = (steps: ITourSteps[] = tourSteps) => {
        return steps.filter(step => {
            const elementExists = document.querySelector(step.element) !== null;
            return elementExists;
        });
    };

    useEffect(() => {
        return () => {
            const intro = introJs();
            if (intro) {
                intro.exit(true);
                exitTour();
            }
        };
    }, []);

    return null;
};

export default Tour;
