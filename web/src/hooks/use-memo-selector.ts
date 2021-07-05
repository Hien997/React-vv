import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { OutputSelector } from 'reselect';
import { StateAll } from 'src/state/ducks/models';

export const useMemoSelector = <R, C>(
  outputSelector: OutputSelector<StateAll, R, C>
) => {
  const memoSelector = useMemo(() => {
    return outputSelector;
  }, [outputSelector]);

  const result = useSelector((state: StateAll) => memoSelector(state));

  return result;
};
