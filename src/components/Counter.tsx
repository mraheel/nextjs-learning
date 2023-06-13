'use client'
import { Button } from "@/components/ui/button"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { counterActions } from "@/store/slice/counterSlice";

const CounterView = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(
        (state: RootState) => state.counterSlice.value
    );

    const increament = () => {
        dispatch(counterActions.increement())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <>
                <Button onClick={decrement} variant={"destructive"}>Decreement</Button>

          <span className="text-lg leading-10 font-semibold">{counterValue}</span>  
                  <Button onClick={increament} variant={"secondary"}>Increement</Button>

        </>
    )
}
export default CounterView