import { connect } from 'react-redux';
import { countersActions, countersSelectors } from '@src/redux/counters';
import { SFCCounter } from '@src/components';
const mapStateToProps = (state, ownProps) => ({
    count: countersSelectors.getReduxCounter(state) + ownProps.initialCount,
});
export const SFCCounterConnectedExtended = connect(mapStateToProps, {
    onIncrement: countersActions.increment,
})(SFCCounter);
//# sourceMappingURL=sfc-counter-connected-extended.js.map