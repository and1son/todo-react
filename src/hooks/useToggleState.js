import { useState } from "react";


export default function useToggleState(initialVal = false) {
    const [state, setState] = useState(initialVal)

    const useToggle = () => {
        setState(!state)
    }

    return [state, useToggle]
}
