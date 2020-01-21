// 사용할 hooks 가져오고
import { useSelector, useDispatch } from "react-redux";
// RootState 불러오고
import { RootState } from "../modules";
// counter Module에서 export 시킨 action 생성함수 불러오고
import { increase, decrease, increaseBy } from "../modules/counter";
import { useCallback } from "react";

export default function useCounter() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    const onIncreaseBy = useCallback(
        (diff: number) => dispatch(increaseBy(diff)),
        [dispatch]
    );

    return {
        count,
        onIncrease,
        onDecrease,
        onIncreaseBy
    };
}
