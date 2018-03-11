import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { countersActions } from '@src/redux/counters';
import { SFCCounter } from '@src/components';
const mapStateToProps = (state) => ({
    count: state.counters.reduxCounter,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    onIncrement: countersActions.increment,
}, dispatch);
export const SFCCounterConnectedVerbose = connect(mapStateToProps, mapDispatchToProps)(SFCCounter);
//# sourceMappingURL=sfc-counter-connected-verbose.js.map