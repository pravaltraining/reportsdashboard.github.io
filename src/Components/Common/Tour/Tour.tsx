import 'intro.js/introjs.css';
import introJs from 'intro.js';
import { Component } from 'react';
import { ITourSteps } from './ITourSteps';

interface Props {
    stepstart: boolean;
    stopTour: any;
    tourSteps:ITourSteps[];
}
interface IState {
}

class Tour extends Component<Props, IState> {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.exitTour = this.exitTour.bind(this);
    }

    componentDidUpdate() {
        if (this.props.stepstart) {
            var steps = this.getTourSteps()
            if (steps?.length > 0) {
                var intro = introJs()
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
                    intro.oncomplete(this.exitTour);
                    intro.onexit(this.exitTour)
                });
            }
        }
        

    }
    exitTour() {
        this.props.stopTour(false)
    }

    getTourSteps(steps:ITourSteps[] = this.props.tourSteps) {
        var filteredSteps = steps.filter(step => {
            const elementExists = document.querySelector(step.element) !== null;
            return elementExists;
        });

        return filteredSteps;
    }

    componentWillUnmount() {
        if (introJs()) {
            introJs().exit(true);
            this.exitTour()
        }
    }

    render() {
        return null;
    }
}

export default Tour;
