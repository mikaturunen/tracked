import { connect } from 'react-redux';
import { countersActions, countersSelectors } from '@src/redux/counters';
import { SFCCounter } from '@src/components';
const mapStateToProps = (state) => ({
    count: countersSelectors.getReduxCounter(state),
});
export const SFCCounterConnected = connect(mapStateToProps, {
    onIncrement: countersActions.increment,
})(SFCCounter);
//# sourceMappingURL=sfc-counter-connected.js.map