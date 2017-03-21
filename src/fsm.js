class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.intial = config.intial;
        this.current = this.intial;
        this.next = '';
        this.prev = '';
        this.states = config.states;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.current;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        this.prev = this.current;
        this.current = state;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        if (this.event === 'study' && this.current === 'normal') {
            changeState('busy');
        } else if (this.event === 'get_tired' && this.current === 'busy') {
            changeState('sleeping');
        } else if (this.event === 'get_hungry' && this.current === 'busy') {
            changeState('hungry');
        } else if (this.event === 'eat' && this.current === 'hungry') {
            changeState('normal');
        } else if (this.event === 'get_hungry' && this.current === 'sleeping') {
            changeState('hungry');
        } else if (this.event === 'get_up' && this.current === 'sleeping') {
            changeState('normal');
        } else {
            console.log('Error');
        }
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.current = this.intial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        var allStates = ['normal', 'busy', 'hungry', 'sleeping'];
        if (event === undefined) {
            return allStates;
        }
        else {
            return 
        }
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        if (this.prev === '') {
            return false;
        }
        else {
            this.state = this.prev;
            return true;
        }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
        if (this.next == '') {
            return false;
        }
        else {
            this.current = this.next;
            return true;
        }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
        this.prev = '';
        this.next = '';
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
